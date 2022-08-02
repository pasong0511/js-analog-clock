const createTimeElement = (names) => {
  const itme = document.createElement("div")

  names.forEach(name => {
    itme.classList.add(name)
  });

  return itme
}

const AnalogClock = $container => {
  // do something!
  const clock = document.querySelector(".analog-clock")

  const handHour = createTimeElement(["hand", "hour"])
  const handMinute = createTimeElement(["hand", "minute"])
  const handsecond = createTimeElement(["hand", "second"])

  clock.appendChild(handHour)
  clock.appendChild(handMinute)
  clock.appendChild(handsecond)

  for (let i = 1; i <= 12; i++) {
    let time = createTimeElement(["time", `time${i}`])
    time.innerText = "|"
    clock.appendChild(time)
  }
};

export default AnalogClock;
