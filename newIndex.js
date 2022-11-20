const hour = document.getElementById("hour");
const minute = document.getElementById("minute");
const second = document.getElementById("second");

const timer = document.getElementById("timer");

let interval = null;
let total;

totalValue = ()=>{
    total = Number(hour.value)*3600 + Number(minute.value)*60 + Number(second.value);
}

Timer = ()=>{
    totalValue();
    total--;

    if(total >= 0) {
        let hr = Math.floor(total/3600);
        let mt = Math.floor((total/60) - (hr*60));
        let sc = total - ((hr*3600) + (mt*60));

        hour.value = hr;
        minute.value = mt;
        second.value = sc;

    } else {
        timer.innerText = "Time is Over!";
    }
}

//Кнопка Start
document.getElementById("start").addEventListener("click", ()=>{
    clearInterval(interval);
    interval = setInterval(Timer, 1000);

    timer.innerText = "Timer Started";
});

//Кнопка Reset
document.getElementById("reset").addEventListener("click", ()=>{
    clearInterval(interval);

    hour.value = 0;
    minute.value = 0;
    second.value = 0;

    timer.innerText = "Timer has been reseted!";
})

//кнопка Stop
document.getElementById("stop").addEventListener("click", () => {
    clearInterval(interval);

    timer.innerText = "Timer Stoped!"
})

//В инпуте только цыфры
const chageHandler = (e) => {
    const value = e.value;
    e.value = value.replace(/\D/g, "")
};
