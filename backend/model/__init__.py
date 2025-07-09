import pickle
from django.conf import settings
from pathlib import Path
import re

data, vector, model = None, None, None


path = Path(settings.BASE_DIR) / "model" / "assets"

with open(path / "data.pkl", "rb") as f:
    data = pickle.load(f)

with open(path / "vector.pkl", "rb") as f:
    vector = pickle.load(f)

with open(path / "model.pkl", "rb") as f:
    model = pickle.load(f)


def top_suggestions():
    """
    Returns a list of movie IDs ..
    """
    movies = data.sample(6)
    return [movie.id for movie in movies.itertuples()]


def movies_recommendation(movie_id):
    """
    Returns a list of similar movie IDs based on the given movie ID.
    """
    if not movie_id:
        return []
    try:
        position = data[data["id"] == movie_id]
        if position.empty:
            return []
        iloc_index = data.index.get_loc(position.index[0])

        _, indices = model.kneighbors(vector[iloc_index], n_neighbors=6)
        return [data.iloc[i]["id"] for i in indices[0]]

    except IndexError:
        return []


def search_movies(query):
    """
    Returns a list of movie IDs that match the search query.
    """

    safe_query = re.escape(query.strip())
    filtered_movies = data[
        data["title"].str.contains(safe_query, regex=True, case=True, na=False)
    ]

    if filtered_movies.empty:
        return []

    movies = [{'title':movie.title, 'id':movie.id} for movie in filtered_movies.itertuples()]
    movies.sort(key=lambda x: x['title'].lower().find(safe_query.lower()))
    movies.sort(key=lambda x: len(x['title']))
    return movies[:7]
    
