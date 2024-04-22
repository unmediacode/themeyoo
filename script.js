const songList = document.getElementById('song-list');
const playButton = document.getElementById('play-button');
const audioPlayer = document.getElementById('audio-player');

songList.addEventListener('click', event => {
	const songName = event.target.dataset.song;
	audioPlayer.src = songName;
	playButton.textContent = 'Pausa';
	audioPlayer.play();
});

playButton.addEventListener('click', () => {
	if (audioPlayer.paused) {
		audioPlayer.play();
		playButton.textContent = 'Pausa';
	} else {
		audioPlayer.pause();
		playButton.textContent = 'Reproducir';
	}
});