const images = ["01.jpg","02.png","03.jpg","04.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);


bgImage.style.position = "absolute";
bgImage.style.top = "0";
bgImage.style.left = "0";
bgImage.style.zIndex = "-1";
bgImage.style.opacity = "0.8";
