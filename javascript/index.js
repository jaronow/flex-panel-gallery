const panels = document.querySelectorAll('.panel')
panels.forEach(panel => panel.addEventListener('click', toggleOpen))
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive))

function toggleOpen() {
  this.classList.toggle('open')
}

function toggleActive(event) {
  if (event.propertyName.includes('flex')) {
    this.classList.toggle('open-active')
  }
}

const inputs = document.querySelectorAll('.controls input')
inputs.forEach(input => input.addEventListener('change', updateStyle));

function updateStyle() {
  document.documentElement.style.setProperty(`--${this.name}`, this.value);
}
