cheet('↑ ↑ ↓ ↓ ← → ← → b a', function () {
  document.getElementById('profile').style.background = "url('/images/heman.gif')";
  // document.getElementById('background').style.background = "url('/images/heman2.gif') 50% 50%";
  document.getElementById('background').innerHTML = '<iframe width="100%" height="100%" src="//www.youtube.com/embed/w5FUu6GM__U?autoplay=1" frameborder="0" allowfullscreen></iframe>'
});


$(document).ready(function(){
  $("body").bind("keydown", function (e) {
    if (e.keyCode == 38) {
      //up
      $('.content-wrapper').css('-webkit-transform', 'rotateX(10deg)');
    }

    if (e.keyCode == 40) {
      //down
      $('.content-wrapper').css('-webkit-transform', 'rotateX(-10deg)');
    }

    if (e.keyCode == 37) {
      //left
      $('.content-wrapper').css('-webkit-transform', 'rotateY(-10deg)');
    }

    if (e.keyCode == 39) {
      //right
      $('.content-wrapper').css('-webkit-transform', 'rotateY(10deg)');
    }

    if (e.keyCode == 65) {
      //a
      $('.content-wrapper').css('-webkit-transform', 'scale(0.9,0.9)');
    }


    if (e.keyCode == 66) {
      //b
      $('.content-wrapper').css('-webkit-transform', 'scale(0.9,0.9)');

    }
  });
  $("body").bind("keyup", function (e) {
    $('.content-wrapper').css('-webkit-transform', 'none');
  });
});
