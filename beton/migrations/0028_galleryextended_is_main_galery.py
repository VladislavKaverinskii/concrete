# Generated by Django 2.0.7 on 2018-08-01 12:57

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('beton', '0027_auto_20180801_1555'),
    ]

    operations = [
        migrations.AddField(
            model_name='galleryextended',
            name='is_main_galery',
            field=models.BooleanField(default=False, verbose_name='Главная галерея сайта'),
        ),
    ]
