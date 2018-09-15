$(document).ready(function() {

	$('#sidebar_left').find('a').on('click', function(ev) {
        var $li = $(this).parent();

        if ($li.is('.active')) {
            $li.removeClass('active active-sm');
            $('ul:first', $li).slideUp(function() {
                height();
            });
        } else {
            if($('body').is(".body_sm")){
				$li.parent().find( "li" ).removeClass("active active-sm");
				$li.parent().find( "li ul" ).slideUp();
			}
            $li.addClass('active');
            $('ul:first', $li).slideDown(function() {
                height();
            });
        }
    });

	$('#menu_toggle').on('click', function() {
		if ($('body').hasClass('body_md')) {
			$('#sidebar_left').find('li.active ul').hide();
			$('#sidebar_left').find('li.active').addClass('active-sm').removeClass('active');
		} else {
			$('#sidebar_left').find('li.active-sm ul').show();
			$('#sidebar_left').find('li.active-sm').addClass('active').removeClass('active-sm');
		}

		$('body').toggleClass('body_md body_sm');

		height();

	});

	var height = function () {
		$('.right_nav').css('min-height', $(window).height());

		var body_height = $('body').outerHeight(),
			footer_height = $('footer').height(),
			left_height = $('.left_nav').eq(1).height(),
			content_height = body_height < left_height ? left_height : body_height;

		content_height -= $('.nav_menu').height() + footer_height;

		$('.right_nav').css('min-height', content_height);
	};
				
});	
	

