# -*- coding: utf-8 -*-

from django.shortcuts import render

from django.http import HttpResponse

from django.views.generic.edit import FormView
from django.contrib.auth.forms import UserCreationForm
	
import json
from datetime import datetime
import smtplib
from email.mime.text import MIMEText

from .models import MainPageBlock, Service, Deleivery, DeleiveryPoint, MaterialPrice
from .models import PricePage, GalleryExtended, Gallery, Partner, Contact, Proposal, Vacation, CandidateRequirement, WorkingCondition

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
    data = PricePage.objects.all()
    now = datetime.now()
    year = now.year
    return render(request, "price.html", {"materials": materials, "data": data, "year": str(year)})


def form_matrials_price_list():
    materials = MaterialPrice.objects.all().order_by("type")
    tmp_materials = {}
	
    count = 0
	
    for i in materials:
        if str(i.type.name) not in tmp_materials:
            tmp_materials[str(i.type.name)] = {}
            count += 1

    for i in materials:
        if str(i.sub_type) not in tmp_materials[str(i.type.name)]:
            tmp_materials[str(i.type.name)][str(i.sub_type)] = {}
            count += 2

    for i in materials:
        if str(i.material_class) not in tmp_materials[str(i.type.name)][str(i.sub_type)]:
            tmp_materials[str(i.type.name)][str(i.sub_type)][str(i.material_class)] = i.price
            count += 1
	

    return (tmp_materials, count)


def get_price_list(request):
    return HttpResponse(json.dumps(form_matrials_price_list()[0]), content_type='application/json')


from io import BytesIO
from reportlab.pdfgen import canvas
from django.http import HttpResponse

from preppy import SafeString
#from rlextra.radxml.xhtml2rml import xhtml2rml
#from rlextra.radxml.html_cleaner import cleanPlain


from reportlab.lib import colors
from reportlab.lib.pagesizes import letter, inch
from reportlab.platypus import SimpleDocTemplate, Table, TableStyle

from reportlab.pdfbase.ttfonts import TTFont
from reportlab.pdfbase import pdfmetrics

 
def get_price_list_as_pdf(request):
    # Create the HttpResponse object with the appropriate PDF headers.
    response = HttpResponse(content_type='application/pdf')
    response['Content-Disposition'] = 'attachment; filename="price_list.pdf"'
    from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer
    buffer = BytesIO()
    doc = SimpleDocTemplate(buffer, pagesize=letter)
    # container for the 'Flowable' objects
    elements = []
 
    raw_price_list, data_length = form_matrials_price_list()
	
    style_table = []
    structured_data = []
	
    row_count = 0
    for key in raw_price_list:
        tmp = raw_price_list[key]
        structured_data.append([str(key), ""])
        style_table.append(('SPAN', (0,row_count), (1,row_count)))
        style_table.append(('ALIGN',(0, row_count),(1,row_count),'CENTER'))
        style_table.append(('FONTSIZE',(0, row_count),(1,row_count),16))
        row_count += 1
        for key_2 in tmp:
            structured_data.append([str(key_2), ""])
            style_table.append(('SPAN', (0,row_count), (1,row_count)))
            style_table.append(('ALIGN',(0, row_count),(1,row_count),'CENTER'))
            style_table.append(('FONTSIZE',(0, row_count),(1,row_count),14))
            row_count += 1
			
            structured_data.append([u"Класс материала", u"Цена с НДС, грн."])
            style_table.append(('ALIGN',(0, row_count),(1,row_count),'CENTER'))
            style_table.append(('FONTSIZE',(0, row_count),(1,row_count),12))
            #row_count += 1

            #style_table.append(('ALIGN',(0, row_count),(1,row_count),'CENTER'))
            #style_table.append(('FONTSIZE',(0, row_count),(1,row_count),14))
            row_count += 1
            tmp_2 = tmp[key_2]
            for key_3 in tmp_2:
                structured_data.append([str(key_3), str(tmp_2[key_3])])
                style_table.append(('ALIGN',(0, row_count),(0,row_count),'LEFT'))
                style_table.append(('ALIGN',(1, row_count),(1,row_count),'RIGHT'))
                style_table.append(('FONTSIZE',(0, row_count),(1,row_count),12))
                row_count += 1
    style_table.append(('VALIGN',(0, 0),(-1,-1),'MIDDLE'))
    myFontVar = TTFont('myFont', 'D:/1/concrete/concrete/Scripts/concrete/beton/12056.ttf')
    pdfmetrics.registerFont(myFontVar)
    data_length = len(structured_data)

    
    t=Table(structured_data, 2*[2.8*inch], data_length*[0.4*inch])
    style_table.append(('FONTNAME', (0, 0), (-1,-1), "myFont"))
    
    style_table.append(('BOX', (0,0), (-1,-1), 0.25, colors.black))
    style_table.append(('INNERGRID', (0,0), (-1,-1), 0.25, colors.black))
    style_table.append(('VALIGN',(0,0),(-1,-1),'MIDDLE'))
    t_style = TableStyle(style_table)

    t.setStyle(t_style)
 
    elements.append(t)
    # write the document to disk
    doc.build(elements)
    pdf = buffer.getvalue()
    buffer.close()
    response.write(pdf)
    return response	


def get_galery(request):
    data = Gallery.objects.on_site().is_public()
    print(len(data))

    return render(request, "galery.html", {"data": data})

from django.views.generic.list import ListView

class GalleryListView(ListView):
    queryset = Gallery.objects.on_site().is_public()
    paginate_by = 30


def get_partners(request):
    partners = Partner.objects.all()
    return render(request, "partners.html", {"partners": partners})


class MainGalleryListView(ListView):
    tmp = GalleryExtended.objects.filter(is_main_galery=False)
    queryset = Gallery.objects.on_site().is_public()

    for i in tmp:
        queryset = queryset.exclude(id=i.id)           
 
    paginate_by = 20


def get_contacts(request):
    contacts = Contact.objects.all()
    
    return render(request, "contacts.html", {"contacts": contacts})


def handle_proposal(request):
    if request.POST:
        form = request.POST
        proposal = Proposal()
        proposal.name = form['name']
        proposal.email = form['email']
        proposal.text = form['feedback']
        if proposal.name.strip() != "":
            proposal.save()

            me = 'ismail_beton@i.ua'
            you = 'hisie@ukr.net'
            smtp_server = 'smtp.i.ua'
            msg = MIMEText(proposal.text)
            msg['Subject'] = 'Новая заявка'
            msg['From'] = me
            msg['To'] = you
            s = smtplib.SMTP(smtp_server)
            #s.connect()
            s.sendmail(me, [you], msg.as_string())
            s.quit()
    contacts = Contact.objects.all()
        #message.save()
    return render(request, "contacts.html", {"contacts": contacts})


def get_vacations(request):
    vacations = Vacation.objects.all()
    date_value = datetime.now()
    return render(request, "vacations.html", {"vacations": vacations, "date_value": date_value})
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	