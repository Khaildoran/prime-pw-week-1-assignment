
console.log('Hello World!')



function updateImage(){

  if (document.getElementById("coffee").alt === 'paradise') {
      document.getElementById("coffee").src = 'smith.png';
      document.getElementById('coffee').alt = 'smith';
} else if (document.getElementById("coffee").alt === 'smith') {

  document.getElementById("coffee").src = 'dogwood.png';
  document.getElementById('coffee').alt = 'dogwood'
} else if (document.getElementById("coffee").alt === 'dogwood') {

  document.getElementById("coffee").src = 'spyhouse.png';
  document.getElementById('coffee').alt = 'spyhouse';
} else if (document.getElementById('coffee').alt === 'spyhouse') {
  document.getElementById("coffee").src = 'paradiseroaster.jpg';
  document.getElementById('coffee').alt = 'paradise';
}
}
