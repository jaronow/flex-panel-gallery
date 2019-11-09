const panels = document.querySelectorAll(".panel")
panels.forEach(panel => panel.addEventListener("click", openPanel))

function openPanel(event) {
  console.log(event)
  const panel = document.querySelector(`.panel[class="${event.srcElement.className}"]`)
  console.log(panel)
  panel.classList.add("open")
}
