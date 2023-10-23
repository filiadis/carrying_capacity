import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { setDimos } from 'src/app/store/actions/dimos.actions';
import { setDimen } from 'src/app/store/actions/dimen.actions';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})
export class MapComponent implements OnInit {
  public map!: L.Map;

  dimos$: Observable<string>;

  dimen$: Observable<string[]>;

  loading: boolean = false;

  Esri_WorldGrayCanvas = L.tileLayer(
    'https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}',
    {
      attribution: 'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ',
      zIndex: 10,
      maxZoom: 16,
    }
  );

  constructor(
    private http: HttpClient,

    private store: Store<{ dimos: string; dimen: string[] }>
  ) {
    this.dimos$ = store.select('dimos');
    this.dimen$ = store.select('dimen');
  }

  ngOnInit() {
    this.map = L.map('map', { zoomControl: true }).setView([39, 22], 8);

    this.Esri_WorldGrayCanvas.addTo(this.map);

    this.map.on('click', this.selectDim.bind(this));

    const wmsLayer = L.tileLayer.wms(
      'http://89.116.30.55:8090/geoserver/ferousa_ikanotita/wms',
      {
        layers: 'dimen_tot',
        zIndex: 50,
        format: 'image/png',
        transparent: true,
      }
    );

    wmsLayer.on('loading', () => {
      this.loading = true;
    });

    wmsLayer.on('load', () => {
      this.loading = false;
    });

    wmsLayer.addTo(this.map);
  }

  selectDim(e: L.LeafletMouseEvent) {
    this.loading = true;
    let lat = e.latlng.lat;

    let lng = e.latlng.lng;

    let coords = [lat, lng];

    this.http.post(`${environment.apiUrl}api/featureInfo/`, coords).subscribe({
      next: (response: any) => {
        if (response.length === 0) {
          this.store.dispatch(setDimos({ value: '' }));
          this.store.dispatch(setDimen({ value: [] }));
          this.loading = false;
        } else {
          this.store.dispatch(setDimos({ value: response.dimos }));
          this.store.dispatch(setDimen({ value: response.dimen }));

          this.loading = false;

          //delete
          this.dimos$.subscribe((data) => {
            console.log(data);
          });
          this.dimen$.subscribe((data) => {
            console.log(data);
          });
        }
      },
      error: (error: any) => {
        console.error(error);
        this.loading = false;
      },
    });
  }
}
