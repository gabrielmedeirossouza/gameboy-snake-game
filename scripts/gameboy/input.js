const leftController = { top: false, right: false, down: false, left: false }
const rightController = { left: false, right: false }
const middleController = { select: false, start: false }

window.addEventListener('keydown', (e) => {
  switch (e.key) {
    case 'ArrowUp': leftController.top = true
      break
    case 'ArrowRight': leftController.right = true
      break
    case 'ArrowDown': leftController.down = true
      break
    case 'ArrowLeft': leftController.left = true
      break
  }
})
