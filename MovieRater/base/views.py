from django.shortcuts import render, get_object_or_404
from rest_framework import viewsets, status
from base.serializers import MovieSerializer, RatingSerializer, UserSerializer
from rest_framework.authentication import TokenAuthentication
from rest_framework.decorators import action
from rest_framework.response import Response
from base.models import Movie, Rating
from django.contrib.auth.models import User
from rest_framework.permissions import IsAuthenticated, AllowAny


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer


class MovieViewSet(viewsets.ModelViewSet):
    queryset = Movie.objects.all()
    serializer_class = MovieSerializer
    authentication_classes = (TokenAuthentication, )
    permission_classes = (IsAuthenticated, )

    @action(detail=True, methods=['POST'])
    def rate_movie(self, request, pk=None):

        if 'stars' in request.data:
            movie = get_object_or_404(Movie, pk=pk)
            stars = request.data['stars']
            user = request.user
            print(f'Twoj tytuł to: ', movie.title)
            try:
                rating = Rating.objects.get(user=user, movie=movie)
                rating.stars = stars
                rating.save()
                serializer = RatingSerializer(rating, many=False)
                response = {'message': 'Rating updated', 'result': serializer.data}
                return Response(response, status=status.HTTP_200_OK)

            except:
                rating = Rating.objects.create(user=user, movie=movie, stars=stars)
                serializer = RatingSerializer(rating, many=False)
                response = {'message': 'Rating created', 'result': serializer.data}
                return Response(response, status=status.HTTP_200_OK)
        else:
            response = {'message': 'You need to provide stars'}
            return Response(response, status=status.HTTP_400_BAD_REQUEST)


class RatingViewSet(viewsets.ModelViewSet):
    queryset = Rating.objects.all()
    serializer_class = RatingSerializer
    authentication_classes = (TokenAuthentication,)
    permission_classes = (IsAuthenticated, )

    def update(self, request, *args, **kwargs):
        response = {'message': 'Tou cant like that '}
        return Response(response, status=status.HTTP_400_BAD_REQUEST)

    def create(self, request, *args, **kwargs):
        response = {'message': 'Tou cant like that '}
        return Response(response, status=status.HTTP_400_BAD_REQUEST)


