from django.contrib import admin
from .models import ToDo, Projects

# Register your models here.
admin.site.register(Projects)
admin.site.register(ToDo)