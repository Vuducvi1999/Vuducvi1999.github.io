$(document).ready(function() {
  $('.view_project > a').hover(
    function(){
        $('.view_project').css({    transform: 'translateX(0px)'});
    },
    function(){
        $('.view_project').css({    transform: 'translateX(-15px)'});
    }
  );
});
