import { afterRender, Component } from '@angular/core';
import * as maplibre from 'maplibre-gl';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'offline-map-angular';

  constructor() {
    afterRender(() => this.initMap());
  }


  initMap(): void {
    const map = new maplibre.Map(
      {
        container: 'map', // ID of the div to render map into
        style: {
          version: 8,
          // "glyphs": "https://fonts.openmaptiles.org/{fontstack}/{range}.pbf",
          glyphs: 'https://demotiles.maplibre.org/font/{fontstack}/{range}.pbf',
          sources: {
            'vector-tiles': {
              type: 'vector',
              tiles: ['http://localhost:8080/{z}/{x}/{y}.pbf']
            }
          },
          layers:



            // ldskj
            // [
            //   {
            //     'id': 'background',
            //     'type': 'background',
            //     'paint': {
            //       'background-color': '#ffffff'
            //     }
            //   },
            //   {
            //     'id': 'waterway',
            //     'type': 'fill',
            //     'source': 'vector-tiles',
            //     'source-layer': 'waterway',
            //     'paint': {
            //       "fill-color": "hsl(205, 56%, 73%)",
            //     }
            //   },
            //   {
            //     'id': 'water',
            //     'type': 'fill',
            //     'source': 'vector-tiles',
            //     'source-layer': 'water',
            //     'paint': {
            //       "fill-color": "hsl(205, 56%, 73%)"
            //     },
            //   },
            //   {
            //     filter: [
            //       "==",
            //       "$type",
            //       "Point"
            //     ],
            //     id: "housenumber",
            //     layout: {
            //       "text-field": "{housenumber}",
            //       "text-font": [
            //         "Noto Sans Regular"
            //       ],
            //       "text-size": 10
            //     },
            //     minzoom: 17,
            //     "paint": {
            //       "text-color": "rgba(212, 177, 146, 1)"
            //     },
            //     source: "vector-tiles",
            //     "source-layer": "housenumber",
            //     type: "symbol"
            //   },
            //   {
            //     "filter": [
            //       "all",
            //       [
            //         "==",
            //         "$type",
            //         "Point"
            //       ],
            //       [
            //         "==",
            //         "rank",
            //         1]
            //     ],
            //     "id": "poi_label",
            //     "layout": {
            //       "icon-size": 1,
            //       "text-anchor": "top",
            //       "text-field": "{name}",
            //       "text-font": [
            //         "Noto Sans Regular"
            //       ],
            //       "text-max-width": 8,
            //       "text-offset": [0, 0.5],
            //       "text-size": 11
            //     },
            //     "minzoom": 14,
            //     "paint": {
            //       "text-color": "#666",
            //       "text-halo-blur": 1,
            //       "text-halo-color": "rgba(255,255,255,0.75)",
            //       "text-halo-width": 1
            //     },
            //     "source": "vector-tiles",
            //     "source-layer": "poi",
            //     "type": "symbol"
            //   },
            //   {
            //     "filter": [
            //       "all",
            //       [
            //         "has",
            //         "iata"
            //       ]
            //     ],
            //     "id": "airport-label",
            //     "layout": {
            //       "icon-size": 1,
            //       "text-anchor": "top",
            //       "text-field": "{name}",
            //       "text-font": [
            //         "Noto Sans Regular"
            //       ],
            //       "text-max-width": 8,
            //       "text-offset": [0, 0.5],
            //       "text-size": 11
            //     },
            //     "minzoom": 10,
            //     "paint": {
            //       "text-color": "#666",
            //       "text-halo-blur": 1,
            //       "text-halo-color": "rgba(255,255,255,0.75)",
            //       "text-halo-width": 1
            //     },
            //     "source": "vector-tiles",
            //     "source-layer": "aerodrome_label",
            //     "type": "symbol"
            //   },
            //   {
            //     "filter": [
            //       "==",
            //       "$type",
            //       "LineString"
            //     ],
            //     "id": "road_major_label",
            //     "layout": {
            //       "symbol-placement": "line",
            //       "text-field": "{name}",
            //       "text-font": [
            //         "Noto Sans Regular"
            //       ],
            //       "text-letter-spacing": 0.1,
            //       "text-rotation-alignment": "map",
            //       "text-size": 14,
            //       "text-transform": "uppercase"
            //     },
            //     "paint": {
            //       "text-color": "#000",
            //       "text-halo-color": "hsl(0, 0%, 100%)",
            //       "text-halo-width": 2
            //     },
            //     "source": "vector-tiles",
            //     "source-layer": "transportation_name",
            //     "type": "symbol"
            //   },
            //   {
            //     "filter": [
            //       "all",
            //       [
            //         "==",
            //         "$type",
            //         "Point"
            //       ],
            //       [
            //         "!in",
            //         "class",
            //         "city",
            //         "state",
            //         "country",
            //         "continent"
            //       ]
            //     ],
            //     "id": "place_label_other",
            //     "layout": {
            //       "text-anchor": "center",
            //       "text-field": "{name}",
            //       "text-font": [
            //         "Noto Sans Regular"
            //       ],
            //       "text-max-width": 6,
            //       "text-size": 14
            //     },
            //     "minzoom": 8,
            //     "paint": {
            //       "text-color": "hsl(0, 0%, 25%)",
            //       "text-halo-blur": 0,
            //       "text-halo-color": "hsl(0, 0%, 100%)",
            //       "text-halo-width": 2
            //     },
            //     "source": "vector-tiles",
            //     "source-layer": "place",
            //     "type": "symbol"
            //   },
            //   {
            //     "filter": [
            //       "all",
            //       [
            //         "==",
            //         "$type",
            //         "Point"
            //       ],
            //       [
            //         "==",
            //         "class",
            //         "city"
            //       ]
            //     ],
            //     "id": "place_label_city",
            //     "layout": {
            //       "text-field": "{name}",
            //       "text-font": [
            //         "Noto Sans Regular"
            //       ],
            //       "text-max-width": 10,
            //       "text-size": 16
            //     },
            //     "maxzoom": 16,
            //     "paint": {
            //       "text-color": "hsl(0, 0%, 0%)",
            //       "text-halo-blur": 0,
            //       "text-halo-color": "hsla(0, 0%, 100%, 0.75)",
            //       "text-halo-width": 2
            //     },
            //     "source": "vector-tiles",
            //     "source-layer": "place",
            //     "type": "symbol"
            //   },
            //   {
            //     "filter": [
            //       "all",
            //       [
            //         "==",
            //         "$type",
            //         "Point"
            //       ],
            //       [
            //         "==",
            //         "class",
            //         "country"
            //       ],
            //       [
            //         "!has",
            //         "iso_a2"
            //       ]
            //     ],
            //     "id": "country_label-other",
            //     "layout": {
            //       "text-field": "{name:latin}",
            //       "text-font": [
            //         "Noto Sans Regular"
            //       ],
            //       "text-max-width": 10,
            //       "text-size": 12
            //     },
            //     "maxzoom": 12,
            //     "paint": {
            //       "text-color": "hsl(0, 0%, 13%)",
            //       "text-halo-blur": 0,
            //       "text-halo-color": "rgba(255,255,255,0.75)",
            //       "text-halo-width": 2
            //     },
            //     "source": "vector-tiles",
            //     "source-layer": "place",
            //     "type": "symbol"
            //   },
            //   {
            //     "filter": [
            //       "all",
            //       [
            //         "==",
            //         "$type",
            //         "Point"
            //       ],
            //       [
            //         "==",
            //         "class",
            //         "country"
            //       ],
            //       [
            //         "has",
            //         "iso_a2"
            //       ]
            //     ],
            //     "id": "country_label",
            //     "layout": {
            //       "text-field": "{name:latin}",
            //       "text-font": [
            //         "Noto Sans Regular"
            //       ],
            //       "text-max-width": 10,
            //       "text-size": 12
            //     },
            //     "maxzoom": 12,
            //     "paint": {
            //       "text-color": "hsl(0, 0%, 13%)",
            //       "text-halo-blur": 0,
            //       "text-halo-color": "rgba(255,255,255,0.75)",
            //       "text-halo-width": 2
            //     },
            //     "source": "vector-tiles",
            //     "source-layer": "place",
            //     "type": "symbol"
            //   },
            //   {
            //     id: 'label-layer',
            //     type: 'symbol',
            //     source: 'vector-tiles',
            //     'source-layer': 'place',
            //     layout: {
            //       'text-field': ['get', 'name'],
            //       'text-font': ['Open Sans Regular', 'Arial Unicode MS Regular'],
            //       'text-size': 13
            //     },
            //     paint: {
            //       'text-color': '#333',
            //       'text-halo-color': '#fff',
            //       'text-halo-width': 1
            //     }
            //   },
            //   {
            //     'id': 'landcover-glacier',
            //     'type': 'fill',
            //     'source': 'vector-tiles',
            //     'source-layer': 'landcover',
            //     'paint': {
            //       "fill-color": "hsl(47, 22%, 94%)",
            //     }
            //   },
            //   {
            //     'id': 'landcover_sand',
            //     'type': 'fill',
            //     'source': 'vector-tiles',
            //     'source-layer': 'landcover',
            //     'paint': {
            //       "fill-antialias": false,
            //       "fill-color": "rgba(232, 214, 38, 1)",
            //     }
            //   },
            //   {
            //     'id': 'landuse_overlay_national_park',
            //     'type': 'fill',
            //     'source': 'vector-tiles',
            //     'source-layer': 'landcover',
            //     'paint': {
            //       "fill-color": "#E1EBB0",
            //     }
            //   },
            //   {
            //     'id': 'landcover_grass',
            //     'type': 'fill',
            //     'source': 'vector-tiles',
            //     'source-layer': 'landcover',
            //     'paint': {
            //       "fill-color": "hsl(82, 46%, 72%)",
            //       "fill-opacity": 0.45
            //     }
            //   },
            //   {
            //     'id': 'landcover_wood',
            //     'type': 'fill',
            //     'source': 'vector-tiles',
            //     'source-layer': 'landcover',
            //     'paint': {
            //       "fill-color": "hsl(82, 46%, 72%)",
            //       "fill-opacity": 0.4
            //     }
            //   },
            //   {
            //     'id': 'landcover-ice-shelf',
            //     'type': 'fill',
            //     'source': 'vector-tiles',
            //     'source-layer': 'landcover',
            //     'paint': {
            //       "fill-color": "hsl(47, 26%, 88%)",
            //       "fill-opacity": 0.8
            //     }
            //   },

            //   {
            //     "filter": [
            //       "all",
            //       [
            //         "==",
            //         "$type",
            //         "Polygon"
            //       ],
            //       [
            //         "in",
            //         "class",
            //         "residential",
            //         "suburb",
            //         "neighbourhood"
            //       ]
            //     ],
            //     "id": "landuse-residential",
            //     "paint": {
            //       "fill-color": "hsl(47, 13%, 86%)",
            //       "fill-opacity": 0.7
            //     },
            //     "source": "vector-tiles",
            //     "source-layer": "landuse",
            //     "type": "fill"
            //   },
            //   {
            //     "filter": [
            //       "==",
            //       "class",
            //       "agriculture"
            //     ],
            //     "id": "landuse",
            //     "paint": {
            //       "fill-color": "#eae0d0"
            //     },
            //     "source": "vector-tiles",
            //     "source-layer": "landuse",
            //     "type": "fill"
            //   },
            //   {
            //     "filter": [
            //       "all",
            //       [
            //         "\u003C=",
            //         "admin_level",
            //         2],
            //       [
            //         "==",
            //         "$type",
            //         "LineString"
            //       ]
            //     ],
            //     "id": "admin_country",
            //     "layout": {
            //       "line-cap": "round",
            //       "line-join": "round"
            //     },
            //     "paint": {
            //       "line-color": "hsl(0, 0%, 60%)",
            //       "line-width": 2.0
            //     },
            //     "source": "vector-tiles",
            //     "source-layer": "boundary",
            //     "type": "line"
            //   },
            //   {
            //     "filter": [
            //       "in",
            //       "admin_level",
            //       4, 6, 8],
            //     "id": "admin_sub",
            //     "paint": {
            //       "line-color": "hsla(0, 0%, 60%, 0.5)",
            //       "line-dasharray": [2, 1]
            //     },
            //     "source": "vector-tiles",
            //     "source-layer": "boundary",
            //     "type": "line"
            //   },
            // ]
            /////////////////////////////////////////////////////////////
            [
              {
                "id": "background",
                "type": "background",
                "paint": {
                  "background-color": "#f8f9fa"
                }
              },
              {
                "id": "water",
                "type": "fill",
                "source": "vector-tiles",
                "source-layer": "water",
                "paint": {
                  "fill-color": "hsl(205, 56%, 73%)",
                  "fill-opacity": 0.8
                }
              },
              {
                "id": "waterway",
                "type": "line",
                "source": "vector-tiles",
                "source-layer": "waterway",
                "paint": {
                  "line-color": "hsl(205, 56%, 73%)",
                  "line-width": 1
                }
              },
              {
                "id": "landcover",
                "type": "fill",
                "source": "vector-tiles",
                "source-layer": "landcover",
                "paint": {
                  "fill-color": [
                    "match",
                    ["get", "class"],
                    "grass", "hsl(120, 46%, 85%)",
                    "forest", "hsl(120, 46%, 70%)",
                    "wetland", "hsl(180, 46%, 85%)",
                    "hsl(60, 46%, 85%)"
                  ]
                }
              },
              {
                "id": "landuse",
                "type": "fill",
                "source": "vector-tiles",
                "source-layer": "landuse",
                "paint": {
                  "fill-color": [
                    "match",
                    ["get", "class"],
                    "residential", "hsl(30, 20%, 90%)",
                    "commercial", "hsl(0, 20%, 90%)",
                    "industrial", "hsl(240, 20%, 90%)",
                    "hsl(60, 20%, 90%)"
                  ],
                  "fill-opacity": 0.6
                }
              },
              {
                "id": "park",
                "type": "fill",
                "source": "vector-tiles",
                "source-layer": "park",
                "paint": {
                  "fill-color": "hsl(120, 46%, 85%)",
                  "fill-opacity": 0.7
                }
              },
              {
                "id": "boundary",
                "type": "line",
                "source": "vector-tiles",
                "source-layer": "boundary",
                "paint": {
                  "line-color": "hsl(0, 0%, 60%)",
                  "line-dasharray": [2, 2],
                  "line-width": [
                    "match",
                    ["get", "admin_level"],
                    2, 1,
                    4, 0.8,
                    0.5
                  ]
                }
              },
              {
                "id": "aeroway",
                "type": "line",
                "source": "vector-tiles",
                "source-layer": "aeroway",
                "paint": {
                  "line-color": "hsl(240, 80%, 80%)",
                  "line-width": 0.8
                }
              },
              {
                "id": "transportation",
                "type": "line",
                "source": "vector-tiles",
                "source-layer": "transportation",
                "paint": {
                  "line-color": [
                    "match",
                    ["get", "class"],
                    "motorway", "hsl(0, 80%, 60%)",
                    "trunk", "hsl(30, 80%, 60%)",
                    "primary", "hsl(60, 80%, 60%)",
                    "secondary", "hsl(90, 80%, 60%)",
                    "tertiary", "hsl(120, 80%, 60%)",
                    "hsl(0, 0%, 80%)"
                  ],
                  "line-width": [
                    "match",
                    ["get", "class"],
                    "motorway", 1.2,
                    "trunk", 1,
                    "primary", 0.8,
                    "secondary", 0.9,
                    "tertiary", 1,
                    0.6
                  ],
                  "line-opacity": [
                    "interpolate",
                    ["linear"],
                    ["zoom"],
                    6, 0.3,
                    7, 0.6,
                    8, 1
                  ]
                },
                "minzoom": 7,
                "maxzoom": 14
              },
              {
                "id": "building",
                "type": "fill",
                "source": "vector-tiles",
                "source-layer": "building",
                "paint": {
                  "fill-color": "hsl(30, 20%, 80%)",
                  "fill-opacity": 0.7
                }
              },
              {
                "id": "water_name",
                "type": "symbol",
                "source": "vector-tiles",
                "source-layer": "water_name",
                "layout": {
                  "text-field": ["get", "name"],
                  "text-font": ["Noto Sans Regular"],
                  "text-size": 12
                },
                "paint": {
                  "text-color": "hsl(205, 80%, 40%)",
                  "text-halo-color": "hsl(205, 56%, 93%)",
                  "text-halo-width": 1
                }
              },
              {
                "id": "transportation_name",
                "type": "symbol",
                "source": "vector-tiles",
                "source-layer": "transportation_name",
                "layout": {
                  "text-field": ["get", "name"],
                  "text-font": ["Noto Sans Regular"],
                  "text-size": 10
                },
                "paint": {
                  "text-color": "hsl(0, 0%, 30%)",
                  "text-halo-color": "hsl(0, 0%, 100%)",
                  "text-halo-width": 1
                }
              },
              {
                "id": "place",
                "type": "symbol",
                "source": "vector-tiles",
                "source-layer": "place",
                "layout": {
                  "text-field": ["get", "name"],
                  "text-font": ["Noto Sans Bold"],
                  "text-size": [
                    "match",
                    ["get", "class"],
                    "city", 14,
                    "town", 12,
                    "village", 10,
                    8
                  ]
                },
                "paint": {
                  "text-color": "hsl(0, 0%, 20%)",
                  "text-halo-color": "hsl(0, 0%, 100%)",
                  "text-halo-width": 1.5
                }
              },
              {
                "id": "poi",
                "type": "symbol",
                "source": "vector-tiles",
                "source-layer": "poi",
                "layout": {
                  "icon-image": [
                    "match",
                    ["get", "class"],
                    "restaurant", "restaurant",
                    "cafe", "cafe",
                    "shop", "shop",
                    ""
                  ],
                  "text-field": ["get", "name"],
                  "text-font": ["Noto Sans Regular"],
                  "text-size": 10,
                  "text-offset": [0, 0.8]
                },
                "paint": {
                  "text-color": "hsl(0, 0%, 30%)",
                  "text-halo-color": "hsl(0, 0%, 100%)",
                  "text-halo-width": 1
                }
              },
              {
                "id": "aerodrome_label",
                "type": "symbol",
                "source": "vector-tiles",
                "source-layer": "aerodrome_label",
                "layout": {
                  "text-field": ["get", "name"],
                  "text-font": ["Noto Sans Bold"],
                  "text-size": 12
                },
                "paint": {
                  "text-color": "hsl(240, 80%, 40%)",
                  "text-halo-color": "hsl(0, 0%, 100%)",
                  "text-halo-width": 1.5
                }
              }
            ]
          ,



          // },


          // style: 'assets/styles/style-mps.json',
          center: [90.3563, 23.6850],
          zoom: 5
        }
      });
  }
}
