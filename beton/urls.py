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
	#path('galery', views.get_galery, name='galery'),
	path('galery', views.GalleryListView.as_view(),  name='gallery-list'),
	path('partners', views.get_partners, name='partners'),
    path('main_galery', views.MainGalleryListView.as_view(), name='MainGallery'),
	path('contacts', views.get_contacts, name='contacts'),
	path('proposal', views.handle_proposal, name='proposal'),
	path('vacations', views.get_vacations, name='vacations'),
	path('concrete_mixes', views.concrete_mixes, name='concrete_mixes'),
	path('cement_mixes', views.cement_mixes, name='cement_mixes'),
	path('sand', views.sand_sail, name='sand'),
	path('crushed_stone', views.crushed_stone, name='crushed_stone'),
	path('reinforced', views.reinforced, name='reinforced'),
	path('get_reinforced_price_list', views.get_reinforced_price_list, name='get_reinforced_price_list'),
	
]

from photologue.sitemaps import GallerySitemap, PhotoSitemap

sitemaps = {
            'photologue_galleries': GallerySitemap,
            'photologue_photos': PhotoSitemap,
            
            }