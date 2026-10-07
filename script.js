// الباسورد

function checkPassword() {

    const password =
        document.getElementById("password").value;

    const correctPassword =
        "11/5/2026";

    if (password === correctPassword) {

        document
            .getElementById("loginScreen")
            .classList
            .add("hidden");

        document
            .getElementById("mainScreen")
            .classList
            .remove("hidden");

    } else {

        document
            .getElementById("error")
            .textContent =
            "الباسورد غلط يا جنجونتي 😂❤️";
    }
}


// تاريخ الميلاد

const birthDate =
    new Date("2010-10-10T00:00:00");


function updateAge() {

    const now = new Date();

    let years =
        now.getFullYear() -
        birthDate.getFullYear();

    let months =
        now.getMonth() -
        birthDate.getMonth();

    let days =
        now.getDate() -
        birthDate.getDate();

    let hours =
        now.getHours() -
        birthDate.getHours();

    let minutes =
        now.getMinutes() -
        birthDate.getMinutes();

    let seconds =
        now.getSeconds() -
        birthDate.getSeconds();


    if (seconds < 0) {
        seconds += 60;
        minutes--;
    }

    if (minutes < 0) {
        minutes += 60;
        hours--;
    }

    if (hours < 0) {
        hours += 24;
        days--;
    }

    if (days < 0) {

        const previousMonth =
            new Date(
                now.getFullYear(),
                now.getMonth(),
                0
            );

        days +=
            previousMonth.getDate();

        months--;
    }

    if (months < 0) {
        months += 12;
        years--;
    }


    document.getElementById("years")
        .textContent = years;

    document.getElementById("months")
        .textContent = months;

    document.getElementById("days")
        .textContent = days;

    document.getElementById("hours")
        .textContent = hours;

    document.getElementById("minutes")
        .textContent = minutes;

    document.getElementById("seconds")
        .textContent = seconds;
}


updateAge();

setInterval(
    updateAge,
    1000
);


// زر المفاجأة

function showSurprise() {

    document
        .getElementById("surprise")
        .classList
        .remove("hidden");
}
