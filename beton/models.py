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
		

class PricePage(models.Model):
    class Meta:
        db_table = "PRICEPAGE"
    
    name = models.CharField(max_length=500, blank=True, verbose_name='Заголовок раздела')
    illustration = models.ImageField(blank=True, upload_to='img/media/%Y/%m/%d', help_text='150x300px', verbose_name='Иллюстрация')    
    main_text = HTMLField(blank=True, verbose_name='Основной текст')

    def __str__(self):
        return self.name[0:300]


from PIL import Image 
import os

# Изменение (filename, URL) вставкой '.mini' и изменение расширения на jpg
def _add_mini(s):
    parts = s.split(".")
    parts.insert(-1, "mini")
    if parts[-1].lower() not in ['jpeg', 'jpg']:
        parts[-1] = 'jpg'
    return ".".join(parts)

# Удаление миниатюры с физического носителя.
def _del_mini(p):
    mini_path = _add_mini(p)
    if os.path.exists(mini_path):
        os.remove(mini_path)

# Основной класс модели галереи
class Photo(models.Model):
    title = models.CharField(max_length=250)
    image = models.ImageField(upload_to='gallery')
    captions = models.CharField(max_length=250, blank=True)

    class Meta:
        verbose_name = ('Иллюстрация')
        verbose_name_plural = ('Иллюстрации')
        ordering = ['title']

    def __unicode__(self):
        return self.title

# Добавляем к свойствам объектов модели путь к миниатюре
    def _get_mini_path(self):
        return _add_mini(self.image.path)
    mini_path = property(_get_mini_path)

# Добавляем к свойствам объектов модели урл миниатюры	
    def _get_mini_url(self):
        return _add_mini(self.image.url)
    mini_url = property(_get_mini_url)

# Добавляем к свойствам объектов модели html код для отображения миниатюры
# Сделано в модели для упрощения вывода в админке. Смотрим далее.	
    def get_mini_html(self):
        html = '<a class="image-picker" href="%s"><img src="%s" alt="%s"/></a>'
        return html % (self.image.url, _add_mini(self.image.url), self.captions)
    mini_html = property(get_mini_html)
    get_mini_html.short_description = ('Иллюстрация')
    get_mini_html.allow_tags = True

# Создаем свою save
# Добавляем:
# - создание миниатюры
# - удаление миниатюры и основного изображения 
#   при попытке записи поверх существующей записи
    def save(self, force_insert=False, force_update=False, using=None):
        try:
            obj =  Photo.objects.get(id=self.id)
            if obj.image.path != self.image.path:
                _del_mini(obj.image.path)
                obj.image.delete()
        except:
            pass
        super(Photo, self).save()
        img = Image.open(self.image.path)
        img.thumbnail(
            (128, 128),
            Image.ANTIALIAS
        )
        img.save(self.mini_path, 'JPEG')

# Делаем свою delete с учетом миниатюры		
    def delete(self, using=None):
        try:
            obj = Photo.objects.get(id=self.id)
            _del_mini(obj.image.path)
            obj.image.delete()
        except (Photo.DoesNotExist, ValueError):
            pass
        super(Photo, self).delete()
        
    def get_absolute_url(self):
        return ('photo_detail', None, {'object_id': self.id})

from taggit.managers import TaggableManager

from photologue.models import Gallery


class GalleryExtended(models.Model):

    # Link back to Photologue's Gallery model.
    gallery = models.OneToOneField(Gallery, related_name='extended', on_delete=models.CASCADE)

    # This is the important bit - where we add in the tags.
    tags = TaggableManager(blank=True)
    logo = models.ImageField(blank=True, upload_to='img/media/%Y/%m/%d', help_text='150x300px', verbose_name='Иллюстрация')

    # Boilerplate code to make a prettier display in the admin interface.
    class Meta:
        verbose_name = u'Extra fields'
        verbose_name_plural = u'Extra fields'

    def __str__(self):
        return self.gallery.title


















		
