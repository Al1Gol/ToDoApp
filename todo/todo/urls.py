"""todo URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import include, path
from rest_framework import routers
from rest_framework.authtoken import views
from rest_framework_simplejwt.views import TokenRefreshView, TokenObtainPairView

from projectapp.views import ProjectViewSet, TodoViewSet
from usersapp.views import UsersViewSet


router = routers.SimpleRouter()
router.register('users', UsersViewSet, basename='users')
router.register('projects', ProjectViewSet, basename = 'projects')
router.register('todo', TodoViewSet, basename = 'projects')

urlpatterns = [
    path('api/', include(router.urls)),
    path('admin/', admin.site.urls),
    path('api-auth/', include('rest_framework.urls')),
    path('api-auth-token/', views.obtain_auth_token),
    path('api-auth-token/', views.obtain_auth_token),
    path('api-jwt-token/', TokenObtainPairView.as_view()),
    path('api-jwt-token-refresh/', TokenRefreshView.as_view()),
]
