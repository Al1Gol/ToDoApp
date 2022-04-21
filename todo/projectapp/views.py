from django.shortcuts import render
from rest_framework.viewsets import ReadOnlyModelViewSet
from .serializers import ProjectSerializer, ToDoSerializer
from .models import Projects, ToDo
# Create your views here.

class ProjectViewSet(ReadOnlyModelViewSet):
    queryset = Projects.objects.all()
    serializer_class = ProjectSerializer

class TodoViewSet(ReadOnlyModelViewSet):
    queryset = ToDo.objects.all()
    serializer_class = ToDoSerializer

