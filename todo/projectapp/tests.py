from urllib import request, response
from django.test import TestCase
from rest_framework import status
from rest_framework.test import APIRequestFactory, APIClient, APITestCase, force_authenticate
from .models import Projects, ToDo
from .views import ProjectViewSet
from usersapp.models import Users
from mixer.backend.django import mixer

class TestProjectsApi(TestCase):

    def setUp(self) -> None:
        self.user = Users.objects.create_superuser(username = 'admin', password = 'admin')
        self.project = mixer.blend(Projects)
    
    def tearDown(self) -> None:
        return super().tearDown()

    def not_auth_test_projects(self):
        factory = APIRequestFactory()
        request = factory.get('/api/projects/')
        view = ProjectViewSet.as_view({'get' : 'list'})
        response = view(request)
        self.assertEqual(response.status_code, status.HTTP_401_UNAUTHORIZED)

    def auth_test_projects(self):
        factory = APIRequestFactory()
        request = factory.get('/api/projects/')
        force_authenticate(request, self.user)
        view = ProjectViewSet.as_view({'get' : 'list'})
        response = view(request)
        Projects.objects.create()
        self.assertEqual(response.status_code, status.HTTP_200_OK)

class TestTodoApiClient(APITestCase):

    def setUp(self) -> None:
        self.user = Users.objects.create_superuser(username = 'admin', password = 'admin')
        self.project = mixer.blend(Projects)
        self.todo = mixer.blend(ToDo)

    def not_auth_test_todo(self):
        response = self.client.get('/api/todo/')
        self.assertEqual(response.status_code, status.HTTP_401_UNAUTHORIZED)

    def auth_test_todo(self):
        self.client.force_authenticate(user = self.user)
        response = self.client.get('/api/todo/')
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_log_in_out(self):
        self.client.login(username = 'admin', password = 'admin')
        response = self.client.get('/api/todo/')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.client.logout()
        response = self.client.get('/api/todo/')
        self.assertEqual(response.status_code, status.HTTP_401_UNAUTHORIZED)


class TestToDoAPI(TestCase):

    def setUp(self) -> None:
        self.client = APIClient()
        self.user = Users.objects.create_superuser(username = 'admin', password = 'admin')
        self.project = mixer.blend(Projects, id=1)
        self.todo = mixer.blend(ToDo)


    def test_get_detail(self):
        self.client.login(username = 'admin', password = 'admin')
        response = self.client.get(f'/api/projects/{self.project.id}/')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
