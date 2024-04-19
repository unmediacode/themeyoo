# reproductor.py
import pygame

def play_song(song_file):
    pygame.init()
    pygame.mixer.music.load(song_file)
    pygame.mixer.music.play()

# api.py
from flask import Flask, jsonify
from reproductor import play_song

app = Flask(__name__)

@app.route('/songs')
def get_songs():
    songs = [
        {'id': 1, 'name': 'Song 1', 'file': 'song1.mp3'},
        {'id': 2, 'name': 'Song 2', 'file': 'song2.mp3'}
    ]
    return jsonify(songs)

@app.route('/play/<int:song_id>')
def play_song(song_id):
    song_file = get_song_file(song_id)
    play_song(song_file)
    return 'Song played!'

if __name__ == '__main__':
    app.run(debug=True)