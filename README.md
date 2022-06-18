Приложение ToDo необходимо для создания задач по проектам и фиксирования их выполнения.

-----------------------------------------------------------------------------------------------------------------

Для входа через администратора и отображения данных на сайте необходимо использовать следующие данные:
логин - admin
пароль - admin

-----------------------------------------------------------------------------------------------------------------
При использовании Django версии 4.0 или больше, может вознинкуть ошибка: "ImportError: cannot import name ‘force_text’ from ‘django.utils.encoding"

В случае ее возникновения необходимо поставить версию меньше 4.0 или заменить force_str на force_text по адресу YOUR_VENV/lib/site-packages/graphene_django/utils/utils.py
        
        Исходная строка:
        from django.utils.encoding import force_text

        Заменить на:
        from django.utils.encoding import force_str


        Исходная строка:
        s = force_text(s)

        Заменить на:
        s = force_str(s)