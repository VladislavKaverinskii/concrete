# Generated by Django 2.0.7 on 2018-07-20 18:00

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('beton', '0009_service'),
    ]

    operations = [
        migrations.AddField(
            model_name='service',
            name='url',
            field=models.URLField(blank=True, default='#', verbose_name='Адрес страницы'),
        ),
    ]
