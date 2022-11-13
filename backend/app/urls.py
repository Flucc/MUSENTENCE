from django.urls import path
from app import views

urlpatterns = [
    path("", views.home, name="home"),
    path("sentence/<name>/", views.home, name="home"),
]