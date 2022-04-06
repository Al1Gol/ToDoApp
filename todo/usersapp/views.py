from django.shortcuts import render
from rest_framework import mixins
from rest_framework.viewsets import ReadOnlyModelViewSet
from .serializers import UserSerializer
from .models import Users

class UsersViewSet(ReadOnlyModelViewSet):
    queryset = Users.objects.all()
    serializer_class = UserSerializer

