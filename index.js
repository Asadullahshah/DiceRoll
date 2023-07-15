function randNumberInInt(upperBound, lowerBound = 0) {
  var num = Math.random();
  num = lowerBound + Math.floor(num * (upperBound - lowerBound + 1));
  return num;
}

var upperBound = 6;
var lowerBound = 1;
var randonNumber1;
var image1;
var randonNumber2;
var image2;
var newName1 = "";
var newName2 = "";
var name1 = "Player 1";
var name2 = "Player 2";
var id;
var flag1 = true;
var flag2 = true;
var listenersAdded;

/* window.performance.navigation.type === 1 ensures that the script 
inside the bracket runs once the user refreshes or reloads the page. */

// if (window.performance.navigation.type === 1) {
//   // Your script here
//   var randonNumber1 = randNumberInInt(upperBound, lowerBound);
//   var image1 = "dice" + randonNumber1 + ".png";
//   var randonNumber2 = randNumberInInt(upperBound, lowerBound);
//   var image2 = "dice" + randonNumber2 + ".png";

//   if (randonNumber1 > randonNumber2) {
//     document.querySelector("h1").textContent = "🚩 Player 1 Wins!";
//   } else if (randonNumber2 > randonNumber1) {
//     document.querySelector("h1").textContent = "Player 2 Wins! 🚩";
//   } else {
//     document.querySelector("h1").textContent = "Draw!";
//   }

//   document.querySelector(".img1").setAttribute("src", "./images/" + image1);
//   document.querySelector(".img2").setAttribute("src", "./images/" + image2);
// }

document.querySelector(".btn").addEventListener("click", function () {
  buttonPress();
  document.removeEventListener("keydown", keyDownEvent1);
  document.removeEventListener("click", clickEvent1);
  name1 = newName1;
  document.removeEventListener("keydown", keyDownEvent2);
  document.removeEventListener("click", clickEvent2);
  name2 = newName2;
  diceRoll();
});

document.querySelector("#p1").addEventListener("click", clickEvent1);

document.querySelector("#p2").addEventListener("click", clickEvent2);

function buttonPress() {
  document.querySelector(".btn").classList.add("pressed");
  setTimeout(function () {
    document.querySelector(".btn").classList.remove("pressed");
  }, 100);
}

function diceRoll() {
  randonNumber1 = randNumberInInt(upperBound, lowerBound);
  image1 = "dice" + randonNumber1 + ".png";
  randonNumber2 = randNumberInInt(upperBound, lowerBound);
  image2 = "dice" + randonNumber2 + ".png";

  if (randonNumber1 > randonNumber2) {
    document.querySelector("h1").textContent = "🚩 " + name1 + " Wins!";
  } else if (randonNumber2 > randonNumber1) {
    document.querySelector("h1").textContent = name2 + " Wins! 🚩";
  } else {
    document.querySelector("h1").textContent = "Draw!!!";
  }

  document.querySelector(".img1").setAttribute("src", "./images/" + image1);
  document.querySelector(".img2").setAttribute("src", "./images/" + image2);
}

function clickEvent1() {
  newName1 = "";
  flag1 = true;
  removeEvents2();
  document.addEventListener("keydown", keyDownEvent1);
}

function clickEvent2() {
  newName2 = "";
  flag2 = true;
  removeEvents1();
  document.addEventListener("keydown", keyDownEvent2);
}

function keyDownEvent1(event1) {
  storeName1(event1);
}

function keyDownEvent2(event2) {
  storeName2(event2);
}

function storeName1(event, id = "#p1") {
  console.log(event.key);

  if (event.key === "Enter") {
    removeEvents1();
    // document.removeEventListener("keydown", keyDownEvent1);
    // document.removeEventListener("click", clickEvent1);
    flag1 = false;
    // name1 = newName1;
    newName1 = "";
  } else if (
    newName1.length < 15 &&
    event.keyCode >= 65 &&
    event.keyCode <= 90 &&
    flag1
  ) {
    newName1 += event.key;
    console.log(newName1);
    console.log(event);
    document.querySelector(id).textContent = newName1;
  } else if (event.key === "Backspace") {
    newName1 = newName1.slice(0, newName1.length - 1);
    document.querySelector(id).textContent = newName1;
  }
}

function storeName2(event, id = "#p2") {
  console.log(event.key);

  if (event.key === "Enter") {
    removeEvents2();
    // document.removeEventListener("keydown", keyDownEvent2);
    // document.removeEventListener("click", clickEvent2);
    flag2 = false;
    // name2 = newName2;
    newName2 = "";
  } else if (
    newName2.length < 15 &&
    event.keyCode >= 65 &&
    event.keyCode <= 90 &&
    flag2
  ) {
    newName2 += event.key;
    console.log(newName2);
    console.log(event);
    document.querySelector(id).textContent = newName2;
  } else if (event.key === "Backspace") {
    newName2 = newName2.slice(0, newName2.length - 1);
    document.querySelector(id).textContent = newName2;
  }
}

function removeEvents1() {
  document.removeEventListener("keydown", keyDownEvent1);
  document.removeEventListener("click", clickEvent1);
  name1 = newName1;
}

function removeEvents2() {
  document.removeEventListener("keydown", keyDownEvent2);
  document.removeEventListener("click", clickEvent2);
  name2 = newName2;
}