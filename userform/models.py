from django.db import models

# table for user information
class UserInfo(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    business_name = models.CharField(max_length=100)
    industry = models.CharField(max_length=50)
    phone_number = models.CharField(max_length=25)
    username = models.CharField(max_length=50)

#table for company info tbd
    
#step 4 current