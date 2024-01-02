let sec = 0
let min = 0
let hour = 0

const time = document.getElementById("time")

const chrono = window.setInterval(tic, 1000)

function tic() {
  sec = parseInt(sec)
  min = parseInt(min)
  hour = parseInt(hour)

  sec++

  if (sec === 60) {
    sec = 0
    min++
  }
  if (min === 60) {
    hour++
    min = 0
  }

  if (sec < 10) {
    sec = "0" + sec
  }
  if (min < 10) {
    min = "0" + min
  }
  if (hour < 10) {
    hour = "0" + hour
  }

  time.innerHTML = `${hour}:${min}:${sec}`
}
