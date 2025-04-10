import { Component, inject } from '@angular/core';
import { MapService, MarkerData } from '../service/map.service';

@Component({
  selector: 'app-plt-mp',
  imports: [],
  templateUrl: './plt-mp.component.html',
  styleUrl: './plt-mp.component.scss'
})
export class PltMpComponent {

  mapService = inject(MapService);

  sampleData: MarkerData[] = [
    {
      coordinates: [90.3563, 23.6850],
      properties: {
        title: "Dhaka Center",
        description: "Capital of Bangladesh",
        type: "city"
      }
    },
    {
      coordinates: [90.3832, 23.8103],
      properties: {
        title: "Important Location",
        description: "Sample point of interest",
        type: "poi"
      }
    },
    {
      coordinates: [90.3832, 22.8103],
      properties: {
        title: "Important Location",
        description: "Sample point of interest",
        type: "nai"
      }
    },
  ];

  ngOnInit(): void {
    this.mapService.initMap('map-container', [90.3563, 23.6850], 5, this.sampleData); //[90.3563, 23.6850]

  }

  ngOnDestroy(): void {
    this.mapService.removeMarkers();
  }

  getMarkers() {
    const markers = this.mapService.getMarkers();
    console.log('markers are =>', markers);
    return markers;
  }
}
