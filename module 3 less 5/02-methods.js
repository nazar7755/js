const playlist = {
  name: 'my super playlist',
  rating: 5,
  tracks: ['song-1', 'song-2', 'song-3'],

  changeName(newName) {
    this.name = newName;
  },

  addTrack(track) {
    this.tracks.push(track);
  },

  updateRating(newRating) {
    this.rating = newRating;
  },

  getTrackCount() {
    return this.tracks.length;
  },
};

console.log(playlist.getTrackCount());

playlist.changeName('My playlist');
playlist.addTrack('New song');
playlist.addTrack('New song');

console.log(playlist.getTrackCount());

playlist.updateRating('4');

console.log(playlist);
