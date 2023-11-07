from django.db import models
from django.core.validators import MaxValueValidator
# Create your models here.
class DesignInstitutions(models.Model):
    name=models.CharField(max_length=200,null=True,blank=True)
    rating=models.IntegerField(null=True,blank=True,default=0)
    description=models.TextField(null=True,blank=True)
    phone_number_1=models.CharField(max_length=14)
    phone_number_2=models.CharField(max_length=14)
    price=models.DecimalField(max_digits=10,decimal_places=2,null=True)
    years_of_experience = models.IntegerField(validators=[MaxValueValidator(100)])
    

    