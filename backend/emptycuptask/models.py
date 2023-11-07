from django.db import models
from django.core.validators import MaxValueValidator
# Create your models here.
class DesignInstitution(models.Model):
    name=models.CharField(max_length=200,null=True,blank=True)
    rating=models.DecimalField(max_digits=7,decimal_places=2,null=True,blank=True,default=0)
    description=models.TextField(null=True,blank=True)
    phone_number_1=models.CharField(max_length=14)
    phone_number_2=models.CharField(max_length=14)
    price=models.DecimalField(max_digits=10,decimal_places=2,null=True)
    years_of_experience = models.IntegerField(validators=[MaxValueValidator(100)])
    
    def __str__(self) :
        return self.name

    