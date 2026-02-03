const map = L.map("map").setView([37.0, -95.0], 4);

// no-label basemap
L.tileLayer(
  "https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png",
  { attribution: "© OpenStreetMap, © CartoDB" }
).addTo(map);

/*
fetch("cities.geojson")
  .then(res => res.json())
  .then(data => {
    L.geoJSON(data, {
      onEachFeature: (feature, layer) => {
        layer.bindTooltip("Watsonville", {
          permanent: true,
          direction: "center",
          className: "watsonville-label"
        });
      }
    }).addTo(map);
  }); */
