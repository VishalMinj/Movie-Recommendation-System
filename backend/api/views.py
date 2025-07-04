from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from model import top_suggestions
from .utils import get_movies
from .serializers import MovieSerializer


class TopSuggestedMoviesAPIView(APIView):
    def get(self, request):
        movies = top_suggestions()
        data = get_movies(movies)
        serialized = MovieSerializer(data, many=True)
        return Response(serialized.data, status=status.HTTP_200_OK)


