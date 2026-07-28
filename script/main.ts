function load() {
    fetch("https://api.p2pquake.net/v2/history?codes=551")
        .then(response => response.json())
        .then(data => {                 
            let earthquake = data[1].earthquake;
            let hypocenter = earthquake.hypocenter;
                        
            document.getElementById("nameText").innerHTML = hypocenter.name;
            document.getElementById("depthText").innerHTML = hypocenter.depth;
            document.getElementById("latitudeText").innerHTML = hypocenter.latitude;
            document.getElementById("longitudeText").innerHTML = hypocenter.longitude
            document.getElementById("magnitudeText").innerHTML = hypocenter.magnitude;
    });
}

load();

