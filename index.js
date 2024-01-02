let sec = 0

let time = document.getElementById("time")

let chrono = window.setInterval(tic, 1000)

function tic() {
  sec++
  time.innerHTML = sec
  if (sec === 60) {
    sec = 0
  }
}
