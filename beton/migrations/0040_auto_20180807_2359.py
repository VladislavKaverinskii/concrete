# Generated by Django 2.0.7 on 2018-08-07 20:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('beton', '0039_auto_20180807_2356'),
    ]

    operations = [
        migrations.AddField(
            model_name='reinforced',
            name='js_class',
            field=models.CharField(blank=True, max_length=50, verbose_name='Класс для JS'),
        ),
        migrations.AlterField(
            model_name='reinforced',
            name='type',
            field=models.CharField(blank=True, max_length=200, verbose_name='Название'),
        ),
    ]
