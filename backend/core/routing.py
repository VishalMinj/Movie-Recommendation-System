from django.urls import path

from .consumers import MovieSearchConsumer

websocket_urlpatterns = [
    path(
        "api/search-movies/",
        MovieSearchConsumer.as_asgi(),
        name="search movies",
    ),
]
