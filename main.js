const UPDATE_RATE = 20;

const video = document.getElementsByTagName("video")[0];
const canvas = document.getElementsByTagName("canvas")[0];
const ctx = canvas.getContext("2d");

let interval = null;
ctx.imageSmoothingEnabled = true;

video.onplaying = () => {
  interval = setInterval(drawImage, UPDATE_RATE);
};

video.onpause = video.onabort = () => {
  clearInterval(interval);
};

function drawImage() {
  ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
}
