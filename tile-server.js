const express = require('express');
const compression = require('compression');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = 8081;

app.use(cors()); 
app.use(compression()); 

const tilesPath = path.join(__dirname, 'src/assets/tiles/pbf');
app.use(express.static(tilesPath, {
  setHeaders: (res, filePath) => {
    if (filePath.endsWith('.pbf')) {
      res.setHeader('Content-Type', 'application/x-protobuf');
      res.setHeader('Content-Encoding', 'gzip');
    }
  }
}));

app.listen(PORT, () => {
  console.log(`✅ Tile server running at http://localhost:${PORT}`);
});
