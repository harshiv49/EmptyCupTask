from django.core import serializers
from django.http import JsonResponse
from .models import DesignInstitution  # Replace with your actual model
# Create your views here
def getInstitutions(request):
    # get the queryset we want to send
    queryset =DesignInstitution.objects.all()   
    # Serialize the queryset
    serialized_data = serializers.serialize('json', queryset)

    # Return the serialized data in a JSON response
    return JsonResponse(serialized_data, safe=False)
