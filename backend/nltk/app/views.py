from django.shortcuts import render
from rest_framework import viewsets
from .serializers import AppSerializer
from .models import App
import nltk
from nltk.corpus import names
import random

# Create your views here.

class AppView(viewsets.ModelViewSet):
    serializer_class = AppSerializer
    queryset = App.objects.all()

def findCumScore(valence, valence2, arousal, arousal2, dominance, dominance2):
    return 0;
def findSeededWord(string):
    return 'bruh';

def getSeeded(array, seeded):
    return array[0];
def sortByCumScore(array, cumScore):
    return array[0];

