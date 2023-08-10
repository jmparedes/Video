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

    // Cambiar el iframe con el enlace de YouTube
    videoArea.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/${currentData.videoId}" frameborder="0" allowfullscreen></iframe>`;

    number = (number + 1) % data.length;
  }
}

window.onload = getData;
button.addEventListener('click', changeVideo);
