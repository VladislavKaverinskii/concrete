# -*- coding: utf-8 -*-

from django.shortcuts import render

from django.http import HttpResponse

from django.views.generic.edit import FormView
from django.contrib.auth.forms import UserCreationForm
	
import json
from datetime import datetime

from .models import MainPageBlock, Service

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
	
	