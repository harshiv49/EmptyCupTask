from django.core import serializers
from django.http import JsonResponse
from .models import DesignInstitution  # Replace with your actual model
from django.views.decorators.cache import cache_page

# Create your views here
#since currently we just want to send the response we can use a simple caching based on time
@cache_page(60*2)
def getInstitutions(request):
    # get the queryset we want to send
    queryset =DesignInstitution.objects.all()   
    # Serialize the queryset
    serialized_data = serializers.serialize('json', queryset)
    print(serialized_data)
    # Return the serialized data in a JSON response
    return JsonResponse(serialized_data, safe=False)
