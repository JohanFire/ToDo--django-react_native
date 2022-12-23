from django.urls import path
from . import views
# from .views import article_list, article_details
from .views import ArticleList, ArticleDetails 

urlpatterns = [
    path("", views.index, name="index"),   
    path("articles/", ArticleList.as_view()),
    path("articles/<int:id>/", ArticleDetails.as_view()),
]