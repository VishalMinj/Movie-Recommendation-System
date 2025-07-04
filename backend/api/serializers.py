from rest_framework import serializers


class MovieSerializer(serializers.Serializer):
    Title= serializers.CharField(max_length=255,required=False, allow_null=True)
    Year = serializers.CharField(max_length=4,required=False, allow_null=True)
    Release = serializers.CharField(max_length=255,required=False, allow_null=True)
    Runtime = serializers.CharField(max_length=50,required=False, allow_null=True)
    Genre = serializers.CharField(max_length=255,required=False, allow_null=True)
    Director = serializers.CharField(max_length=255,required=False, allow_null=True)
    Plot = serializers.CharField(max_length=1000,required=False, allow_null=True)
    Actors = serializers.CharField(max_length=500,required=False, allow_null=True)
    Poster = serializers.URLField(required=False, allow_null=True)
    imdbRating = serializers.CharField(max_length=10,required=False, allow_null=True)