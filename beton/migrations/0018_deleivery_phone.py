# Generated by Django 2.0.7 on 2018-07-24 20:30

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('beton', '0017_deleiverypoint'),
    ]

    operations = [
        migrations.AddField(
            model_name='deleivery',
            name='phone',
            field=models.CharField(blank=True, max_length=15, verbose_name='Телефон'),
        ),
    ]