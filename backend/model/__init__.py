import pickle
from django.conf import settings
from pathlib import Path

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

def movies_recommendation(movie_title):
    """
    Returns a list of similar movie IDs based on the given movie ID.
    """
    if not movie_title:
        return []
    try:
        position = data[data["title"] == movie_title]
        if position.empty:
            return []
        iloc_index = data.index.get_loc(position.index[0])

        _, indices = model.kneighbors(vector[iloc_index], n_neighbors=7)
        return [data.iloc[i]["id"] for i in indices[0][1:]]

    except IndexError:
        return []
