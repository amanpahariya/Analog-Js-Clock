const date = new Date();

const calender = () => {
    const monthDays = document.querySelector('.days');
    const lastDate = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
// previous month
    const preMonthLastDay = new Date(date.getFullYear(), date.getMonth(), 0);
    const preMonthLastDayIndex = preMonthLastDay.getDay() + 1;
    let preMonthLastDate = preMonthLastDay.getDate();

// current month
    const lastDayOfMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    const nextDays = 7 - lastDayOfMonth.getDay() - 1;


    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ]
    document.querySelector(".date h1").innerHTML = months[date.getMonth()];
    document.querySelector(".date p").innerHTML = new Date().toDateString();

    let days = "";

// prev month days
    for (let x = 0; x < preMonthLastDayIndex; x++) {
        days = `<div class="pre-date">${preMonthLastDate--}</div>` + days;
        monthDays.innerHTML = days;
    }

// current month days
    for (let i = 1; i <= lastDate; i++) {
        days += new Date().getDate() == i && new Date().getMonth() == date.getMonth() ? `<div class="today">${i}</div>` : `<div>${i}</div>`
        monthDays.innerHTML = days;
    }

// next month days
    for (let j = 1; j <= nextDays; j++) {
        days += `<div class="next-date">${j}</div>`;
        monthDays.innerHTML = days;
    }
}

document.querySelector("#prev").addEventListener('click', () => {
    date.setMonth(date.getMonth() - 1);
    calender();
});

document.querySelector("#next").addEventListener('click', () => {
    date.setMonth(date.getMonth() + 1);
    calender();
});

calender();
