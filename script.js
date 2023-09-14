let hourHand = document.querySelector("#hour-hand");
let minuteHand = document.querySelector("#minute-hand");
let secondHand = document.querySelector("#second-hand");

let digitalHourPoint = document.getElementById("hours");
let digitalMinutesPoint = document.getElementById("minutes");
let digitalSecondesPoint = document.getElementById("secondes");
let ampm = document.getElementById("ampm");

setInterval(() => {
  let date = new Date();
  let hour = date.getHours() * 30;
  let minute = date.getMinutes() * 6;
  let second = date.getSeconds() * 6;

  hourHand.style.transform = `rotateZ(${hour + minute / 12}deg)`;
  minuteHand.style.transform = `rotateZ(${minute}deg)`;
  secondHand.style.transform = `rotateZ(${second}deg)`;

  let digitalHour = date.getHours();
  let digitalMinutes = date.getMinutes();
  let digitalSecondes = date.getSeconds();

  let amOrPm = digitalHour > 12 ? "PM" : "AM";

  if (digitalHour > 12) {
    digitalHour = digitalHour - 12;
  }

  digitalHour = digitalHour < 10 ? "0" + digitalHour : digitalHour;
  digitalMinutes = digitalMinutes < 10 ? "0" + digitalMinutes : digitalMinutes;
  digitalSecondes =
    digitalSecondes < 10 ? "0" + digitalSecondes : digitalSecondes;

  digitalHourPoint.innerText = digitalHour;
  digitalMinutesPoint.innerHTML = digitalMinutes;
  digitalSecondesPoint.innerHTML = digitalSecondes;
  ampm.innerHTML = amOrPm;
}, 1000);