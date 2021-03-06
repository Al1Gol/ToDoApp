import email
from re import M
from django.db import models
from django.contrib.auth.models import AbstractUser

class Users(AbstractUser):
    email = models.EmailField(unique=True)

    def __str__(self):
        return f'{self.first_name} {self.last_name}'
