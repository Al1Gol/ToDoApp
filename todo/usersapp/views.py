from django.shortcuts import render
from rest_framework.viewsets import GenericViewSet, mixins
from rest_framework.permissions import DjangoModelPermissions
from .serializers import UserSerializerV1, UserSerializerV2
from .models import Users


class UsersViewSet(mixins.ListModelMixin,
                   mixins.UpdateModelMixin,
                   mixins.RetrieveModelMixin,
                   GenericViewSet):
    
    queryset = Users.objects.all()

    vers = {
        '1.0': UserSerializerV1,
        '2.0': UserSerializerV2
    }

    #Подставляем версию проекта из словаря.
    def get_serializer_class(self):
        return self.vers.get(self.request.version, UserSerializerV1)
