# Generated by Django 2.0.7 on 2018-07-24 19:05

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('beton', '0014_auto_20180724_2203'),
    ]

    operations = [
        migrations.AddField(
            model_name='deleivery',
            name='illustration_2',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='q+', to='beton.DeleiveryImage', verbose_name='Иллюстрация 2'),
        ),
    ]