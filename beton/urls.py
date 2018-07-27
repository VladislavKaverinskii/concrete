# -*- coding: utf-8 -*-

from django.urls import include, path
from . import views

urlpatterns = [
	path('', views.index, name='main'),
    path('services', views.services, name='services'),
	path('get_slider_data', views.get_slider_data, name='get_slider_data'),
	path('delivery', views.delivery, name='delivery'),
	path('price', views.price_page, name='price'),
	path('get_price_list', views.get_price_list, name='get_price_list'),
	path('get_price_list_as_pdf', views.get_price_list_as_pdf, name='get_price_list_as_pdf'),
]