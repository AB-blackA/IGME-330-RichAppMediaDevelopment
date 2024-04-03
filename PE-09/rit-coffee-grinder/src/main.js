import * as map from "./map.js";
import * as ajax from "./ajax.js";

let poi;

const loadPOI = () => {
    const url = "https://people.rit.edu/~acjvks/shared/330/igm-points-of-interest.php";

    //callback function for when data shows

    const poilLoaded = (jsonString) => {
        poi = JSON.parse(jsonString);
        console.log(poi);

        //make markers and add to map
        for(let p of poi){
            //map.addMarker(coordinates, title, description, className)
            map.addMarker(p.coordinates, p.title, "A POI!", "poi");
        }
    }

    //start download
    ajax.downloadFile(url, poilLoaded);
}

const init = () => {

    map.initMap();
    map.loadMarkers();
    map.addMarkersToMap();
    setupUI();
}

const setupUI = () => {
    // it's easy to get [longitude,latitude] coordinates with this tool: http://geojson.io/
    const lnglatRIT = [-77.67454147338866, 43.08484339838443];
    const lnglatIGM = [-77.67990589141846, 43.08447511795301];

    // RIT Zoom 15.5
    btn1.onclick = () => {
        map.setZoomLevel(15.5);
        map.setPitchAndBearing(0, 0);
        map.flyTo(lnglatRIT);
    }

    // RIT Isometric View
    btn2.onclick = () => {
        map.setZoomLevel(15.5);
        map.setPitchAndBearing(45, 0);
        map.flyTo(lnglatRIT);
    }

    // World zoom 0
    btn3.onclick = () => {
        map.setZoomLevel();
        map.setPitchAndBearing(0, 0);
        map.flyTo();
    }

    // IGM zoom 18
    btn4.onclick = () => {
        map.setZoomLevel(18);
        map.setPitchAndBearing(0, 0);
        map.flyTo(lnglatIGM);
    }

    //load some marker data
    btn5.onclick = () => {
        //only download data once
        if(!poi){
            //fix to prevent reloading of POI data, temporary
            //set value to something (to not be false)
            poi = "true";
            loadPOI();
            
        }
        
    }

}





export { init };