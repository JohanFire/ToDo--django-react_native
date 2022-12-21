from django.shortcuts import render, HttpResponse
from django.http import JsonResponse
from rest_framework.parsers import JSONParser
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

from .models import Article
from .serializers import ArticleSerializer

# Create your views here.   
def index(request):
    return HttpResponse("<h1>Index working...</h1>")

@api_view(["GET", "POST"])
def article_list(request):
    # get all articles
    if request.method == "GET":
        articles = Article.objects.all()
        serializer = ArticleSerializer(articles, many=True)

        return Response(serializer.data)

    elif request.method == "POST":
        serializer = ArticleSerializer(data=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        
        return Response(serializer.errs, status=status.HTTP_400_BAD_REQUEST)

def article_details(request, pk):
    try:
        article = Article.objects.get(pk=pk)
    except Article.DoesNotExist:
        return HttpResponse(status=404)

    if request.method == "GET":
        serializer = ArticleSerializer(article)
        return JsonResponse(serializer.data)

    elif request.method == "PUT":
        data = JSONParser().parse(request)
        serializer = ArticleSerializer(article, data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status = 201)
        return JsonResponse(serializer.errors, status=400)
    
    elif request.method == "DELETE":
        article.delete()
        return HttpResponse(status=204)