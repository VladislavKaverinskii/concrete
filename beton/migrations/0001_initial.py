# Generated by Django 2.0.7 on 2018-07-20 12:25

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='MainPageBlock',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.TextField()),
                ('main_test', models.TextField()),
                ('image', models.ImageField(blank=True, help_text='150x150px', upload_to='img/media/%Y/%m/%d', verbose_name='Иллюстрация')),
            ],
            options={
                'db_table': 'MAIN_PAGE_BLOCK',
            },
        ),
    ]