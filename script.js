const video = document.getElementById("video");
const play = document.getElementById("play");
const stop = document.getElementById("stop");
const progress = document.getElementById("progress");
const timestamp = document.getElementById("timestamp");

// play & pause video
const toggleVideoStatus = () => {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
};

//update play/pause icon
const updatePlayIcon = () => {
  if (video.paused) {
    play.innerHTML = '<i class="fa fa-play fa-2x"></i>';
  } else {
    play.innerHTML = '<i class="fa fa-pause fa-2x"></i>';
  }
};

//update progress
const updateProgress = () => {
  return "updated progress";
};

//set video time to progeress
function setVideoProgress() {
  return "setting v. progress";
}

// stop video
const stopVideo = () => {
  video.currentTime = 0;
  video.pause();
  play.innerHTML = '<i class="fa fa-play fa-2x"></i>';
};

//Event listeners

video.addEventListener("click", toggleVideoStatus);
play.addEventListener("click", toggleVideoStatus);

video.addEventListener("pause", updatePlayIcon);
video.addEventListener("play", updatePlayIcon);

stop.addEventListener("click", stopVideo);

video.addEventListener("timeupdate", updateProgress);

progress.addEventListener("change", setVideoProgress);
