# Generated by Django 2.0.7 on 2018-08-01 16:27

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('beton', '0028_galleryextended_is_main_galery'),
    ]

    operations = [
        migrations.CreateModel(
            name='Contact',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('department', models.CharField(blank=True, max_length=200, verbose_name='Отдел')),
                ('contact_person', models.CharField(blank=True, max_length=200, verbose_name='Котнактное лицо')),
                ('email', models.CharField(blank=True, max_length=200, verbose_name='email')),
            ],
            options={
                'db_table': 'CONTACT',
            },
        ),
        migrations.CreateModel(
            name='Phone',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('number', models.CharField(blank=True, max_length=15, verbose_name='Номер телефона')),
            ],
            options={
                'db_table': 'PHONE',
            },
        ),
        migrations.AddField(
            model_name='contact',
            name='phone',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='+', to='beton.Phone', verbose_name='Номер телефона'),
        ),
    ]