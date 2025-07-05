from rest_framework import serializers


class MovieSerializer(serializers.Serializer):
    Title= serializers.CharField(max_length=255,required=False, allow_null=True)
    Runtime = serializers.CharField(max_length=50,required=False, allow_null=True)
    Poster = serializers.URLField(required=False, allow_null=True)
    imdbRating = serializers.CharField(max_length=10,required=False, allow_null=True)
    imdbID = serializers.CharField(max_length=20,required=False, allow_null=True)