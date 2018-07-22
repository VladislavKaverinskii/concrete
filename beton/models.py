from django.db import models
from django.conf import settings
from tinymce.models import HTMLField
from tinymce.widgets import TinyMCE


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

