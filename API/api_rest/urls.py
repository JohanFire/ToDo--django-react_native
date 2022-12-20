from django.urls import path
from . import views
from .views import article_list, article_details

urlpatterns = [
    path("", views.index, name="index"),
    path("articles/", article_list),
    path("articles/<int:pk>/", article_details),
]