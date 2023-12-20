function clock() {
    let hour = document.getElementById("hour")
    let minutes = document.getElementById("minutes")
    let seconds = document.getElementById("seconds")
    let ampm = document.getElementById("ampm")

    setInterval(() => {
        let currentTime = new Date();
        let h = currentTime.getHours();
        let m = currentTime.getMinutes();
        let s = currentTime.getSeconds();

        hour.innerHTML = h;
        minutes.innerHTML = m;
        seconds.innerHTML = s;

        if (h > 12) {
            hour.innerHTML = h - 12;
        }

        if (h >= 12) {
            ampm.innerHTML = "PM"
        }
        else {
            ampm.innerHTML = "AM"
        }

        if (h < 10) {
            hour.innerHTML = "0" + h
        }

        if (m < 10) {
            minutes.innerHTML = "0" + m

        }

        if (s < 10) {
            seconds.innerHTML = "0" + s
        }

    }, 1000);

}
clock()