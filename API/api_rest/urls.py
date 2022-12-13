from django.urls import path
from . import views
from .views import article_list

urlpatterns = [
    path("", views.index, name="index"),
    path("articles/", article_list)
]