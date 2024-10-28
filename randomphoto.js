window.onload = choosePic;

var myPix = new Array("img/bg1.jpg","images/tiger.jpg","images/bear.jpg");

function choosePic() {
     var randomNum = Math.floor(Math.random() * myPix.length);
     document.getElementById("myPicture").src = myPix[randomNum];