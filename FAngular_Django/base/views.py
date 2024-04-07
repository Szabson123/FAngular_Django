from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.
from django.views import View
from base.models import Book
from rest_framework import viewsets
from base.serializers import BookSerializer


# class Another(View):
#     template_name = 'base/template1'
#     def get(self, request):
#         # 'zamiast filter lub all dam get to tylko jeden obiekt'
#         # books = Book.objects.filter(is_published=True)
#         # output = ''
#         # for book in books:
#         #     output += f"We have {book.title} with ID {book.id}<br>"
#         return HttpResponse('')


def first(request):
    books = Book.objects.all()
    return render(request, 'base/template1.html', {'books': books})


class BookViewSet(viewsets.ModelViewSet):
    serializer_class = BookSerializer
    queryset = Book.objects.all()
