from django.db import models
from django.contrib.auth.models import AbstractBaseUser,BaseUserManager

# Create your models here.




class Colleges(models.Model):
    image=models.ImageField(upload_to='uploads/images' )
    name=models.CharField(max_length=100)
    description = models.TextField()
    year=models.CharField(max_length=4)
    place=models.CharField(max_length=50)
    
    def __str__(self):
        return self.name


class AdImg(models.Model):
    image=models.ImageField(upload_to='uploads/images',null=False,blank=False)
