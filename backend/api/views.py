from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from model import top_suggestions, movies_recommendation
from .utils import get_movies
from .serializers import MovieSerializer
from drf_spectacular.utils import extend_schema, OpenApiExample
from drf_spectacular import openapi
from drf_spectacular.types import OpenApiTypes


class TopSuggestedMoviesAPIView(APIView):

    @extend_schema(
        tags=["Recommendations"],
        responses={status.HTTP_200_OK: MovieSerializer(many=True)},
    )
    def get(self, request):
        movies = top_suggestions()
        data = get_movies(movies)
        serialized = MovieSerializer(data, many=True)
        return Response(serialized.data, status=status.HTTP_200_OK)


class SimilarMoviesRecommendationAPIView(APIView):

    @extend_schema(
        tags=["Recommendations"],
        request=OpenApiTypes.OBJECT,
        examples=[
            OpenApiExample(
                name="Movie Title",
                value={"movie_title": "Spider-Man"},
                request_only=True,
            )
        ],
    )
    def post(self, request):
        movie_title = request.data.get("movie_title", None)
        movies = movies_recommendation(movie_title)
        if not movies:
            return Response(
                {"message": "No similar movies found."},
                status=status.HTTP_404_NOT_FOUND,
            )
        data = get_movies(movies)
        serialized = MovieSerializer(data, many=True)
        return Response(serialized.data, status=status.HTTP_200_OK)
