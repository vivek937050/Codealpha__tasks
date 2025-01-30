const audio = document.getElementById('audio');
const playPauseButton = document.getElementById('play-pause-btn');
const progressBar = document.getElementById('progress-bar');
const songTitle = document.getElementById('song-title');

playPauseButton.addEventListener('click', togglePlayPause);
audio.addEventListener('timeupdate', updateProgress);
progressBar.addEventListener('input', seekAudio);

function togglePlayPause() {
  if (audio.paused) {
    audio.play();
    playPauseButton.textContent = 'Pause';
  } else {
    audio.pause();
    playPauseButton.textContent = 'Play';
  }
}

function updateProgress() {
  const progress = (audio.currentTime / audio.duration) * 100;
  progressBar.value = progress;
}

function seekAudio() {
  const seekTime = (progressBar.value / 100) * audio.duration;
  audio.currentTime = seekTime;
}

// Optionally, display the song title
songTitle.textContent = 'Your Song Name';
