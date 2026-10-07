function checkPassword() {

    const password = document.getElementById("password").value;

    const correctPassword = "11/5/2026";

    if (password === correctPassword) {

        document.getElementById("loginScreen")
            .classList.add("hidden");

        document.getElementById("mainScreen")
            .classList.remove("hidden");

    } else {

        document.getElementById("error").textContent =
            "الباسورد غلط يا جنجونتي 😂❤️";

    }
}


function showSurprise() {

    document.getElementById("surprise")
        .classList.remove("hidden");

}
