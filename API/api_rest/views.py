from django.shortcuts import render, HttpResponse
from django.http import JsonResponse
from rest_framework.parsers import JSONParser
from django.views.decorators.csrf import csrf_exempt

from .models import Article
from .serializers import ArticleSerializer

# Create your views here.   
def index(request):
    return HttpResponse("<h1>Index working...</h1>")

@csrf_exempt
def article_list(request):
    # get all articles
    if request.method == "GET":
        articles = Article.objects.all()
        serializer = ArticleSerializer(articles, many=True)

        return JsonResponse(serializer.data, safe=False)

    elif request.method == "POST":
        data = JSONParser().parse(request)
        serializer = ArticleSerializer(data=data)

        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=201)
        
        return JsonResponse(serializer.errs, status=400)

@csrf_exempt
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