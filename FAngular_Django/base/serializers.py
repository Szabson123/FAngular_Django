from rest_framework import serializers
from base.models import Book, BookNumber, Character, Author


class CharacterSerializer(serializers.ModelSerializer):
    class Meta:
        model = Character
        fields = ['name', 'book']


class AuthorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Author
        fields = ['name', 'surname']


class BookNumberSerializer(serializers.ModelSerializer):
    class Meta:
        model = BookNumber
        fields = ['isbn_10', 'isbn_13']


class BookSerializer(serializers.ModelSerializer):
    number = BookNumberSerializer(many=False)
    character = CharacterSerializer(many=True)
    author = AuthorSerializer(many=True)
    class Meta:
        model = Book
        fields = ['id', 'title', 'price', 'published', 'cover', 'number', 'character', 'author']
