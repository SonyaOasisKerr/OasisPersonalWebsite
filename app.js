var main = function(){
  $('.btn-Home').click(function(){
           $('.Tab').removeClass("Open").hide();
           $('.home').addClass("Open").show();
  });
  $('.btn-About').click(function(){
           $('.Tab').removeClass("Open").hide();
           $('.about').addClass("Open").show();
  });
  $('.btn-Future').click(function(){
           $('.Tab').removeClass("Open").hide();
           $('.future').addClass("Open").show();
  });
  $('.btn-Current').click(function(){
           $('.Tab').removeClass("Open").hide();
           $('.current').addClass("Open").show();
  });
  $('.btn-FavW').click(function(){
           $('.Tab').removeClass("Open").hide();
           $('.favW').addClass("Open").show();
  });
  $('.btn-FavW').click(function(){
           $('.Tab').removeClass("Open").hide();
           $('.favW').addClass("Open").show();
  });
  $('.btn-Other').click(function(){
           $('.cyan > .Tab').removeClass("Open").hide();
           $('.other').addClass("Open").show();
  });
};


$(document).ready(main);
$(document).ready(function(){
  $('.Tab').remove
});
