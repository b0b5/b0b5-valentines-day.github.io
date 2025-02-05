const noButton = document.getElementById('no-button')
const OFFSET = 30
noButton.addEventListener('click', ()=> alert('IS THAT A YES? 🥺🥺'));

document.addEventListener('mousemove', (e) => {
    const x = e.pageX
    const y = e.pageY
    const buttonBox = noButton.getBoundingClientRect()
    const horizontalDistanceFrom = distanceFromCenter(buttonBox.x, x, buttonBox.width)
    const verticalDistanceFrom = distanceFromCenter(buttonBox.y, y, buttonBox.height)
    const horizontalOffset = buttonBox.width / 2 + OFFSET
    const verticalOffset = buttonBox.height / 2 + OFFSET
    if (Math.abs(horizontalDistanceFrom) <= horizontalOffset && Math.abs(verticalDistanceFrom) <= verticalOffset) {
      setButtonPosition(
        buttonBox.x + horizontalOffset / horizontalDistanceFrom * 10,
        buttonBox.y + verticalOffset / verticalDistanceFrom * 10
      )
    }
  })

function distanceFromCenter(boxPosition, mousePosition, boxSize) {
    return boxPosition - mousePosition + boxSize / 2
}

function setButtonPosition(left, top) {
    noButton.style.position = "absolute";

    const windowBox = document.body.getBoundingClientRect()
    const buttonBox = noButton.getBoundingClientRect()
  
    if(distanceFromCenter(left, windowBox.left, buttonBox.width) < 0) {
      left = windowBox.right - buttonBox.width - OFFSET
    }
    if(distanceFromCenter(left, windowBox.right, buttonBox.width) > 0) {
      left = windowBox.left + OFFSET
    }
    if(distanceFromCenter(top, windowBox.top, buttonBox.height) < 0) {
      top = windowBox.bottom - buttonBox.height - OFFSET
    }
    if(distanceFromCenter(top, windowBox.bottom, buttonBox.height) > 0) {
      top = windowBox.top + OFFSET
    }
  
    noButton.style.left = `${left}px`
    noButton.style.top = `${top}px`
  }
  
  function distanceFromCenter(boxPosition, mousePosition, boxSize) {
    return boxPosition - mousePosition + boxSize / 2
  }