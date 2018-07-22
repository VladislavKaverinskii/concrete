# -*- coding: utf-8 -*-

from django.urls import include, path
from . import views

urlpatterns = [
	path('', views.index, name='main'),
    path('services', views.services, name='services'),
	path('get_slider_data', views.get_slider_data, name='get_slider_data'),
]