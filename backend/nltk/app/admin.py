from django.contrib import admin

from .models import App

# Register your models here.

class AppAdmin(admin.ModelAdmin):
    list_display = ('string', 'valence', 'arousal', 'dominance', 'seed', 'cumScore')

admin.site.register(App, AppAdmin)