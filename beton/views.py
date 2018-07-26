# -*- coding: utf-8 -*-

from django.shortcuts import render

from django.http import HttpResponse

from django.views.generic.edit import FormView
from django.contrib.auth.forms import UserCreationForm
	
import json
from datetime import datetime

from .models import MainPageBlock, Service, Deleivery, DeleiveryPoint, MaterialPrice

def index(request):
    page_blocks = MainPageBlock.objects.all().order_by("order")
	
    return render(request, "main_page.html", {"page_blocks": page_blocks})
	

def services(request):
    services = Service.objects.all().order_by("order")
    return render(request, "services.html", {"services": services})
	
	
def get_slider_data(request):
    services = Service.objects.all()
    data = {'slider_data': []}
    for sv in services:
        data['slider_data'].append({"img": str(sv.image), "name": str(sv.name), "url": str(sv.url)})
    data = json.dumps(data)
    return HttpResponse(data, content_type='application/json')
	

def delivery(request):
    info = Deleivery.objects.all()
    deleivery_points = DeleiveryPoint.objects.all().order_by("town")
    return render(request, "delivery.html", {"info": info, "points": deleivery_points})


def price_page(request):
    materials = MaterialPrice.objects.all().order_by("type")

    return render(request, "price.html", {"materials": materials})
	

def get_price_list(request):
    materials = MaterialPrice.objects.all().order_by("type")
    tmp_materials = {}
    for i in materials:
        if str(i.type.name) not in tmp_materials:
            tmp_materials[str(i.type.name)] = {}

    for i in materials:
        if str(i.sub_type) not in tmp_materials[str(i.type.name)]:
            tmp_materials[str(i.type.name)][str(i.sub_type)] = {}

    for i in materials:
        if str(i.material_class) not in tmp_materials[str(i.type.name)][str(i.sub_type)]:
            tmp_materials[str(i.type.name)][str(i.sub_type)][str(i.material_class)] = i.price

    print (tmp_materials)

    data = json.dumps(tmp_materials)
    return HttpResponse(data, content_type='application/json')

















	
	