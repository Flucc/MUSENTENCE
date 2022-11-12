# Generated by Django 4.1.3 on 2022-11-12 07:45

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='App',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('string', models.CharField(max_length=128)),
                ('valence', models.FloatField()),
                ('arousal', models.FloatField()),
                ('dominance', models.FloatField()),
                ('cumScore', models.FloatField()),
                ('seed', models.TextField()),
            ],
        ),
    ]
