# Generated by Django 2.0.7 on 2018-08-06 23:10

from django.db import migrations
import tinymce.models


class Migration(migrations.Migration):

    dependencies = [
        ('beton', '0037_auto_20180807_0203'),
    ]

    operations = [
        migrations.AddField(
            model_name='reinforced',
            name='extra_description',
            field=tinymce.models.HTMLField(blank=True, verbose_name='Дополнительный текст'),
        ),
    ]
