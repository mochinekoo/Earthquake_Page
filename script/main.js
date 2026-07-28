function load() {
    fetch("https://api.p2pquake.net/v2/history?codes=551")
        .then(response => response.json())
        .then(data => {
        let earthquake = data[0].earthquake;
        let hypocenter = earthquake.hypocenter;
        document.getElementById("timeText").innerHTML = earthquake.time;
        document.getElementById("nameText").innerHTML = hypocenter.name;
        document.getElementById("depthText").innerHTML = hypocenter.depth;
        document.getElementById("latitudeText").innerHTML = hypocenter.latitude;
        document.getElementById("longitudeText").innerHTML = hypocenter.longitude;
        document.getElementById("magnitudeText").innerHTML = hypocenter.magnitude;
        document.getElementById("tsunamiText").innerHTML = convertTsunamiValue(earthquake.domesticTsunami);
    });
}
function convertTsunamiValue(text) {
    if (text == "None")
        return "津波の心配はありません";
    else if (text == "Checking")
        return "調査中";
    else if (text == "NonEffective")
        return "若干の海面変動が予想されますが、被害の心配はありません";
    else if (text == "Watch")
        return "現在津波注意報が発表されています";
    else if (text == "Warning")
        return "津波情報が発表されています";
    else
        return "不明";
}
load();
export {};
