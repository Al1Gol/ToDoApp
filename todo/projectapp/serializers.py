from calendar import c
from dataclasses import fields
from pyexpat import model
from rest_framework.serializers import ModelSerializer
from .models import Projects, ToDo

class ProjectSerializer(ModelSerializer):
    class Meta:
        model = Projects
        fields = ['name', 'repo', 'workers',]


class ToDoSerializer(ModelSerializer):
    class Meta:
        model = ToDo
        fields = ['text_todo', 'creator', 'time_create', 'time_update']

