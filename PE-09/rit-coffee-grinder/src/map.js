//decleration of map object
let map;


let geojson = {
    type: 'FeatureCollection',
    features: [

    ]
};

const initMap = () => {
    mapboxgl.accessToken = 'pk.eyJ1IjoiYWNiNzA4NiIsImEiOiJjbHVrMDRyejIwM2hsMmttbDM0dzNhZjAyIn0.Apls0ta6B4m6t86DuSGTxQ';

    map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/light-v11',
        center: [-77.67454147338866, 43.08484339838443],
        zoom: 15.5
    });

    map.on('style.load', () => {
        // Insert the layer beneath any symbol layer.
        const layers = map.getStyle().layers;
        const labelLayerId = layers.find(
            (layer) => layer.type === 'symbol' && layer.layout['text-field']
        ).id;

        // The 'building' layer in the Mapbox Streets
        // vector tileset contains building height data
        // from OpenStreetMap.
        map.addLayer(
            {
                'id': 'add-3d-buildings',
                'source': 'composite',
                'source-layer': 'building',
                'filter': ['==', 'extrude', 'true'],
                'type': 'fill-extrusion',
                'minzoom': 15,
                'paint': {
                    'fill-extrusion-color': '#aaa',

                    // Use an 'interpolate' expression to
                    // add a smooth transition effect to
                    // the buildings as the user zooms in.
                    'fill-extrusion-height': [
                        'interpolate',
                        ['linear'],
                        ['zoom'],
                        15,
                        0,
                        15.05,
                        ['get', 'height']
                    ],
                    'fill-extrusion-base': [
                        'interpolate',
                        ['linear'],
                        ['zoom'],
                        15,
                        0,
                        15.05,
                        ['get', 'min_height']
                    ],
                    'fill-extrusion-opacity': 0.6
                }
            },
            labelLayerId
        );
    });
}

const addMarkersToMap = () => {
    // add markers to map
    for (const feature of geojson.features) {
        // create a HTML element for each feature
        //addMarker(coordinates, title, description, className)
        addMarker(feature.geometry.coordinates, feature.properties.title, feature.properties.description, "marker");
        
    }
}

const loadMarkers = () => {
    const coffeeShops = [
        {
            latitude: 43.084156,
            longitude: -77.67514,
            title: "Artesano Bakery & Cafe"
        },

        {
            latitude: 43.083866,
            longitude: -77.66901,
            title: "Beanz"
        },

        {
            latitude: 43.082520,
            longitude: -77.67980,
            title: "Starbucks"
        },

        {
            latitude: 43.086678,
            longitude: -77.669014,
            title: "The College Grind"
        },

        {
            latitude: 43.082634,
            longitude: -77.68004,
            title: "The Cafe & Market at Crossroads"
        },

        {
            latitude: 43.08382,
            longitude: -77.674805,
            title: "RITZ Sports Zone"
        },

        {
            latitude: 43.086502,
            longitude: -77.66912,
            title: "The Commons"
        },

        {
            latitude: 43.08324,
            longitude: -77.68105,
            title: "The Market at Global Village"
        },

        {
            latitude: 43.08384,
            longitude: -77.67457,
            title: "Brick City Cafe"
        },

        {
            latitude: 43.084904,
            longitude: -77.6676,
            title: "Corner Store"
        },

        {
            latitude: 43.08464,
            longitude: -77.680145,
            title: "CTRL ALT DELi"
        },

        {
            latitude: 43.08359,
            longitude: -77.66921,
            title: "Gracie's"
        }
    ];

    // now convert this data to GeoJSON
    for (let shop of coffeeShops) {
        // an "empty" GEOJSON feature
        const newFeature = {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: []
            },
            properties: {
                title: "",
                description: 'A place to get coffee!'
            }
        };

        //add some properties for current coffee shop
        newFeature.geometry.coordinates[0] = shop.longitude;
        newFeature.geometry.coordinates[1] = shop.latitude;
        newFeature.properties.title = shop.title;

        //push it on to the geojson array
        geojson.features.push(newFeature);
    }

    console.log(geojson.features);


}

const addMarker = (coordinates, title, description, className) => {
    let el = document.createElement('div');
    el.className = className;

    new mapboxgl.Marker(el)
    .setLngLat(coordinates)
    .setPopup(new mapboxgl.Popup({ offset: 25}) //add popups
    .setHTML('<h3>' + title + '</h3><p>' + description + '</p>'))
    .addTo(map);
}

const flyTo = (center = [0, 0]) => {
    //docs.mapbox.com/mapbox-gl-js/api/#map#flyto
    map.flyTo({ center: center });
}

const setZoomLevel = (value = 0) => {
    //docs.mapbox.com/help/glossary/zoom-level/
    map.setZoom(value);
}

const setPitchAndBearing = (pitch = 0, bearing = 0) => {
    //docs.mapbox.com/mapbox-gl-js/example/live-update-feature/
    //docs.mapbox.com/mapbox-gl-js/example/set-perspective
    map.setPitch(pitch);
    map.setBearing(bearing);
}

export { addMarker, initMap, loadMarkers, addMarkersToMap, flyTo, setZoomLevel, setPitchAndBearing };