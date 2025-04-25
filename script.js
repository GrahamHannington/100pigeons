const interval = 4
const transition = 1
const delay = 0.1
const secondsToMilliseconds = 1000
var currentImageIndex = 0
var images = []
var intervalTimer
var transitionTimer
const imageNames = [
  "001-002",
  "003",
  "004",
  "005",
  "006",
  "007",
  "008-009",
  "010",
  "011-014",
  "015",
  "016",
  "017",
  "021",
  "022-025",
  "026-028",
  "030-033",
  "034",
  "035-037",
  "038-039",
  "040",
  "041",
  "042",
  "043",
  "044-045",
  "046",
  "047",
  "048-050",
  "052",
  "053-054",
  "055-058",
  "059",
  "060-063",
  "064",
  "065",
  "066-068",
  "069",
  "071",
  "072",
  "073-078",
  "079-081",
  "082",
  "083",
  "084-086",
  "089",
  "090",
  "091",
  "092-093",
  "094-097",
  "098",
  "099",
  "100"]

function getImageFilePath() {
  return 'images/' + imageNames[currentImageIndex] + '.jpg'
}

function setNextImageIndex() {
  currentImageIndex++
  // Continuously loop
  if (currentImageIndex == imageNames.length) {
    currentImageIndex = 0
  }
}

function hidePreviousImage() {
  let previousImageIndex = currentImageIndex - 1
  if (previousImageIndex == -1) {
    previousImageIndex = images.length - 1
  }
  images[previousImageIndex].classList.add('hide')
  images[previousImageIndex].classList.remove('show')
  setTimeout((previousImageIndex) => {  
    images[previousImageIndex].classList.add('hidden')
    images[previousImageIndex].classList.remove('hide')
  }, transition * secondsToMilliseconds, previousImageIndex)
}

function showCurrentImage () {
  // Hide the previous image, if there is one
  if (images.length > 1) {
    // If the length of the images array is 1, then there is no previous image to hide
    hidePreviousImage()
  }
  // Wait for previous image to hide itself
  setTimeout(() => {
    // Show the current image
    images[currentImageIndex].classList.add('hide')
    images[currentImageIndex].classList.remove('hidden')
    images[currentImageIndex].classList.add('show')
    images[currentImageIndex].classList.remove('hide')
    // Wait for a while, then show the next image
    setTimeout(() => {
      setNextImageIndex()
      showImage()
    }, interval * secondsToMilliseconds)
  }, (transition + delay) * secondsToMilliseconds, currentImageIndex)
}

function showImage () {
  if (images.length < (currentImageIndex + 1)) {
    // image element not yet created; create it now
    let image = document.createElement('img')
    image.dataset.index = currentImageIndex
    image.classList.add('hidden')
    image.src = getImageFilePath()
    image.onload = (event) => {
      showCurrentImage()
    }
    images[currentImageIndex] = image
    document.body.appendChild(images[currentImageIndex])
  } else {
    // image element already created; just show it
    showCurrentImage()
  }
}

window.addEventListener('load', (event) => {showImage()})