from django.urls import path
from .views import TopSuggestedMoviesAPIView

urlpatterns = [
    path(
        "top-suggested-movies/",
        TopSuggestedMoviesAPIView.as_view(),
        name="top movie suggestions",
    ),
]
