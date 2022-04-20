# Generated by Django 4.0.3 on 2022-04-20 18:41

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='ToDo',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('text_todo', models.TextField(max_length=4000, verbose_name='текст заметки')),
                ('time_create', models.DateTimeField(auto_now_add=True, verbose_name='дата создания')),
                ('time_update', models.DateTimeField(auto_now=True, verbose_name='дата обновления')),
                ('creator', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='Projects',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100, verbose_name='название')),
                ('repo', models.CharField(max_length=1000, verbose_name='ссылка на репозиторий')),
                ('workers', models.ManyToManyField(to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]