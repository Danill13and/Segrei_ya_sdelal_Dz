function updateTime() {
    let hours = document.querySelector(".hours");// Здесь должен быть элемент hours 
    let minutes = document.querySelector(".minutes");// Здесь должен быть элемент minutes 
    let seconds = document.querySelector(".seconds");// Здесь должен быть элемент seconds

    const clock = new Date();

    hours.innerHTML = clock.getHours(); // getHours()
    minutes.innerHTML = clock.getMinutes();// getMinutes()
    seconds.innerHTML = clock.getSeconds();// getSeconds()
}
setInterval(updateTime, 1000);// Здесь должен быть задан интервал
