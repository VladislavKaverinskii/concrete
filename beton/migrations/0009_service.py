# Generated by Django 2.0.7 on 2018-07-20 17:57

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('beton', '0008_auto_20180720_1819'),
    ]

    operations = [
        migrations.CreateModel(
            name='Service',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(blank=True, max_length=500, verbose_name='Название услуги')),
                ('order', models.IntegerField(blank=True, default=0, verbose_name='Порядок следования в меню')),
            ],
            options={
                'db_table': 'SERVICE',
            },
        ),
    ]
