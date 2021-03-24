let diameter = 0
let number = 0
const quater = 0.25

document.getElementById('button').addEventListener('click', button)
document.getElementById('button2').addEventListener('click', button2)

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
  document.getElementById('final').innerHTML =
  'Thank you for Using my Area and Circumfrence Calculator!' 
  document.getElementById('final').style.color ='green'
  document.getElementById('button2').innerHTML = 'Click to Erase!'
  document.getElementById('button2').style.display = 'block'
    document.getElementById('paragraph').style.display ='block'
   document.getElementById('para').style.display ='block'
   document.getElementById('para1').style.display ='block'
   document.getElementById('paratwo').style.display ='block'
   document.getElementById('para3').style.display ='block'
   document.getElementById('parathree').style.display ='block'
   document.getElementById('para4').style.display ='block'
   document.getElementById('parafour').style.display ='block'
   document.getElementById('final').style.display ='block'
   document.getElementById('button2').style.display ='block'
}

 function button2 () {
   document.getElementById('paragraph').style.display ='none'
   document.getElementById('para').style.display ='none'
   document.getElementById('para1').style.display ='none'
   document.getElementById('paratwo').style.display ='none'
   document.getElementById('para3').style.display ='none'
   document.getElementById('parathree').style.display ='none'
   document.getElementById('para4').style.display ='none'
   document.getElementById('parafour').style.display = 'none'
   document.getElementById('final').style.display = 'none'
   document.getElementById('button2').style.display = 'none'

 }
