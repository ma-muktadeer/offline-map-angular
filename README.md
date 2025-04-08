# Offline Map with Angular

[![Angular](https://img.shields.io/badge/Angular-v19+-red.svg)](https://angular.io/)
[![MapLibre](https://img.shields.io/badge/MapLibre_GL-v5.3.0-blue.svg)](https://maplibre.org/)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

A solution for displaying offline maps in Angular applications using MBTiles format and Leaflet mapping library.
This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.0.4.

## Features

- 🗺️ Display offline maps using MBTiles files
- ⚡ No external tile server required
- 📦 Self-contained solution using SQL.js for MBTiles access
- 🖥️ Custom Leaflet tile layer implementation
- 📱 Responsive design for all device sizes

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js (v18+ recommended)
- npm (v9+ recommended) or yarn
- Angular CLI (v19+)

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

## Details Information
# Offline Map Angular

This project provides a simple way to visualize offline vector map tiles using Angular and the Planetiler demo viewer. The goal is to support offline map rendering by loading a local `.mbtiles` file into the browser.

## 🔧 Features

- 📦 Local `.mbtiles` support
- 🧭 Vector tile rendering with OpenMapTiles schema
- 🗺️ Works with Planetiler demo viewer
- 🌐 Runs in your local environment using Angular

## 📁 Project Structure

```
offline-map-angular/
├── src/
│   ├── app/
│   ├── assets/
│   └── index.html
├── .mbtiles (not included)
├── angular.json
├── README.md
└── ...
```

## 🚀 Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/ma-muktadeer/offline-map-angular.git
cd offline-map-angular
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Download .pbf file and save to the assets as
```
offline-map-angular/
├── src/
│   ├── app/
│   ├── assets/
|   |  ├── tiles
|   |     └── pbf
|   |        └── 0
|   |        |  └── 0
|   |        |    └── 0.pbf
|   |        └── 1
|   |          └── 0
|   |            ├── 0.pbf
|   |            └── ...
│   └── index.html
├── .mbtiles (not included)
└── ...
```

### 4. Run JS
```bash
node tile-server.js
```

### 5. Serve the App
```bash
ng serve -o
```

Open your browser and go to `http://localhost:4200`

## 🧪 How to Use

### Option 1: Using OnTheGoMap Planetiler Demo Viewer

1. Go to: [https://onthegomap.github.io/planetiler-demo/](https://onthegomap.github.io/planetiler-demo/)
2. Press `Ctrl + O` or `Cmd + O` to open the file picker.
3. Select your `.mbtiles` file.

The map will begin rendering the vector tiles directly from your file.

### Option 2: Integrate Viewer into Your Angular App

If you want to embed the viewer locally:

1. Copy the Planetiler demo viewer source into your `src/assets/` directory.
2. Load it inside your component with an `iframe` or directly inside a view.

## 📦 `.mbtiles` File

- The `.mbtiles` file must follow the [OpenMapTiles schema](https://openmaptiles.org/schema/).
- You can generate it using [Planetiler](https://github.com/onthegomap/planetiler).

## 📄 License

This project is open-source and provided under the MIT License.

Vector tiles generated from OpenStreetMap data via Planetiler are reusable under the CC-BY license:

- © [OpenMapTiles](https://github.com/openmaptiles/openmaptiles/)
- © OpenStreetMap contributors

## 🙌 Acknowledgements

- [OpenStreetMap](https://www.openstreetmap.org/)
- [Planetiler](https://github.com/onthegomap/planetiler)
- [OpenMapTiles](https://www.openmaptiles.org/)


