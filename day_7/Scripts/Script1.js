document.write("<h1> Showing pics </h1>");
document.write("<hr>");

var index = 0;
var images = [
  "Images/1.jpg",
  "Images/2.jpg",
  "Images/3.jpg",
  "Images/4.jpg",
  "Images/5.jpg",
  "Images/6.jpg",
];

var slideshowInterval;

function displayImage() {
  var imageUrl = images[index];
  var img = document.getElementById('currentImage'); 
  img.src = imageUrl;
  img.alt = 'Image ' + (index + 1);
}

function nextImage() {
  if (index < images.length - 1) {
    index++;
  } else {
    index = 0; 
  }
  displayImage();
}

function previousImage() {
  if (index > 0) {
    index--;
  } else {
    index = images.length - 1; 
  }
  displayImage();
}

function startSlideshow() {
  stopSlideshow(); 
  slideshowInterval = setInterval(function() {
    index = (index + 1) % images.length;
    displayImage();
  }, 2000); 
}

function stopSlideshow() {
  clearInterval(slideshowInterval);
}

window.onload = displayImage;
