let diameter = 0
let number = 0
const quater = 0.25
// These are the variables that I used to determine the value of what my answer is, either multiplying by or dividing it by. I also allowed it to know that diameter and number are equivalent to 0, determining that they are a number, not a word, meaning that in later segments of the code, whatever diameter is in the input box, determine what the answer is, and whatever is calculated after using the diameter that was entered, it will determine the number, which is the final answer.

document.getElementById('button').addEventListener('click', button)
document.getElementById('button2').addEventListener('click', button2)
// These are the event listeners for my button, so it knows once I click a button, it transfers the data from my HTML, for a button, or button2, to the Javascript functions.

function button () {
  diameter = document.getElementById('box').value
  diameter = parseInt(diameter)
  number = quater * Math.PI * diameter * diameter
  document.getElementById('paragraph').innerHTML =
  'Area of Circle Below!'
  document.getElementById('para').innerHTML =
  number
  number = diameter * Math.PI
  diameter = parseInt(diameter)
  number = Math.PI * diameter
  document.getElementById('para1').innerHTML =
  'Circumference of Circle Below!'
  document.getElementById('paratwo').innerHTML =
  number
  diameter = parseInt(diameter)
  number = diameter / 2
  document.getElementById('para3').innerHTML =
  'Radius of Circle Below!'
  document.getElementById('parathree').innerHTML =
  number
  diameter = parseInt(diameter)
  number = diameter
  document.getElementById('para4').innerHTML =
  'Diameter of Circle Below!'
  document.getElementById('parafour').innerHTML =
  number
  document.getElementById('picture').src =
  'Diameter circle.gif'
  document.getElementById('final').innerHTML =
  'Thank you for Using my Area and Circumference Calculator!'
  // Those are all the calculations and text that pop up after you enter a number and click the calculate button. As you can see, it takes the numbers that were written into the input box, and if its a number that is compatible with the calculator(cant be a negative number or letter), it will run through all the getElementById's and do as they say whether its a calculation, or writing "thank you for using my calculator", or writing the answers, etc.
  document.getElementById('final').style.color = 'green'
  document.getElementById('button2').innerHTML = 'Click to Erase!'
  document.getElementById('button2').style.display = 'block'
  document.getElementById('paragraph').style.display = 'block'
  document.getElementById('para').style.display = 'block'
  document.getElementById('para1').style.display = 'block'
  document.getElementById('paratwo').style.display = 'block'
  document.getElementById('para3').style.display = 'block'
  document.getElementById('parathree').style.display = 'block'
  document.getElementById('para4').style.display = 'block'
  document.getElementById('parafour').style.display = 'block'
  document.getElementById('final').style.display = 'block'
  document.getElementById('button2').style.display = 'block'
  document.getElementById('math').style.display = 'none'
  //  When the Click to erase button is clicked, it will lead to my function below, which is telling this code that when the button is clicked and you re-enter a new number, it will block the button from saying it can not pop up again because if I put none, it would tell the button to leave the program invincible, after the Click to Erase button is pressed.
}

function button2 () {
  document.getElementById('paragraph').style.display = 'none'
  document.getElementById('para').style.display = 'none'
  document.getElementById('para1').style.display = 'none'
  document.getElementById('paratwo').style.display = 'none'
  document.getElementById('para3').style.display = 'none'
  document.getElementById('parathree').style.display = 'none'
  document.getElementById('para4').style.display = 'none'
  document.getElementById('parafour').style.display = 'none'
  document.getElementById('final').style.display = 'none'
  document.getElementById('button2').style.display = 'none'
  document.getElementById('math').style.display = 'block'
}
// This is what happens when you press the Click to Erase button. It erases what I wrote, saying that there is none, allowing it to only display the Math is a good image and nothing else from the previous calculation that occurred with the Area and Circumference of a Circle Calculator.