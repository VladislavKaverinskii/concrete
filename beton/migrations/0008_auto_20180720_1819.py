# Generated by Django 2.0.7 on 2018-07-20 15:19

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('beton', '0007_auto_20180720_1809'),
    ]

    operations = [
        migrations.AlterField(
            model_name='mainpageblock',
            name='title',
            field=models.CharField(blank=True, max_length=500, verbose_name='Заголовок'),
        ),
    ]