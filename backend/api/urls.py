from django.urls import path
from .views.feature_info import *
from .views.result import *
from .views.dimen_info import *
from rest_framework import permissions
from drf_yasg.views import get_schema_view
from drf_yasg import openapi


schema_view = get_schema_view(
    openapi.Info(
        title="Φέρουσα Ικανότητα API",
        default_version='v1',
        description="Test description",
        terms_of_service="https://www.google.com/policies/terms/",
        contact=openapi.Contact(email="contact@snippets.local"),
        license=openapi.License(name="BSD License"),
    ),
    public=True,
    permission_classes=(permissions.AllowAny,),

)


urlpatterns = [
    path('', apiView, name="api"),
    path('featureInfo/', featureInfoView, name='featureInfo'),
    path('result/', resultView, name='result'),
    path('dimenInfo/', dimenInfoView, name='dimenInfo'),
    path('swagger/', schema_view.with_ui('swagger',
         cache_timeout=0), name='schema-swagger-ui'),
]
