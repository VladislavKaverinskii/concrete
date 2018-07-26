from django.db import models
from django.conf import settings
from tinymce.models import HTMLField
from tinymce.widgets import TinyMCE
import psycopg2
from django.contrib.postgres.fields import ArrayField

class MainPageBlock(models.Model):
    class Meta:
        db_table = "MAIN_PAGE_BLOCK"
 
    title = models.CharField(max_length=500, blank=True, verbose_name='Заголовок')
    main_text = HTMLField(blank=True, verbose_name='Основной текст')
    image = models.ImageField(blank=True, upload_to='img/media/%Y/%m/%d', help_text='150x150px', verbose_name='Иллюстрация')
    order = models.IntegerField(blank=True, default=0, verbose_name='Порядок следования на странице')
 
    def __str__(self):
        return self.title[0:300]

class Service(models.Model):
    class Meta:
        db_table = "SERVICE"
 
    name = models.CharField(max_length=500, blank=True, verbose_name='Название услуги')
    url = models.CharField(max_length=500, blank=True, default="#", verbose_name='Адрес страницы')
    order = models.IntegerField(blank=True, default=0, verbose_name='Порядок следования в меню')
    image = models.ImageField(blank=True, upload_to='img/media/%Y/%m/%d', help_text='150x300px', verbose_name='Иллюстрация')
 
    def __str__(self):
        return self.name[0:300]

class DeleiveryImage(models.Model):
    image = models.ImageField(blank=True, upload_to='img/media/%Y/%m/%d', help_text='150x300px', verbose_name='Иллюстрации')
	
class DeleiveryPoint(models.Model):
    town = models.CharField(max_length=60, blank=True, verbose_name='Населённый пункт')
    price = models.CharField(max_length=15, blank=True, verbose_name='Цена')
    def __str__(self):
        return self.town


class Deleivery(models.Model):
    class Meta:
        db_table = "DELIVERY"
    
    name = models.CharField(max_length=500, blank=True, verbose_name='Заголовок раздела')
    illustration_1 = models.ForeignKey(DeleiveryImage, blank=True, null=True, verbose_name='Иллюстрация 1', on_delete=models.CASCADE, related_name='+')
    illustration_2 = models.ForeignKey(DeleiveryImage, blank=True, null=True, verbose_name='Иллюстрация 2', on_delete=models.CASCADE, related_name='q+')
    main_text_1 = HTMLField(blank=True, verbose_name='Основной текст')
    main_text_2 = HTMLField(blank=True, verbose_name='Разъясняющий текст')
    phone = models.CharField(max_length=15, blank=True, verbose_name='Телефон')

    def __str__(self):
        return self.name[0:300]

class MaterialType(models.Model):
    name = models.CharField(max_length=60, blank=True, verbose_name='Название типа материала')
    
    def __str__(self):
        return self.name

		
class MaterialPrice(models.Model):
    class Meta:
        db_table = "MATERIAL_PRICE"
    
    type = models.ForeignKey(MaterialType, verbose_name='Тип материала', on_delete=models.CASCADE, related_name='+')
    sub_type = models.CharField(max_length=100, blank=True, null=True, verbose_name='Марка материала')
    material_class = models.CharField(max_length=100, verbose_name='Класс материала')
    price = models.CharField(max_length=100, verbose_name='Цена с НДС, грн.')
    
    def __str__(self):
        return (str(self.type) + " " + str(self.sub_type) + " " + str(self.material_class))
		























		
