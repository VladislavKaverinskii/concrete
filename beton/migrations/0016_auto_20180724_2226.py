# Generated by Django 2.0.7 on 2018-07-24 19:26

from django.db import migrations
import tinymce.models


class Migration(migrations.Migration):

    dependencies = [
        ('beton', '0015_deleivery_illustration_2'),
    ]

    operations = [
        migrations.RenameField(
            model_name='deleivery',
            old_name='main_text',
            new_name='main_text_1',
        ),
        migrations.AddField(
            model_name='deleivery',
            name='main_text_2',
            field=tinymce.models.HTMLField(blank=True, verbose_name='Разъясняющий текст'),
        ),
    ]
