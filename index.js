const inputEl = document.querySelector("input");
const buttonEl = document.querySelector("button");
const timerEl = document.querySelector("span");

// Напишите реализацию createTimerAnimator
// который будет анимировать timerEl
const createTimerAnimator = () => {
  return (seconds) => {
    const interval = setInterval(() => {
      const hour = Math.floor(seconds / 3600);
      const minute = Math.floor(
        hour > 0 ? (seconds - hour * 3600) / 60 : seconds / 60
      );
      const second = seconds - (hour * 3600 + minute * 60);
      timerEl.innerHTML = `${hour}${"hh"},${minute}${"mm"},${second}${"ss"}`;
      seconds -= 1;
      if (seconds < 0) {
        timerEl.innerHTML = "Time is Over!";
        clearInterval(interval);
      }
    }, 1000);
  };
};

const animateTimer = createTimerAnimator();

inputEl.addEventListener("input", () => {
  // Очистите input так, чтобы в значении
  // оставались только числа
  inputEl.value = inputEl.value.replace(/\D/g, "");
});

buttonEl.addEventListener("click", () => {
  const seconds = Number(inputEl.value);
  animateTimer(seconds);
  inputEl.value = "";
});

