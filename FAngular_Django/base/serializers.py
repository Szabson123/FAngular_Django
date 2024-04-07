from rest_framework import serializers
from base.models import Book, BookNumber, Character


class CharacterSerializer(serializers.ModelSerializer):
    class Meta:
        model = Character
        fields = ['name', 'book']


class BookNumberSerializer(serializers.ModelSerializer):
    class Meta:
        model = BookNumber
        fields = ['isbn_10', 'isbn_13']


class BookSerializer(serializers.ModelSerializer):
    number = BookNumberSerializer(many=False)
    character = CharacterSerializer(many=True)
    class Meta:
        model = Book
        fields = ['id', 'title', 'price', 'published', 'cover', 'number', 'character']
