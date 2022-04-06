
$('.navbar a').on('click', function (e) {
  if (this.hash !== '') {
    e.preventDefault();

    const hash = this.hash;

    $('html, body')
      .animate({
        scrollTop: $(hash).offset().top
      },800);
  }
});



var quoteArray = ["My name is Kit Aspen, nice to meet you."];
var textPosition = 0; 
// speed in milliseconds
var speed = 50;
typewriter = () => {
  document.querySelector("#typewriter").innerHTML = quoteArray[0].substring(0, textPosition);
  
  if(textPosition++ != quoteArray[0].length)
    setTimeout(typewriter, speed);
}

window.addEventListener("load", typewriter)






