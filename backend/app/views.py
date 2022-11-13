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
    print(freq)
    # Create values for each word in sentence and add up
    sentenceValence = 0
    sentenceArousal = 0
    sentenceDominance = 0
    totalWords = 0
    index = 0
    for word in data:
        if word[0].lower() in [x.lower() for x in sentenceBreakUp]:
                print(word[0])
                index += 1
                totalWords += 1
                sentenceValence += word[1] * collections.Counter(sentenceBreakUp)[word[0]]
                sentenceArousal += word[2] * collections.Counter(sentenceBreakUp)[word[0]]
                sentenceDominance += word[3] * collections.Counter(sentenceBreakUp)[word[0]]
    print (totalWords)
    if(totalWords == 0): return 'Invalid'
    return([(float)(sentenceValence/totalWords)*10, (float)(sentenceArousal/totalWords)*10, (float)(sentenceDominance/totalWords)*10])

def findCumScore(scores):
    if(scores == 'Invalid'): return "INVALID ENTRY"
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
    return similarity[random.randint(0,25)][0]

def home(request, name):
    song = findCumScore(sentenceValue(name))
    if(song == "INVALID ENTRY"): return HttpResponse("https://www.last.fm/music/Rick%2bAstley/_/Never%2bGonna%2bGive%2bYou%2bUp")
    return HttpResponse(song)
    #return HttpResponse('Hello World')