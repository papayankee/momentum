const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
  h1.classList.toggle("clicked");
  console.log("handleTitleClick function was executed!");
}

h1.addEventListener("click", handleTitleClick);


// Path: app.js

