from django.shortcuts import render
from rest_framework.viewsets import GenericViewSet, mixins, ModelViewSet
from  rest_framework.pagination import LimitOffsetPagination
from .serializers import ProjectSerializer, ToDoSerializer
from .models import Projects, ToDo
# Create your views here.

class ProjectLimitOffsetPagination(LimitOffsetPagination):
    default_limit = 10

class ProjectViewSet(ModelViewSet):
    pagination_class = ProjectLimitOffsetPagination
    serializer_class = ProjectSerializer

    def get_queryset(self):
        name = self.request.query_params.get('name', None)
        if name:
            return Projects.objects.all().filter(name__contains=name)
        else:
            return Projects.objects.all()

class ToDoLimitOffsetPagination(LimitOffsetPagination):
    default_limit = 20


class TodoViewSet(ModelViewSet):
    pagination_class = ToDoLimitOffsetPagination
    serializer_class = ToDoSerializer

    def perform_destroy(self, instance):
        instance.is_active = False
        instance.save()

    def get_queryset(self):
        name = self.request.query_params.get('name', None)
        if name:
            #Фильтрация производится по самому имени проекта, а не по ключу.
            return ToDo.objects.all().filter(project__name=name).filter(is_active=True)
        else:
            return ToDo.objects.all().filter(is_active=True)

