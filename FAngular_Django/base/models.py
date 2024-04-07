from django.db import models

# Create your models here.


class Book(models.Model):
    title = models.CharField(max_length=50, blank=False, unique=True)
    description = models.TextField(blank=True, null=True)

    price = models.DecimalField(default=0, decimal_places=2, max_digits=10)
    published = models.DateField(blank=True, null=True)
    is_published = models.BooleanField(default=False)
    cover = models.ImageField(upload_to='covers/', blank=True, null=True)

    def __str__(self):
        return f"{self.title}"