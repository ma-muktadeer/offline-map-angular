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
              tiles: ['http://localhost:8081/{z}/{x}/{y}.pbf'],
              minzoom: 0,
              maxzoom: 14,
            }
          },
          layers:
            [
              {
                "id": "background",
                "type": "background",
                "paint": {
                  "background-color": "hsl(47, 26%, 88%)"
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
                    "hsl(0, 0%, 80%)" // Default color
                  ],
                  "line-width": [
                    "match",
                    ["get", "class"],
                    "motorway", 1.2,
                    "trunk", 1,
                    "primary", 0.8,
                    "secondary", 0.9,
                    "tertiary", 1,
                    0.6 // Default width
                  ],
                  "line-opacity": [
                    "interpolate",
                    ["linear"],
                    ["zoom"],
                    6, 0.3,   // Start fading in at zoom 6
                    7, 0.6,
                    8, 1     // Fully opaque from zoom 8 onwards
                  ]
                },
                "minzoom": 6
              },
              {
                "id": "building",
                "type": "fill",
                "source": "vector-tiles",
                "source-layer": "building",
                "paint": {
                  "fill-color": "hsl(30, 7.50%, 58.00%)",
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
                "id": "place-labels", // More descriptive ID
                "type": "symbol",
                "source": "vector-tiles",
                "source-layer": "place",
                "minzoom": 0, // Start showing labels from zoom 0
                "layout": {
                  "text-field": ["get", "name"],
                  "text-font": ["Noto Sans Bold"],
                  "text-size": [
                    "interpolate",
                    ["linear"],
                    ["zoom"],
                    // Zoom 0-2: Show only Continents
                    0, ["match", ["get", "class"], "continent", 10, 0],
                    2, ["match", ["get", "class"], "continent", 14, 0],

                    // Zoom 2-4: Fade in Countries, grow Continents slightly
                    3, ["match", ["get", "class"],
                      "continent", 15,
                      "country", 10, // Start showing countries
                      0
                    ],
                    4, ["match", ["get", "class"],
                      "continent", 16,
                      "country", 12, // Countries more prominent
                      "ocean", 10,   // Show major oceans/seas
                      "sea", 10,
                      0
                    ],

                    // Zoom 4-6: Fade in States/Provinces, Major Cities. Increase Country size.
                    5, ["match", ["get", "class"],
                      "country", 16,
                      "state", 10,   // Assuming 'state' class exists for provinces/states
                      "city", 9,     // Start showing major cities (rank 1-3?) - *Filter might be needed*
                      "ocean", 12,
                      "sea", 12,
                      0
                    ],
                    6, ["match", ["get", "class"],
                      "country", 12,
                      "state", 12,
                      "city", 11,     // Cities grow
                      "ocean", 14,
                      "sea", 14,
                      "forest", 9,   // Show large forests/parks
                      0
                    ],

                    // Zoom 6-9: Cities become primary, fade in Towns. Keep State/Country for context.
                    7, ["match", ["get", "class"],
                      // "country", 14,   // Slightly smaller for context
                      "state", 13,
                      "city", 13,
                      "town", 9,      // Start showing towns
                      "ocean", 14,    // Keep water bodies visible
                      "sea", 14,
                      "forest", 10,
                      0
                    ],
                    9, ["match", ["get", "class"],
                      // "country", 12,   // Smaller context
                      "state", 12,
                      "city", 15,     // Cities prominent
                      "town", 11,
                      "village", 9,   // Start showing villages
                      "lake", 10,     // Show lakes
                      "forest", 11,
                      0
                    ],

                    // Zoom 9-12: Towns and Villages grow. City still prominent.
                    10, ["match", ["get", "class"],
                      // Country/State could be hidden here if too cluttered, or kept small
                      "city", 16,
                      "town", 13,
                      "village", 11,
                      "lake", 12,
                      "forest", 12,
                      // Consider adding 'suburb' or 'neighbourhood' if available
                      0
                    ],
                    12, ["match", ["get", "class"],
                      "city", 13,
                      "town", 15,
                      "village", 13,
                      "suburb", 10,       // Example
                      "neighbourhood", 10,// Example
                      "lake", 13,
                      "forest", 13,
                      "house", 8,
                      0
                    ],

                    // Zoom 12+: Focus on local labels. Fade out larger regions? (Optional)
                    14, ["match", ["get", "class"],
                      // "city", 18, // Keep city large if desired
                      "town", 16,
                      "village", 14,
                      "suburb", 12,
                      "neighbourhood", 12,
                      "hamlet", 11,      // Example
                      "poi_landmark", 10, // Example for POIs
                      "address", 9,       // Start showing addresses/buildings late
                      "Building", 9,
                      "house", 10,
                      "lake", 14,         // Keep significant local features
                      "forest", 14,
                      0
                    ],

                  ],
                  "text-padding": 2, // Adds padding around labels, helps avoid collision
                  "text-allow-overlap": false, // Basic collision detection
                  "text-ignore-placement": false,
                  // Optional: Improve placement for point labels
                  // "text-anchor": "top",
                  // "text-offset": [0, 0.8], // Offset slightly below the point feature
                  // Optional: Use different fonts for different classes if desired
                  // "text-font": [
                  //   "match", ["get", "class"],
                  //   "country", ["Noto Sans Bold"],
                  //   "city", ["Noto Sans Medium"], // Example
                  //   ["Noto Sans Regular"] // Default
                  // ],
                  // Optional: Prioritize labels based on class or rank
                  // "symbol-sort-key": [
                  //   "match", ["get", "class"],
                  //   "continent", 10,
                  //   "country", 9,
                  //   "state", 8,
                  //   "city", 7,
                  //   "town", 6,
                  //   "village", 5,
                  //   0 // Default priority
                  // ]
                },
                "paint": {
                  "text-color": "hsl(0, 0%, 20%)", // #333333
                  "text-halo-color": "hsl(0, 0%, 100%)", // White halo
                  "text-halo-width": 1.5,
                  "text-halo-blur": 0.5 // Slightly soften the halo edge
                },
                // Optional: Add filters if needed, e.g., only show top-ranked cities initially
                // "filter": [
                //  "match", ["get", "class"],
                //  "city", ["<=", ["get", "rank"], 3], // Example: Only show cities with rank 1, 2, or 3 at lower zooms
                //  true // Show all other classes
                //]
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
            ],
          // style: 'assets/styles/style-mps.json',
          center: [90.3563, 23.6850],
          zoom: 5,
        }
      });
  }
}
