from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.contrib.gis.geos import GEOSGeometry, Point, Polygon
from ..models import *


@api_view(['GET'])
def apiView(request):
    data = "Φέρουσα Ικανότητα API"
    return Response(data)


@api_view(['POST'])
def featureInfoView(request):
    coords = request.data

    # Assign coordinates
    lat = coords[0]
    lng = coords[1]

    # Create point
    pnt = Point(lng, lat)

    dimos = ''

    item = DimenTot.objects.filter(geom__intersects=pnt).first()
    if item:
        dimos = item.dimos

    dimEn_values = DimenTot.objects.filter(
        dimos=dimos).values_list('dimen', flat=True)

    dimEn_values = list(dimEn_values)

    return Response({'dimos': dimos, 'dimen': dimEn_values})
