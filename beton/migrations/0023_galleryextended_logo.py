# Generated by Django 2.0.7 on 2018-07-31 18:57

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('beton', '0022_galleryextended'),
    ]

    operations = [
        migrations.AddField(
            model_name='galleryextended',
            name='logo',
            field=models.ImageField(blank=True, help_text='150x300px', upload_to='img/media/%Y/%m/%d', verbose_name='Иллюстрация'),
        ),
    ]