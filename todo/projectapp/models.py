from tkinter import CASCADE
from django.db import models

# Create your models here.
class Projects(models.Model):
    name = models.CharField(verbose_name='название', max_length=100)
    repo = models.CharField(verbose_name='ссылка на репозиторий', max_length=1000)
    workers = models.ManyToManyField('usersapp.Users')

    def __str__(self):
        return f'{self.name}'

class ToDo(models.Model):
    project = models.ForeignKey('projectapp.Projects', on_delete=models.CASCADE)
    text_todo = models.TextField(verbose_name='текст заметки', max_length=4000)
    creator = models.ForeignKey('usersapp.Users', on_delete=models.CASCADE)
    time_create = models.DateTimeField(verbose_name='дата создания', auto_now_add=True)
    time_update = models.DateTimeField(verbose_name='дата обновления', auto_now=True)
    is_active = models.BooleanField(verbose_name='активно', default=True)

    def __str__(self):
        return f'Заметка к "{self.project}" от пользователя "{self.creator}"'
