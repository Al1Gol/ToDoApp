from django.db import models

# Create your models here.
class Projects(models.Model):
    name = models.CharField(verbose_name='название', max_length=100)
    repo = models.CharField(verbose_name='ссылка на репозиторий', max_length=1000)
    workers = models.ManyToManyField('usersapp.Users')

class ToDo(models.Model):
    text_todo = models.TextField(verbose_name='текст заметки', max_length=4000)
    creator = models.ForeignKey('usersapp.Users', on_delete=models.CASCADE)
    time_create = models.DateTimeField(verbose_name='дата создания', auto_now_add=True)
    time_update = models.DateTimeField(verbose_name='дата обновления', auto_now=True)
