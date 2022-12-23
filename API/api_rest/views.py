from django.shortcuts import render, HttpResponse
from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import APIView
from rest_framework import generics, mixins

from .models import Article
from .serializers import ArticleSerializer

# mixins.ListModelMixin = get all objects
# mixins.CreateModelMixin = create object
class ArticleList(generics.GenericAPIView, mixins.ListModelMixin, mixins.CreateModelMixin):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer

    def get(self, request):
        return self.list(request)
    
    def post(self, request):
        return self.create(request)

# mixins.RetrieveModelMixin = get detailed object
# mixins.UpdateModelMixin = update object
# mixins.DestroyModelMixin = delete object
class ArticleDetails(generics.GenericAPIView, mixins.RetrieveModelMixin, mixins.UpdateModelMixin, mixins.DestroyModelMixin):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer

    lookup_field = "id"

    def get(self, request, id):
        return self.retrieve(request, id)

    def put(self, request, id):
        return self.update(request, id)
    
    def delete(self, request, id):
        return self.destroy(request, id)

# Create your views here.   
def index(request):
    return HttpResponse("<h1>Index working...</h1>")