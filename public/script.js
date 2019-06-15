function hideLightbox(element) {
  element.style.display = 'none';
}

function showInLightbox(imageUrl) {
  const lightbox = document.getElementById('lightbox');
  const imgElement = document.getElementById('lightbox-image');

  lightbox.style.display = 'block';
  imgElement.src = imageUrl;
}

function onKeyPressInLightbox(event) {
  const lightbox = document.getElementById('lightbox');
  if (event.code == 'Escape' && lightbox.style.display != 'none') {
    hideLightbox(lightbox)
  }
}
document.addEventListener('keyup', onKeyPressInLightbox);

function decorateImageLinks() {
  const imageLinks = document.querySelectorAll('.images a');
  for (var i = 0; i < imageLinks.length; i++) {
    const link = imageLinks.item(i);
    link.onclick = function() {
      showInLightbox(link.href);
      return false;
    }
  }
}
