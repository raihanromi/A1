let quotes = [

  "The purpose of our lives is to be happy",
  "Life is what happens when you're busy making other plans",
  "Get busy living or get busy dying",
  "You only live once, but if you do it right, once is enough.",
  "Many of life’s failures are people who did not realize how close they were to success when they gave up.",
  "If you want to live a happy life, tie it to a goal, not to people or things.",
  "Never let the fear of striking out keep you from playing the game.",
  "In order to write about life first you must live it",

];


random_value=Math.floor(Math.random()*quotes.length);
console.log(random_value)
document.getElementById("quote").innerHTML=quotes[random_value];
document.getElementById("quotes").style.backgroundColor = "#aebab1";
document.getElementById("quote_text").style.color = "#fff";
document.getElementById("quote_text").style.fontFamily = "Amiri";
document.getElementById("quote_text").style.fontWeight = "serif"; 

function red() {
  console.log("Clicked Red");
  document.getElementById("quotes").style.backgroundColor = "red";
  document.getElementById("quote").style.color = "black";
  document.getElementById("quote").style.fontFamily = "Lobster";
  document.getElementById("quote").style.fontWeight = "500";
  random_value = Math.floor(Math.random() * quotes.length);
  document.getElementById("quote").innerHTML = quotes[random_value];
   document.getElementById("quotes").style.width="200px";
}

function blue() {
  console.log("Clicked Blue");
  document.getElementById("quotes").style.backgroundColor = "blue";
  document.getElementById("quote").style.color = "white";
  document.getElementById("quote").style.fontFamily = "Montserrat";
  document.getElementById("quote").style.fontWeight = "400";
  random_value = Math.floor(Math.random() * quotes.length);
  document.getElementById("quote").innerHTML = quotes[random_value];
   document.getElementById("quotes").style.width = "300px";
}


function yellow() {
  console.log("Clicked Blue");
  document.getElementById("quotes").style.backgroundColor = "yellow";
  document.getElementById("quote").style.color = "red";
  document.getElementById("quote").style.fontFamily = "Tiro Tamil";
  document.getElementById("quote").style.fontWeight = "600";
  random_value = Math.floor(Math.random() * quotes.length);
  document.getElementById("quote").innerHTML = quotes[random_value];
   document.getElementById("quotes").style.width = "500px";
}

function pink() {
  console.log("Clicked Blue");
  document.getElementById("quotes").style.backgroundColor = "pink";
  document.getElementById("quote").style.color = "yellow";
  document.getElementById("quote").style.fontFamily = "Ubuntu";
  document.getElementById("quote").style.fontWeight = "700";
  random_value = Math.floor(Math.random()* quotes.length);
  document.getElementById("quote").innerHTML = quotes[random_value];
   document.getElementById("quotes").style.width = "400px";
}
