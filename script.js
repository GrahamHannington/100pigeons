const interval = 5
const transition = 0.5
var currentImageIndex = 0
var image
var intervalTimer
var transitionTimer
const images = [
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

function slideShow () {
  image = document.createElement('img')
  image.id = 'image'
  image.classList.add('show')
  image.src = getImageFilePath()
  document.body.appendChild(image)
  intervalTimer = setInterval(nextImage, interval * 1000)
}

function getImageFilePath() {
  return 'images/' + images[currentImageIndex] + '.jpg'
}

function nextImage () {
  clearTimeout(transitionTimer)
  image.classList.add('hide')
  image.classList.remove('show')
  currentImageIndex++
  // Continuously loop
  if (currentImageIndex == images.length) {
    currentImageIndex = 0
  }
  transitionTimer = setTimeout(() => {
      image.classList.add('show')
      image.classList.remove('hide')
      image.src = getImageFilePath()
    },
    1005) // A little longer than the 1s fade-out
  
}

window.addEventListener('load', (event) => {slideShow()})