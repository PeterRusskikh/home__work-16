
function playSound(sound) {
	var song = document.getElementById(sound)
	if (song.paused) {
		song.play();
	} else {
	}
}
function stopSound(sound) {
	var songS = document.getElementById(sound)
	if (songS.play) {
		songS.pause();
	}
}





