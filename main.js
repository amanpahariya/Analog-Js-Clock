setInterval(setClock, 1000);

const hourHand = document.querySelector("[data-hour-hand]");
const minuteHand = document.querySelector("[data-minute-hand]");
const secondHand = document.querySelector("[data-second-hand]");


function setClock() {
    const now = new Date();

    const secondRatio = now.getSeconds() / 60;
    const minuteRatio = (secondRatio + now.getMinutes()) / 60;
    const hourRatio = (minuteRatio + now.getHours()) / 12;

    setPosition(secondHand, secondRatio)
    setPosition(minuteHand, minuteRatio)
    setPosition(hourHand, hourRatio)

}

function setPosition(element, value) {
    element.style.setProperty('--rotation', value * 360);
}

setClock();

const modal = document.getElementById("myModal");

document.querySelector("#alarm").addEventListener('click', () => {
    modal.classList.toggle("show-modal");
});
document.querySelector('#closeButton').addEventListener('click', () => {
    modal.classList.remove("show-modal");
});

const dt = new Date();
let incHour = dt.getHours() + 1;


document.querySelector(".alarm-hours span").innerHTML = incHour;
document.querySelector("#inc-hour").addEventListener("click", (event) => {
    incHour++;
    if (incHour < 24 && incHour > dt.getHours()) {
        document.querySelector(".alarm-hours span").innerHTML = incHour;
    }
});

document.querySelector("#dsc-hour").addEventListener("click", (event) => {
    incHour--;
    if (incHour > dt.getHours() && incHour < 24) {
        document.querySelector(".alarm-hours span").innerHTML = incHour;
    }
});


let incMin = dt.getMinutes();
document.querySelector(".alarm-minute span").innerHTML = incMin;


document.querySelector("#incMin").addEventListener("click", (event) => {
    incMin++;
    if (incMin < 60) {
        document.querySelector(".alarm-minute span").innerHTML = incMin;
    }
});

document.querySelector("#dscMin").addEventListener("click", (event) => {
    incMin--;
    if (incMin > 0 && incMin < 60) {
        document.querySelector(".alarm-minute span").innerHTML = incMin;
    }
});

document.querySelector("#set-alarm").addEventListener("click", () => {
    const hour = document.querySelector(".alarm-hours span").innerHTML;

    const min = document.querySelector(".alarm-minute span").innerHTML;
    const alTime = new Date();
    alTime.setHours(hour);
    alTime.setMinutes(min);
    window.localStorage.setItem("alarm", alTime);
    upAla()
});

setInterval(() => {
    if (window.localStorage.getItem("alarm") === String(new Date())) {
        alarmAudio();
    }
}, 1000);
let audio = "https://media.hungama.com/c/4/644/e9a/50366413/50366413_128.mp3?i5i3EiZLg_Ejv_Qy-MPuNRUPVMSWxZfpuB7Rdp_GTrCJdrg0Bv6zLJJ53qlkBZEefTdrN1FPhIQWE2kqHrOcL4inKqh2jfl37r0ZHYjeDAes90tM56rmOV92OoKQixZcZRyDGw";
let ad;

async function ada() {
    ad = await new Audio(audio);
}

async function alarmAudio() {
    wake();
    await ada();
    await ad();
}

const wakeUpModal = document.getElementById("wakeUpModal");

function wake() {
    wakeUpModal.classList.toggle("show-modal");
}

document.querySelector("#setIns").addEventListener('click', (e) => {
    if (e.target.id === "stop") {
        ad.pause();
        wakeUpModal.classList.remove("show-modal");
    } else {
        const newAlr = new Date(window.localStorage.getItem("alarm"));
        newAlr.setMinutes(newAlr.getMinutes() + 10)
        window.localStorage.setItem("alarm", newAlr);
        wakeUpModal.classList.remove("show-modal");
    }
});

function upAla() {
    deleteButton()
    if (window.localStorage.getItem("alarm") !== null) {
        document.querySelector("#upcomingAla").innerHTML = new Date(window.localStorage.getItem("alarm")).toDateString();
    } else {
        document.querySelector("#upcomingAla").innerHTML = "No Upcoming Alarm"
    }
}

upAla();


document.querySelector("#removeAla").addEventListener("click", () => {
    window.localStorage.removeItem("alarm");
    upAla();
    deleteButton()
})

function deleteButton() {
    if (window.localStorage.getItem("alarm") != null) {
        document.querySelector("#removeAla").style.display = "block";
    } else {
        document.querySelector("#removeAla").style.display = "none";
    }
}