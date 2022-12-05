from django.db import models

# Create your models here.
class Article(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField()
    slug = models.TextField(max_length=40)

    # Add in thumbnail and author later
    def __str__(self):
        return self.title

    # def snippet(self):
    #     return self.body[:50] + '...'