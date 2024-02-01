# userform/urls.py
from django.urls import path
from .views import user_form, success

urlpatterns = [
    path('form/', user_form, name='user_form'),
    path('success/', success, name='success'),
]
