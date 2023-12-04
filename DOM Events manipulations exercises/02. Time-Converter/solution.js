function attachEventsListeners() {
  let days = document.querySelector("#days");
  let daysBtn = document.querySelectorAll("#daysBtn")[0];

  let hours = document.querySelector("#hours");
  let hoursBtn = document.querySelectorAll("#hoursBtn")[0];

  let minutes = document.querySelector("#minutes");
  let minutesBtn = document.querySelectorAll("#minutesBtn")[0];

  let seconds = document.querySelector("#seconds");
  let secondsBtn = document.querySelectorAll("#secondsBtn")[0];

  daysBtn.addEventListener("click", daysConvert);
  hoursBtn.addEventListener("click", hoursConvert);
  minutesBtn.addEventListener("click", minsConvert);
  secondsBtn.addEventListener("click", secondsConvert);

  function daysConvert() {
    hours.value = days.value * 24;
    minutes.value = hours.value * 60;
    seconds.value = minutes.value * 60;
  }

  function hoursConvert() {
    days.value = hours.value / 24;
    minutes.value = hours.value * 60;
    seconds.value = minutes.value * 60;
  }

  function minsConvert() {
    hours.value = minutes.value / 60;
    days.value = hours.value / 24;
    seconds.value = minutes.value * 60;
  }

  function secondsConvert() {
    minutes.value = Number(seconds.value) / 60;
    hours.value = Number(seconds.value) / 60;
    days.value = Number(seconds.value) / 24;
  }
}
