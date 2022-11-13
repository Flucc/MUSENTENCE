from django.shortcuts import render

from django.http import HttpResponse

import collections
import csv
import random

def sentenceValue(sentence):
    # Split our sentence into a list of the individual words, removing extra unnecessary characters
    sentence = sentence.replace('.', '')
    sentence = sentence.replace(',', '')
    sentence = sentence.replace('?', '')
    sentence = sentence.replace(';', '')
    sentence = sentence.replace('!', '')
    sentenceBreakUp = sentence.split(" ")

    # Creation of 2d list for our scores
    data = []
    with open("worddata.txt", "r") as file:
        data = [[x for x in line.split(',')] for line in file]
    data = data[1:]
    for word in data:
        word[1] = float(word[1])
        word[2] = float(word[2])
        word[3] = word[3].replace('\n', '')
        word[3] = float(word[3])
    
    # Creation of collections
    freq = collections.Counter(sentenceBreakUp)
    # Create values for each word in sentence and add up
    sentenceValence = 0
    sentenceArousal = 0
    sentenceDominance = 0
    totalWords = 0
    for word in data:
        if word[0] in sentenceBreakUp:
            print(word[0])
            totalWords += 1
            sentenceValence += word[1] * collections.Counter(sentenceBreakUp)[word[0]]
            sentenceArousal += word[2] * collections.Counter(sentenceBreakUp)[word[0]]
            sentenceDominance += word[3] * collections.Counter(sentenceBreakUp)[word[0]]

    return([(float)(sentenceValence/totalWords), (float)(sentenceArousal/totalWords), (float)(sentenceDominance/totalWords)])

def findCumScore(scores):
    v = scores[0]
    a = scores[1]
    d = scores[2]

    cumScore = 0
    # Creation of 2d list for our scores
    similarity = []
    data = []
    index = 0
    with open("songdata.csv", "r", encoding="utf-8") as file:
        csvFile = csv.reader(file)
        for row in csvFile:
            data.append(row)

    data = data[1:]
    for song in data:
        v2 = float(song[1])
        a2 = float(song[2])
        d2 = float(song[3])
        cumScore = abs(v - v2) + abs(a - a2) + abs(d - d2)
        similarity.append([song[0],cumScore])
    similarity.sort(key=lambda student: student[1])
    return similarity[random.randint(0,50)][0]

def home(request, name):
    print(sentenceValue(name))
    song = findCumScore(sentenceValue(name))
    return HttpResponse(song)
    #return HttpResponse('Hello World')