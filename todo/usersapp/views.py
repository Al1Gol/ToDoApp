from django.shortcuts import render
from rest_framework.viewsets import GenericViewSet, mixins
from .serializers import UserSerializer
from .models import Users


class UsersViewSet(mixins.ListModelMixin,
                   mixins.UpdateModelMixin,
                   mixins.RetrieveModelMixin,
                   GenericViewSet):
    queryset = Users.objects.all()
    serializer_class = UserSerializer
