from django.urls import path
from .views import (
    TopSuggestedMoviesAPIView,
    SimilarMoviesRecommendationAPIView,
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
]
