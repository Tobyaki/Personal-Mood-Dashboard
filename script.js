//Calling Elements
let body = document.getElementsByTagName("body")[0];
let header = document.getElementsByTagName("header")[0];
let main = document.getElementsByTagName("main")[0];
let motivation = document.getElementsByClassName("motivation")[0];
let greetingBox = document.getElementsByClassName("greetingBox")[0];
let toggle = document.getElementById("toggleBtn");
let box = document.getElementsByClassName("moodBox")[0];
let moodButtons = document.getElementsByClassName("buttons")[0];
let dashboard = document.getElementById("dashboard");
let secretBtn = document.getElementById("secretBtn");
let secretText = document.getElementById("secret");
let grow = document.getElementById("grow");
let shrink = document.getElementById("shrink");
let input = document.getElementById("nameInput");
let form = document.getElementsByTagName("form")[0];
let title = document.getElementById("title");

//Styling Elements
//body
body.style.fontFamily = "Roboto";
body.style.backgroundColor = "white";

//header
header.style.display = "flex";
header.style.flexDirection = "row";
header.style.justifyContent = "space-between";
toggle.style.borderRadius = "15px";
toggle.style.height = "30px";
toggle.style.margin = "25px";
dashboard.style.marginLeft = "25px";

//main
main.style.display = "flex";
main.style.flexDirection = "column";
main.style.alignItems = "center";

//greeting area
greetingBox.style.display = "flex";
greetingBox.style.flexDirection = "column";
greetingBox.style.alignItems = "center";
greeting.style.color = "brown";
greetingBox.style.margin = "20px";

//Mood Box area
box.style.height = "200px";
box.style.width = "200px";
box.style.border = "2px solid orange";
box.style.borderRadius = "16px";
moodButtons.style.marginTop = "12px";
moodButtons.style.marginBottom = "20px";

//motivation-container
motivation.style.display = "flex";
motivation.style.flexDirection = "column";
motivation.style.alignItems = "center";
motivation.style.margin = "20px";
secretText.style.display = "none";

//Day/Night
toggle.addEventListener("click", () => {
  if (body.style.backgroundColor === "white") {
    body.style.backgroundColor = "black";
    dashboard.style.color = "white";
    secretText.style.color = "white";
    title.style.color = "white";
  } else {
    body.style.backgroundColor = "white";
    dashboard.style.color = "black";
    secretText.style.color = "black";
    title.style.color = "black";
  }
});

//Greeting Event
input.addEventListener("input", () => {
  let name = input.value;

  if (name === "") {
    greeting.innerText = "Hello, friend!";
    greeting.style.fontWeight = "normal";
    greeting.style.color = "brown";
  } else {
    greeting.innerText = `Hello, ${name}!`;
    greeting.style.color = "green";
    greeting.style.fontWeight = "bold";
  }
});

//Grow or Shrink box
grow.addEventListener("click", () => {
  box.style.height = "250px";
  box.style.width = "250px";
});

shrink.addEventListener("click", () => {
  box.style.height = "150px";
  box.style.width = "150px";
});

//Hide/Show Text
secretBtn.addEventListener("click", () => {
  if (secretText.style.display === "none") {
    secretText.style.display = "block";
  } else {
    secretText.style.display = "none";
  }
});
