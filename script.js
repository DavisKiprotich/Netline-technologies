const playIcon = document.querySelector(".play-icon");
const exploreButton = document.querySelector(".explore");

playIcon.addEventListener("click", function () {
  exploreButton.classList.add("clicked");
  setTimeout(function () {
    exploreButton.classList.remove("clicked");
  }, 1000);
});

const video = document.getElementById("background-video");
const videos = ["video1.mp4", "video2.mp4", "video3.mp4"]; // Add more video filenames if needed
let currentVideoIndex = 0;

video.addEventListener("ended", playNextVideo);

function playNextVideo() {
  currentVideoIndex = (currentVideoIndex + 1) % videos.length;
  video.src = videos[currentVideoIndex];
  video.play();
}

// Initial video play
video.play();

// Hamburger and close display
const hamburger = document.querySelector(".hamburger");
const close = document.querySelector(".close");
const navLinks = document.querySelector("nav ul");

hamburger.addEventListener("click", () => {
  navLinks.classList.add("show");
  hamburger.style.display = "none";
  close.style.display = "block";
});

close.addEventListener("click", () => {
  navLinks.classList.remove("show");
  close.style.display = "none";
  hamburger.style.display = "block";
});
