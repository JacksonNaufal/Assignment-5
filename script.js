let diameter = 0 
let number = 0
let quater = 0.25
let perimeter = 0

document.getElementById('button').addEventListener('click', button)


function  button () {
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
  'Radias of Circle Below!'
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
  
  
}


