from dataclasses import fields
from pyexpat import model
from rest_framework.serializers import ModelSerializer
from usersapp.models import Users

class UserSerializer(ModelSerializer):
    class Meta:
        model = Users
        fields = ['username', 'first_name', 'last_name', 'email']
