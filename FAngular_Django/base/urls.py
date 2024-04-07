from django.contrib import admin
from django.urls import path, include
from . import views
from base.views import BookViewSet
from rest_framework import routers

routers = routers.DefaultRouter()
routers.register('books', BookViewSet)

app_name = 'base'

urlpatterns = [
    path('first', views.first),
    path('', include(routers.urls)),
    # path('another', Another.as_view())
]