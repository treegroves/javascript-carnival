// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

//outside function//
//create id's for each unicorn and attach an onclick event for each
//create a function to perform when each unicorn is clicked
//create a variable name counter and assign an array of 3 numbers, to act as count indexes for each unicorn

// inside function//
//create a variable to represent unicorns targeted as events
//each time a unicorn is clicked on, change the image.
//create a variable of id and equate it to unicorn id index 3, which selects the last character in the in string(which is the number)
//plug the index number being referred to into a string representing the unicorn image source
//each image file is named unicorn-<number>, replace with counter id
//each time the unicorn is clicked the id selects which unicorn id to change, and counter logs each click to appropriate number in array

document.getElementById('uni0').onclick = unicornClicked
document.getElementById('uni1').onclick = unicornClicked
document.getElementById('uni2').onclick = unicornClicked

let counter = [0, 0, 0]

function unicornClicked(e) {
  let unicorn = e.target
  let id = unicorn.id[3]

  counter[id]++

  if (counter[id] > 3) {
    counter[id] = 0
    alert(`Unicorn number ${id}'s balloon is full!`)
  }

  unicorn.src = './images/unicorn-' + counter[id] + '.png'
}
