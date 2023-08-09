let number = 0;
let data = null;
const button = document.getElementById('btn');
const titleArea = document.getElementById("title");
const contentArea = document.getElementById("content");
const videoArea = document.getElementById("video");

function getData() {
  fetch('ajax.json')
    .then(response => response.json())
    .then(jsonData => {
      data = jsonData;
      changeVideo();
    })
    .catch(error => {
      console.error('Error al recuperar los datos:', error);
    });
}

function changeVideo() {
  if (data !== null && data.length > 0) {
    const currentData = data[number];
    titleArea.textContent = currentData.title;
    contentArea.textContent = currentData.content;
    videoArea.src = currentData.videoUrl;
    number = (number + 1) % data.length;
  }
}

window.onload = getData;
button.addEventListener('click', changeVideo)