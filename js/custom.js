var counter = 0;
	$('.menu_btn').click(function(){
		if( counter == '0') {
			$('.navigation_menu').addClass('main_menu_hide');
			$(this).children().removeAttr('class');
			$(this).children().attr('class','fa fa-close');
			counter++;
		}
		else {
			$('.navigation_menu').removeClass('main_menu_hide');
			$(this).children().removeAttr('class');
			$(this).children().attr('class','fa fa-bars');
			counter--;
		}
	
	});

      // Menu js for Position fixed
    $(window).scroll(function(){
      var window_top = $(window).scrollTop() + 1; 
        if (window_top > 300) {
          $('.navigation').addClass('menu_fixed animated fadeInDown');
        } else {
          $('.navigation').removeClass('menu_fixed animated fadeInDown');
        }
    });