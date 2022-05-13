// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //
console.log('Dress The Clown!')
//create id for head, body and shoes
//declare variables for each
//get elements by id
let head = document.getElementById('head')
let body = document.getElementById('body')
let shoes = document.getElementById('feet')

//create index counters to keep track increase/decrease numbers to map on to image src paths
let clothingIndex = 0
let headIndex = 0
let bodyIndex = 0
let feetIndex = 0

//create a function to cycle images in a specific element horizontally
//use indexes for each body part image
//check if each index is greater 5 or less than 0 and reset them to 0
function changeClownClothes() {
  if (headIndex > 5) {
    headIndex = 0
  }
  if (headIndex < 0) {
    headIndex = 5
  }
  if (bodyIndex > 5) {
    bodyIndex = 0
  }
  if (bodyIndex < 0) {
    bodyIndex = 5
  }
  if (feetIndex > 5) {
    feetIndex = 0
  }
  if (feetIndex < 0) {
    feetIndex = 5
  }
  if (clothingIndex > 2) {
    clothingIndex = 0
  }
  if (clothingIndex < 0) {
    clothingIndex = 2
  }
  head.src = './images/head' + headIndex + '.png'
  body.src = './images/body' + bodyIndex + '.png'
  feet.src = './images/shoes' + feetIndex + '.png'
}

//create a function attached to an index that allows user to swap between head, body, feet

function changeClothingIndex() {
  if (clothingIndex == 0) {
    headIndex++
  }
  if (clothingIndex == 1) {
    bodyIndex++
  }
  if (clothingIndex == 2) {
    feetIndex++
  }
}
//create a way to detect arrow keys being pressed
//each detection is an event
//each arrow key has a 'key' represented as a string
//e.key 'string'
//if a specific key is pressed, change appropriate index
//create a switch statement to check for each key and conditions.
document.addEventListener('keydown', (e) => {
  switch (e.key) {
    case 'ArrowRight':
      changeClothingIndex()
      changeClownClothes()
      break
    case 'ArrowLeft':
      changeClothingIndex()
      changeClownClothes()
      console.log(body.src)
      break
    case 'ArrowDown':
      clothingIndex++
      changeClownClothes()
      changeClothingIndex()
      console.log(clothingIndex)
      break
    case 'ArrowUp':
      clothingIndex--
      changeClownClothes()
      changeClothingIndex()
      console.log(clothingIndex)
      break
  }
})
