from rest_framework.decorators import api_view
from rest_framework.response import Response
from ..models import *

urban_level = 10


@api_view(['POST'])
def dimenInfoView(request):

    data = request.data

    # Fetch the records from the database that match the items in unique_dimen
    records = DimenTot.objects.filter(dimen__in=data)

    # Construct the desired dictionary format
    query_dict = {}
    for record in records:
        # Using dictionary comprehension to generate the inner dictionary
        inner_dict = {
            'Εκτάρια (Ha)': round(record.area / 10_000, 2),
            'Χαρακτήρας': 'Αστικός' if record.urban > urban_level else 'Μη Αστικός',
            'Μόνιμος Πληθυσμός 2021': record.pop
        }
        query_dict[record.dimen] = inner_dict

    # Provide attributes for dimens in step three

    return Response(query_dict)
