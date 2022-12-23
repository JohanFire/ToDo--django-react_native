from django.shortcuts import render, HttpResponse
from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import APIView
from rest_framework import generics, mixins
from rest_framework import viewsets
from django.shortcuts import get_object_or_404

from .models import Article
from .serializers import ArticleSerializer

# using viewsets.GenericViewSet
# all methods are available without writing them, usign GnericViewSet & mixins
class ArticleViewSet(viewsets.GenericViewSet, mixins.ListModelMixin, mixins.CreateModelMixin, mixins.UpdateModelMixin, mixins.RetrieveModelMixin, mixins.DestroyModelMixin):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer

# Create your views here.   
def index(request):
    return HttpResponse("<h1>Index working...</h1>")