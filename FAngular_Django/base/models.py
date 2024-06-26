from django.db import models


class BookNumber(models.Model):
    isbn_10 = models.CharField(max_length=10, blank=True)
    isbn_13 = models.CharField(max_length=13, blank=True)


class Book(models.Model):
    title = models.CharField(max_length=50, blank=False, unique=True)
    description = models.TextField(blank=True, null=True)

    price = models.DecimalField(default=0, decimal_places=2, max_digits=10)
    published = models.DateField(blank=True, null=True)
    is_published = models.BooleanField(default=False)
    cover = models.ImageField(upload_to='covers/', blank=True, null=True)

    number = models.OneToOneField(BookNumber, null=True, blank=True, on_delete=models.CASCADE)

    def __str__(self):
        return f"{self.title}"


class Character(models.Model):
    name = models.CharField(max_length=15)
    book = models.ForeignKey(Book, on_delete=models.CASCADE, related_name='character')


class Author(models.Model):
    name = models.CharField(max_length=15)
    surname = models.CharField(max_length=15)
    books = models.ManyToManyField(Book, related_name='author')