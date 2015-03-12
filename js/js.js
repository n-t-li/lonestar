$(document).ready(function(){

	$('.block_form_content_1 .niceRadio').click(function(){
		$('.block_form_content_1').css('display', 'none');
		$('.block_form_content_2').fadeIn(600);
	});

	$('.block_form_content_2 .button_grey').click(function(){
		$('.block_form_content_2').css('display', 'none');
		$('.block_form_content_1').fadeIn(600);
	});
	$('.block_form_content_2 .button_blue').click(function(){
		$('.block_form_content_2').css('display', 'none');
		$('.block_form_content_3').fadeIn(600);
	});

	$('.block_form_content_3 .button_grey').click(function(){
		$('.block_form_content_3').css('display', 'none');
		$('.block_form_content_2').fadeIn(600);
	});

	$('.block_faq .title').click(function(){
		if($(this).hasClass('open')){
			$(this).removeClass('open');
			$(this).parent().find('p').slideUp(600);
		}else{
			$(this).addClass('open');
			$(this).parent().find('p').slideDown(600);
		}
	});

	$('.tabs_1 a').click(function(){
		$('.tabs_1').find('.active').removeClass('active');
		$(this).addClass('active');
		$('.tab_content_1').css('display', 'none');
		$('.'+$(this).attr('id')+'_content').fadeIn(600);
	});

	$('.tabs_1_1 a').click(function(){
		$('.tabs_1_1').find('.active').removeClass('active');
		$(this).addClass('active');
		$('.tab_content_1').slideUp(600);
		$('.'+$(this).attr('id')+'_content').slideDown(600);
	});

	$('.tabs_2 a').click(function(){
		$('.tabs_2').find('.active').removeClass('active');
		$(this).addClass('active');
		$('.tab_content_2').css('display', 'none');
		$('.'+$(this).attr('id')+'_content').fadeIn(600);
	});

	$('.block_invention_slider a').click(function(){
		$('.overlay').fadeIn(600);
		$('.popup_inventions').fadeIn(600).css('margin-left', '-'+(($('.popup_inventions').width())/2+20)+'px').css('top', ((document.documentElement.scrollTop || document.body.scrollTop) + 150) + 'px');
	});

	$('.overlay, .button_close').click(function(){
		$('.overlay').fadeOut(600);
		$('.popup').fadeOut(600);
	});

	$('.popup_inventions_img .img').click(function(){
		var tmp = $(this).attr('src');
		$('.img_big').attr('src', tmp);
	});

	$('.button_inventor_information').click(function(){
		$('.popup_inventions').fadeOut(600);
		$('.overlay').fadeIn(600);
		$('.popup.block_form').fadeIn(600).css('margin-left', '-'+(($('.popup.block_form').width())/2)+'px').css('top', ((document.documentElement.scrollTop || document.body.scrollTop) + 150) + 'px');
	});

	$('.menu .menu_show').click(function(){
		$('.menu ul').slideToggle(600);
	});

	$(document).click(function(e){
		if($('.menu_show').css('display') == 'block'){
			if ($(e.target).parents().filter('.menu:visible').length != 1){
				$('.menu ul').slideUp(600);
			}
		}
	});

	setTimeout(function(){
		tmp = $('.logos_suppliers img').height();
		$('.logos_suppliers').css('height', '215px').css('overflow', 'hidden');

		$('.block_suppliers .a_view_all').click(function(){
			if($(this).text() == 'Expand'){
				$('.logos_suppliers').animate({'height': tmp}, 600);
				$(this).text('Roll up');
			}else{
				$('.logos_suppliers').animate({'height': '215'}, 600);
				$(this).text('Expand');
			}
		});

	}, 2000);

	if(device.mobile() || device.tablet()){
		$('.tabs_2 a').click(function(){
			$('html, body').animate({
				scrollTop: ($('.anchor').offset().top)
			},1000);
		});
	}

});

$(window).resize(function(){
	if($(window).width() < 990){
		$('.menu ul').css('display', 'none');
	}
	if($(window).width() > 990){
		$('.menu ul').css('display', 'block');
	}

	tmp = $('.logos_suppliers img').height();
});