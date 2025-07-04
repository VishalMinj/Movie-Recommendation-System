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
    movies = data[(data["rating"] > 8.5) & (data["year"] > 2018)]
    movies = movies.sample(6)
    return [movie.id for movie in movies.itertuples()]
