# Generated by Django 4.2.9 on 2024-01-30 22:18

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='UserInfo',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('email', models.EmailField(max_length=254)),
                ('business_name', models.CharField(max_length=100)),
                ('industry', models.CharField(max_length=50)),
                ('phone_number', models.CharField(max_length=25)),
                ('username', models.CharField(max_length=50)),
            ],
        ),
    ]