const imageContainerEl = document.querySelector(".image-container");

const nextEl = document.getElementById("next");
let x = 0;
let timer;
let currentAudio;

const audioElements = [
  document.getElementById("audio1"),
  document.getElementById("audio2"),
  document.getElementById("audio3"),
  document.getElementById("audio4"),
  document.getElementById("audio5"),
  document.getElementById("audio6"),
  document.getElementById("audio7"),
  document.getElementById("audio8"),
  
];



nextEl.addEventListener("click", () => {
  x = x - 45;
  clearTimeout(timer);
  updateGallery();
});

function updateGallery() {
  const imageIndex = Math.abs(x / 45) % audioElements.length;
  
  currentAudio = audioElements[imageIndex];
  playAudio(currentAudio);
  
  imageContainerEl.style.transform = `perspective(1000px) rotateY(${x}deg)`;

  timer = setTimeout(() => {
    x = x - 45;
    updateGallery();
  }, 10000);
}

function playAudio(audio) {
  
  if (currentAudio && !currentAudio.paused) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
  }

 
  audio.play();
}

updateGallery();














