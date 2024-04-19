// script.js
const songList = document.getElementById('song-list');

fetch('/songs')
    .then(response => response.json())
    .then(songs => {
        songs.forEach(song => {
            const listItem = document.createElement('li');
            listItem.textContent = song.name;
            listItem.dataset.songId = song.id;
            songList.appendChild(listItem);
        });
    });

songList.addEventListener('click', event => {
    const songId = event.target.dataset.songId;
    fetch(`/play/${songId}`)
        .then(response => response.text())
        .then(message => console.log(message));
});