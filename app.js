const bar = document.querySelector('.hamburger')
bar.addEventListener('click', () => {
    const box = document.getElementsByClassName('main-nav')
    box[0].classList.toggle('expand')
})

// <!-- ---------js for product gallery-------- -->

var ProductImg = document.getElementById("ProductImg");
var smallImg = document.getElementsByClassName("small-img");

  smallImg[0].onclick = function()
  {
      ProductImg.src = smallImg[0].src;
  }
  smallImg[1].onclick = function()
  {
      ProductImg.src = smallImg[1].src;
  }
  smallImg[2].onclick = function()
  {
      ProductImg.src = smallImg[2].src;
  }
  smallImg[3].onclick = function()
  {
      ProductImg.src = smallImg[3].src;
  }
  smallImg[4].onclick = function()
  {
      ProductImg.src = smallImg[4].src;
  }
