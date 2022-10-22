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

random_value = Math.floor(Math.random() * quotes.length);
console.log(random_value);
document.getElementById("quote").innerHTML = quotes[random_value];
document.getElementById("quotes").style.backgroundColor = "pink";
document.getElementById("quotes").style.border= "5px";
document.getElementById("quotes").style.borderColor= "black";
document.getElementById("quote").style.color = "#fff";
document.getElementById("quote").style.fontFamily = "Amiri";
document.getElementById("quote").style.fontWeight = "serif";

function redColor() {
  console.log("Clicked Red");
  document.getElementById("quotes").style.backgroundColor = "red";
  document.getElementById("quote").style.color = "black";
  document.getElementById("quote").style.fontFamily = "Lobster";
  document.getElementById("quote").style.fontWeight = "500";
  random_value = Math.floor(Math.random() * quotes.length);
  document.getElementById("quote").innerHTML = quotes[random_value];
  document.getElementById("quotes").style.width = "200px";
}

function blueColor() {
  console.log("Clicked Blue");
  document.getElementById("quotes").style.backgroundColor = "blue";
  document.getElementById("quote").style.color = "white";
  document.getElementById("quote").style.fontFamily = "Montserrat";
  document.getElementById("quote").style.fontWeight = "400";
  random_value = Math.floor(Math.random() * quotes.length);
  document.getElementById("quote").innerHTML = quotes[random_value];
  document.getElementById("quotes").style.width = "300px";
}

function yellowColor() {
  console.log("Clicked Blue");
  document.getElementById("quotes").style.backgroundColor = "yellow";
  document.getElementById("quote").style.color = "red";
  document.getElementById("quote").style.fontFamily = "Tiro Tamil";
  document.getElementById("quote").style.fontWeight = "600";
  random_value = Math.floor(Math.random() * quotes.length);
  document.getElementById("quote").innerHTML = quotes[random_value];
  document.getElementById("quotes").style.width = "500px";
}

function pinkColor() {
  console.log("Clicked Blue");
  document.getElementById("quotes").style.backgroundColor = "pink";
  document.getElementById("quote").style.color = "yellow";
  document.getElementById("quote").style.fontFamily = "Ubuntu";
  document.getElementById("quote").style.fontWeight = "700";
  random_value = Math.floor(Math.random() * quotes.length);
  document.getElementById("quote").innerHTML = quotes[random_value];
  document.getElementById("quotes").style.width = "400px";
}

function converter(){
    var input = document.getElementById("converter_input").value;
    var unit = document.getElementById("converter_unit").value;
     console.log(unit);

    if (unit == "lbtokg") {
      var output = input * 0.45359;
      document.getElementById("converter_result").innerHTML = output + " KG";
    } else {
      var output = input * 2.20462;
      document.getElementById("converter_result").innerHTML = output + " LB";
    }
}