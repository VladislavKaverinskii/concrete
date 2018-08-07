# Generated by Django 2.0.7 on 2018-08-06 16:51

from django.db import migrations, models
import tinymce.models


class Migration(migrations.Migration):

    dependencies = [
        ('beton', '0032_auto_20180803_2232'),
    ]

    operations = [
        migrations.CreateModel(
            name='MainConcreteMixes',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(blank=True, max_length=300, verbose_name='Название')),
                ('description', tinymce.models.HTMLField(blank=True, verbose_name='Основной текст')),
                ('illustration', models.ImageField(blank=True, help_text='150x300px', upload_to='img/media/%Y/%m/%d', verbose_name='Иллюстрация')),
            ],
            options={
                'db_table': 'MAINCONCRETEMIXES',
            },
        ),
    ]
