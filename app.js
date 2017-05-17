var main = function(){
  $('.tab-btn').click(function(){
      $('.tab-btn').removeClass('showing');
      $('.Tab').removeClass('showing').hide();
      $(this).addClass('showing');
      if(this === '.TabAbout-btn'){
         $('.AboutT').show();
      }
  });

};

$(document).ready(main);
