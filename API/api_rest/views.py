from django.shortcuts import render, HttpResponse
from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import APIView
from rest_framework import generics, mixins
from rest_framework import viewsets
from django.shortcuts import get_object_or_404

from .models import Article
from .serializers import ArticleSerializer

# using viewsets.ModelViewSet
# all methods are available without writing them, usign ModelViewSet
class ArticleViewSet(viewsets.ModelViewSet):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer

# Create your views here.   
def index(request):
    return HttpResponse("<h1>Index working...</h1>")