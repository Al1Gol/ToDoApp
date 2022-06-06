from dataclasses import field
from unicodedata import category
from venv import create

from pkg_resources import require
import graphene
from graphene_django import DjangoObjectType

from usersapp.models import Users
from .models import Projects, ToDo


class UserType(DjangoObjectType):
    class Meta:
        model = Users
        field = '__all__'

class ProjectType(DjangoObjectType):
    class Meta:
        model = Projects
        field = '__all__'

class TodoType(DjangoObjectType):
    class Meta:
        model = ToDo
        field = '__all__'


class Query(graphene.ObjectType):
    
    all_users = graphene.List(UserType)

    #Отобразить всех пользователей
    def resolve_all_users(self, info):
        return Users.objects.all()

    all_projects = graphene.List(ProjectType)

    #Отобразить все проекты
    def resolve_all_projects(self, info):
        return Projects.objects.all()

    todoes_by_id = graphene.Field(TodoType, pk=graphene.Int(required=True))

    #Отобразить все todo
    def resolve_todoes_by_id(self, info, pk):
        return ToDo.objects.get(pk=pk)

#Мутация создания нового todo
class TodoCreateMutation(graphene.Mutation):

    class Arguments:
        project = graphene.ID(required=True)
        text_todo = graphene.String(required=True)
        creator = graphene.ID(required=True)

    todo = graphene.Field(TodoType)
    
    @classmethod
    def mutate(cls, root, info, project, text_todo, creator):
        project_obj = Projects.objects.get(id=project) # Для FK необходимо отправлять сам объект модели
        creator_obj = Users.objects.get(id=creator)
        todo = ToDo(project=project_obj, text_todo=text_todo, creator=creator_obj)
        todo.save()
        return cls(todo)

#Мутация обновления todo
class TodoUpdateMutation(graphene.Mutation):

    class Arguments:
        pk = graphene.ID(required=True)
        project = graphene.ID(required=False)
        text_todo = graphene.String(required=False)
        creator = graphene.ID(required=False)

    todo = graphene.Field(TodoType)
    
    @classmethod
    def mutate(cls, root, info, pk, project=None, text_todo=None, creator=None):
        todo = ToDo.objects.get(pk=pk)
        if project:     
            project_obj = Projects.objects.get(id=project) # Для FK необходимо отправлять сам объект модели
            todo.project = project_obj
        if text_todo:
            todo.text_todo = text_todo
        if creator:
            creator_obj = Users.objects.get(id=creator)
            todo.creator = creator_obj
        if project or text_todo or creator:
            todo.save()
        return cls(todo)
    
    
class Mutation(graphene.ObjectType):
    create_todo = TodoCreateMutation.Field()
    update_todo = TodoUpdateMutation.Field()

schema = graphene.Schema(query=Query, mutation=Mutation)