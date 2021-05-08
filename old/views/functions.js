function inhalerPressed() {
	w3.hide("#inhalerImg");
	// OLD CODEvar playTimeWorth = 1800;//	var playTimeReady = localStorage.getItem("playTimeReady");//	var playTime = localStorage.getItem("playTime");////	if (playTimeReady == true) {//		playTime = playTime + playTimeWorth;//		console.log("playTimeReady == true");//	} else {//		playTimeReady = true;//		localStorage.setItem("playTimeReady", true);//		playTime = playTimeWorth;//		console.log(`playTimeReady == false, ${playTimeReady}`);//	}//	localStorage.setItem("playTime", playTime);
	var playTime = localStorage.getItem("playTime");
	if (localStorage.getItem("playTime") >= 0) {
		playTime = +playTime + 1800;
		console.log("true")
	} else {
		var playTime = 1800;
		console.log("false")
	}
	localStorage.setItem("playTime", playTime)
	w3.show("#randomImage");
}

function loadSettings() {
	var settings = localStorage.getItem("settings")
	if (settings == null) {
		settings = [1800]
	}
	document.getElementById("gamingTime").value = "1800";
}
