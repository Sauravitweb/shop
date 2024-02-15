const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}
function showZoomedOptions(image) {
    // Get the zoom container
    var zoomContainer = document.getElementById('zoomContainer');

    // Set the zoomed image source
    var zoomedImage = zoomContainer.querySelector('.zoomed-image');
    zoomedImage.src = image.src;

    // Show the zoom container
    zoomContainer.style.display = 'flex';

    // Add event listener to close the zoomed image on click
    zoomContainer.onclick = function() {
      zoomContainer.style.display = 'none';
    };
}
