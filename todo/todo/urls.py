from django.contrib import admin
from django.urls import include, path, re_path
from rest_framework import routers
from drf_yasg.views import get_schema_view
from drf_yasg.openapi import Info, Contact, License
from rest_framework.authtoken import views
from rest_framework.permissions import AllowAny

from projectapp.views import ProjectViewSet, TodoViewSet
from usersapp.views import UsersViewSet

schema_view = get_schema_view(
    Info(
        title='Todo',
        default_version='1.0',
        description='description',
        contact=Contact(email='admin@admin.ru'),
        license=License(name='MIT')
    ),
    public=True,
    permission_classes=(AllowAny, )
)

router = routers.SimpleRouter()
router.register('users', UsersViewSet, basename='users')
router.register('projects', ProjectViewSet, basename = 'projects')
router.register('todo', TodoViewSet, basename = 'todo')

urlpatterns = [
    path('api/', include(router.urls)),
    path('admin/', admin.site.urls),
    path('api-auth/', include('rest_framework.urls')),
    path('api-auth-token/', views.obtain_auth_token),
    path('swagger/', schema_view.with_ui()),
    re_path(r'^swagger(?P<format>\.json|\.yaml)', schema_view.without_ui()),
]