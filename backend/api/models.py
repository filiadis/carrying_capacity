from django.contrib.gis.db import models

# Create your models here.


class DimenTot(models.Model):
    id = models.BigIntegerField(primary_key=True)
    geom = models.MultiPolygonField(blank=True, null=True)
    dimen = models.CharField(max_length=254, blank=True, null=True)
    dimos = models.CharField(max_length=254, blank=True, null=True)
    peren = models.CharField(max_length=254, blank=True, null=True)
    perifereia = models.CharField(max_length=254, blank=True, null=True)
    area = models.FloatField(blank=True, null=True)
    urban = models.FloatField(blank=True, null=True)
    pop = models.CharField(max_length=254, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'dimen_tot'
