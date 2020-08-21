
console.log('Hello World!')



function updateImage(){

  if (document.getElementById("coffee").alt === 'paradise') {
      document.getElementById("coffee").src = 'img2.png';
      document.getElementById('coffee').alt = 'smith';
} else if (document.getElementById("coffee").alt === 'smith') {

  document.getElementById("coffee").src = 'coffeeroaster.jpg';
  document.getElementById('coffee').alt = 'paradise'
}
}
