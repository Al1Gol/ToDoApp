from calendar import c
from dataclasses import fields
from pyexpat import model
from rest_framework.serializers import ModelSerializer, StringRelatedField

from .models import Projects, ToDo

class ProjectSerializer(ModelSerializer):
    #workers = StringRelatedField(many=True)
    class Meta:
        model = Projects
        fields = ['id','name', 'repo', 'workers',]


class ToDoSerializer(ModelSerializer):
    #creator = StringRelatedField()
    #project = StringRelatedField()
    class Meta:
        model = ToDo
        fields = ['id', 'project','text_todo', 'creator', 'time_create', 'time_update']

