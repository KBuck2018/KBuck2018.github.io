function myFunction() {
  document.querySelector("#description").innerHTML =
    "For this project, I was tasked with developing a web application using HTML/CSS and basic JavaScript. To do this effectively, I built out the entire application by using div elements and buttons in html/css and then creating a function for each. Naturally, this is as ineffective as you can get, so once I had built out my rudimentary layout, I refactored everything by automating my button creation, using key identifiers. This allowed me to effectively pin point each button and cut my code from 400 lines to 100. I plan on giving this application some new features soon including video content, sounds, a countdown, and multiplayer.";
}

function myFunctionRecipe() {
  document.querySelector(
    "#description2"
  ).innerHTML = `Please check out my youtube video describing the project. <a href="https://youtu.be/7AHmtj81FbQ">Youtube</a>`;
}

function myFunctionCoffee() {
  document.querySelector(
    "#description3"
  ).innerHTML = `This was a group project in which we used Git Flow and created a full stack MERN App`;
}

function myFunctionRoutes() {
  document.querySelector(
    "#description4"
  ).innerHTML = `This was my final project at GA, I was able to merge React-Leaflet and React together to display Rock Climbing API, with mapquest API to display directions to the outdoor climb`;
}
