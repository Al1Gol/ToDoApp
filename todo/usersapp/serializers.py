from dataclasses import fields
from pyexpat import model
from rest_framework.serializers import ModelSerializer
from usersapp.models import Users

class UserSerializerV1(ModelSerializer):
    class Meta:
        model = Users
        fields = ['id', 'username', 'first_name', 'last_name', 'email']

class UserSerializerV2(ModelSerializer):
    class Meta:
        model = Users
        fields = ['id', 'username', 'first_name', 'last_name', 'email', 'is_superuser', 'is_staff']
