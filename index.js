function esconderBotao(){
    document.getElementById("btn1").style.display = 'none';
    document.getElementById("btn2").style.display = 'none';
    document.getElementById("btn3").style.display = 'none';
    document.getElementById("btn4").style.display = 'none';
    document.getElementById("btn5").style.display = '';
}
function mostrarBotao(){
    document.getElementById("btn1").style.display = '';
    document.getElementById("btn2").style.display = '';
    document.getElementById("btn3").style.display = '';
    document.getElementById("btn4").style.display = '';
    document.getElementById("btn5").style.display = 'none';
}

window.onscroll = function() {
    scrollButton()
    showPanel()
};

function showPanel(){
    if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
        document.getElementById("boxText1").style.visibility = "visible";
    } else {
        document.getElementById("boxText1").style.display = "hidden";
    }
    if (document.body.scrollTop > 1100 || document.documentElement.scrollTop > 1100) {
        document.getElementById("boxText2").style.visibility = "visible";
    } else {
        document.getElementById("boxText2").style.display = "hidden";
    }
}

function scrollButton() {
  if (document.body.scrollTop > 620 || document.documentElement.scrollTop > 620) {
    document.getElementById("backTop").style.display = "block";
  } else {
    document.getElementById("backTop").style.display = "";
  }
}

$(document).ready(function(){
  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:5,
            nav:true,
            loop:false
        }
    }
    })
});