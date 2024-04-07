from django.shortcuts import render
from rest_framework import viewsets, status
from base.serializers import MovieSerializer, RatingSerializer
from rest_framework.decorators import action
from rest_framework.response import Response
from base.models import Movie, Rating


class MovieViewSet(viewsets.ModelViewSet):
    queryset = Movie.objects.all()
    serializer_class = MovieSerializer

    @action(detail=True, methods=['POST'])
    def rate_movie(self, request, pk=None):

        if 'stars' in request.data:
            movie = Movie.objects.get(id=pk)
            print(f'Twoj tytuł to: ', movie.title)
            response = {'message': 'its working'}
            return Response(response, status=status.HTTP_200_OK)
        else:
            response = {'message': 'You need to provide stars'}
            return Response(response, status=status.HTTP_400_BAD_REQUEST)


class RatingViewSet(viewsets.ModelViewSet):
    queryset = Rating.objects.all()
    serializer_class = RatingSerializer


