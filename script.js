let seconds = 2;
let minutes = 50;
let hours = 3;
let days = 8;
let flipped = [true, true, true, true];

let dayszero = false;
let hourszero = false;

let cardsec = document.getElementById("card-sec");
let cardmin = document.getElementById("card-min");
let cardhour = document.getElementById("card-hour");
let carddays = document.getElementById("card-days");

let sec1 = document.getElementById("sec-1");
let sec2 = document.getElementById("sec-2");
let min1 = document.getElementById("min-1");
let min2 = document.getElementById("min-2");
let hour1 = document.getElementById("hour-1");
let hour2 = document.getElementById("hour-2");
let day1 = document.getElementById("day-1");
let day2 = document.getElementById("day-2");

//seconds
setInterval(function () {
  secondsFunction();
}, 1000);
setTimeout(function () {
  minutesIn();
  minutesFunction();
}, 1000 * 61 - (60 * 1000 - seconds * 1000));

//////////////////////
function minutesIn() {
  setInterval(function () {
    minutesFunction();
  }, 60 * 1000);
}
setTimeout(function () {
  HoursIn();
  hoursFunction();
}, 3.6e6 - (60 * 1000 - seconds * 1000) - (3.6e6 - hours * 1000));

function hoursIn() {
  setInterval(function () {
    hoursFunction();
  }, 2.16e8);
}
sec1.innerHTML = seconds;
sec2.innerHTML = seconds;
min1.innerHTML = minutes;
min2.innerHTML = minutes;
hour1.innerHTML = hours;
hour2.innerHTML = hours;
day1.innerHTML = days;
day2.innerHTML = days;

function secondsFunction() {
  // cardsec.classList.re
  cardsec.classList.toggle("trans");

  if (seconds == 0) {
    seconds = 60;
    // minutesFunction();
  }
  if (flipped[0] === true) {
    seconds -= 1;
    seconds.toString().length == 2
      ? (sec2.innerHTML = seconds)
      : (sec2.innerHTML = 0 + `${seconds}`);
    flipped[0] = false;
  } else {
    seconds -= 1;
    seconds.toString().length == 2
      ? (sec1.innerHTML = seconds)
      : (sec1.innerHTML = 0 + `${seconds}`);
    flipped[0] = true;
  }
}

function minutesFunction() {
  cardmin.classList.toggle("trans");

  if (minutes == 0) {
    minutes = 60;
    hoursFunction();
  }
  if (flipped[1] === true) {
    minutes -= 1;
    minutes.toString().length == 2
      ? (min2.innerHTML = minutes)
      : (min2.innerHTML = 0 + `${minutes}`);
    flipped[1] = false;
  } else {
    minutes -= 1;
    minutes.toString().length == 2
      ? (min1.innerHTML = minutes)
      : (min1.innerHTML = 0 + `${minutes}`);
    flipped[1] = true;
  }
}

function hoursFunction() {
  cardhour.classList.toggle("trans");
  if (hours == 0) {
    hours = 24;
    daysFunction();
  } else {
    if (flipped[2] === true) {
      hours -= 1;
      hour2.innerHTML = hours;
      flipped[2] = false;
    } else {
      hours -= 1;
      hour1.innerHTML = hours;
      flipped[2] = true;
    }
  }
}

function daysFunction() {
  carddays.classList.toggle("trans");
  if (flipped[3] === true) {
    days -= 1;
    day2.innerHTML = days;
    flipped[3] = false;
  } else {
    days -= 1;
    day1.innerHTML = days;
    flipped[3] = true;
  }
}
