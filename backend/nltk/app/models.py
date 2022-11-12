from django.db import models

# Create your models here.

class App(models.Model):
    string = models.CharField(max_length = 128)
    valence = models.FloatField()
    arousal = models.FloatField()
    dominance = models.FloatField()
    cumScore = models.FloatField()
    seed = models.TextField();
    def _str_(self):
        return self.title    
