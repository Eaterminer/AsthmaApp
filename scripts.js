var imgAr = ["animation1.gif", "animation2.gif", "animation3.gif", "animation4.gif", "animation5.gif", "animation6.jpg", "animation7.gif", "animation8.gif", "animation9.gif", "animation10.gif", "animation11.gif", "animation12.gif", "animation13.gif"]
var imgPath = "images/"

var playTimeReady = localStorage.getItem("playtimeAvalible");
var num = Math.floor(Math.random() * imgAr.length);
var img = imgAr[num];

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js');
}
