$(function() {
	//로딩중
	const $loading = $('.loading');
	$loading.children('p').fadeOut();
	$loading.delay(500).fadeOut(1000);
	const $home = $('#home');
	const $header = $('header');
	const $nav = $header.find('nav');
	const $btnGnb = $header.find('.btn-gnb');
	const $mnu = $($nav.find('.gnb > li > a'));
	const $aboutme = $('#aboutme');
	const $skill = $('#skill');
	const $portfolio = $('#portfolio');
	const $aside = $('aside');


	$(window).on('load resize', function() {
		// window resize $home height 조절
		$home.height($(window).height());
		if ($(window).width() > 640) {
			//PC모드
			$nav.show()
		} else {
			//모바일
			$btnGnb.removeClass('clse');
			$nav.hide()
		}
	});

	$btnGnb.on('click',function(){
		$(this).toggleClass('clse');
		$nav.toggle();
	});

	$(window).on('scroll',function(){
		let scrollTop = $(this).scrollTop();

		// 모바일 nav바 fixed 구문
		if(scrollTop>$(this).height()){
			$('header').addClass('fixed')
			$('#aboutme').css({
				marginTop : $header.height()
			})
		}else{
			$header.removeClass('fixed');
			$('#aboutme').css({
				marginTop : 0
			})
		}

		// 모바일 aside fade구문
	if(scrollTop>120){
			$aside.stop().fadeIn();
		}else{
			$aside.stop().fadeOut();
		}

		const view = scrollTop + $(this).height() - $('footer').offset().top;

		if(view>0){
			$aside.css({marginBottom : view});
		}else{$aside.css({marginBottom : 0})}
		
	});


	//asdide 클릭시 animate scrollTop 구문
	$aside.on('click',function(evt){

		evt.preventDefault();

		$('html,body').animate({
			scrollTop : 0
		})

	});


$($mnu.eq(0)).on('click',function(evt){
	evt.preventDefault();

	$('html,body').animate({
		scrollTop : $('#aboutme').offset().top
	});

	$(this).parent().addClass('on').siblings().removeClass('on');

});

$($mnu.eq(1)).on('click',function(evt){
	evt.preventDefault();

	$('html,body').animate({
		scrollTop : $('#skill').offset().top
	});

	$(this).parent().addClass('on').siblings().removeClass('on');

});


$($mnu.eq(2)).on('click',function(evt){
	evt.preventDefault();

	$('html,body').animate({
		scrollTop : $('#portfolio').offset().top
	});

	$(this).parent().addClass('on').siblings().removeClass('on');

});

$(window).on('scroll',function(){
	let scrollTop = $(this).scrollTop();

	if(scrollTop>=$aboutme.offset().top){
		$($mnu).eq(0).parent().addClass('on').siblings().removeClass('on')
	}

	if(scrollTop>=$skill.offset().top - 1){
		$($mnu).eq(1).parent().addClass('on').siblings().removeClass('on')
	}

	if(scrollTop>=$portfolio.offset().top - 1){
		$($mnu).eq(2).parent().addClass('on').siblings().removeClass('on')
	}
	
});


});