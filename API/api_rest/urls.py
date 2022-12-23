from django.urls import path, include
# from .views import ArticleList, ArticleDetails 
from rest_framework.routers import DefaultRouter

from . import views
from .views import ArticleViewSet

router = DefaultRouter()
router.register("articles", ArticleViewSet, basename="articles")

urlpatterns = [
    path("", views.index, name="index"),   
    path("api/", include(router.urls))
]