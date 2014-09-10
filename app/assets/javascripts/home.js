cheet('↑ ↑ ↓ ↓ ← → ← → b a', function () {
  document.getElementById('profile').style.background = "url('/images/heman.gif')";
});


$(document).ready(function(){
  $("body").bind("keydown", function (e) {
    if (e.keyCode == 38) {
      //up
      $('.content-wrapper').css('-webkit-transform', 'translate3d(0,-20px,0)');
    }

    if (e.keyCode == 40) {
      //down
      $('.content-wrapper').css('-webkit-transform', 'translate3d(0,20px,0)');
    }

    if (e.keyCode == 37) {
      //left
      $('.content-wrapper').css('-webkit-transform', 'translate3d(-20px,0,0)');
    }

    if (e.keyCode == 39) {
      //right
      $('.content-wrapper').css('-webkit-transform', 'translate3d(20px,0,0)');
    }

    if (e.keyCode == 65) {
      //a
      $('.content-wrapper').css('-webkit-transform', 'scale(1.1,1.1)');
    }


    if (e.keyCode == 66) {
      //b
      $('.content-wrapper').css('-webkit-transform', 'scale(1.1,1.1)');

    }
  });
  $("body").bind("keyup", function (e) {
    $('.content-wrapper').css('-webkit-transform', 'none');
  });
});
