const time = document.getElementById("time")
const btnStartStop = document.querySelector(".start-stop")
const btnReset = document.querySelector(".reset")
const btnSplit = document.querySelector(".split")
const lapContainer = document.querySelector(".lap-container")

let sec = 0
let min = 0
let hour = 0
let timing
let paused = true
let splitLap = 0
let laps = []

const runIt = () => {
  if (paused) {
    paused = false
    btnStartStop.textContent = "Stop"
    btnStartStop.style.backgroundColor = "#df7e83"
    btnReset.disabled = true
    tictac()
  } else if (!paused) {
    paused = true
    btnStartStop.textContent = "Start"
    btnStartStop.style.backgroundColor = "#87c2b1"
    btnReset.disabled = false
    clearTimeout(timing)
  }
}

const resetIt = () => {
  time.textContent = "00:00:00"
  paused = true
  hour = 0
  min = 0
  sec = 0
  splitLap = 0
  lapContainer.textContent = ""
  clearTimeout(timing)
}

const splitIt = () => {
  const currentLap = time.textContent
  const lap = document.createElement("li")
  lap.setAttribute("class", "lap-item")

  if (!laps.includes(currentLap)) {
    splitLap++
    lap.textContent = `${splitLap} : ${time.textContent}`
    lapContainer.append(lap)

    laps.push(currentLap)
  }
}

const tictac = () => {
  if (paused) return

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

  if (sec < 10) sec = "0" + sec
  if (min < 10) min = "0" + min
  if (hour < 10) hour = "0" + hour

  time.textContent = `${hour}:${min}:${sec}`
  timing = setTimeout(tictac, 100)
}

btnStartStop.addEventListener("click", runIt)
btnReset.addEventListener("click", resetIt)
btnSplit.addEventListener("click", splitIt)
