# Generated by Django 2.0.7 on 2018-07-24 22:04

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('beton', '0018_deleivery_phone'),
    ]

    operations = [
        migrations.CreateModel(
            name='MaterialPrice',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('sub_type', models.CharField(blank=True, max_length=100, null=True, verbose_name='Марка материала')),
                ('material_class', models.CharField(max_length=100, verbose_name='Класс материала')),
                ('price', models.CharField(max_length=100, verbose_name='Цена с НДС, грн.')),
            ],
            options={
                'db_table': 'MATERIAL_PRICE',
            },
        ),
        migrations.CreateModel(
            name='MaterialType',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(blank=True, max_length=60, verbose_name='Название типа материала')),
            ],
        ),
        migrations.AddField(
            model_name='materialprice',
            name='type',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='+', to='beton.MaterialType', verbose_name='Тип материала'),
        ),
    ]
