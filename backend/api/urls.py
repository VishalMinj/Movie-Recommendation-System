from django.urls import path
from .views import (
    TopSuggestedMoviesAPIView,
    SimilarMoviesRecommendationAPIView,
    SearchMoviesAPIView,
)

urlpatterns = [
    path(
        "top-suggested-movies/",
        TopSuggestedMoviesAPIView.as_view(),
        name="top movie suggestions",
    ),
    path(
        "similar-recommendation-movies/",
        SimilarMoviesRecommendationAPIView.as_view(),
        name="similar movies recommendation",
    ),
    path(
        "search-movies/",
        SearchMoviesAPIView.as_view(),
        name="search movies",
    ),
]
