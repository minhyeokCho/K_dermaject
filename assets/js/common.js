$(document).ready(function(){
	$('.m_gnb_wrap').length && mGnb(); //모바일 GNB
	$('.head_wrap').length && headAni(); //Header UI
	$('.cos_slide').length && cosSlide(); //COSMECEUTICAL 슬라이드
	$('.certi_slide_wrap').length && ceritSlide(); //ceritSlide 슬라이드

	$(window).on('load',function(){
		var head = $('.head_wrap')
		var scrollTop = $(window).scrollTop();

		if(scrollTop>90) {
			head.removeClass('nor_active');
			head.addClass('fixed_active')
		}else {
			head.removeClass('fixed_active')
		}
	});
});

$(window).on('resize', function(){
	$width = $(window).innerWidth();

	if($width > 1024){//모바일 GNB
		$('.m_gnb_wrap').removeClass('on')
		dimHide()
	}
});

function dimShow(){ /* 딤드 show */
	$('body').addClass('dim');
}
function dimHide(){ /* 딤드 hide */
	$('body').removeClass('dim');
}

function mGnb() {
	$('.m_gnb_wrap .m_gnb_menu').on('click', function(){ //모바일 GNB 1depth
		$(this).parent().toggleClass('on')
		$('.m_gnb_menu').not(this).parent('li').removeClass('on')
		$(this).siblings().stop().slideToggle()
		$('.m_gnb_menu').not(this).siblings().stop().slideUp();
	});

	$('.gnb_ctrl').on('click', function(){ //모바일 GNB 열기
		$('.m_gnb_wrap').addClass('on')
		dimShow()
	})
	$('.btn_close').on('click', function(){ //모바일 GNB 닫기
		$('.m_gnb_wrap').removeClass('on')
		dimHide()
	});
	$(document).mouseup(function (e){ //모바일 GNB 닫기
		var gnb = $('.m_gnb_wrap');
		if(gnb.has(e.target).length === 0 && gnb.hasClass('on')){
			gnb.removeClass('on');
			dimHide()
		}
	});
}

function headAni() { //Header UI
	var head = $('.head_wrap'),
		dept1 = $('.pc_gnb .gnb_dept .gnb_menu');

	// header 전체 active
	head.on('mouseover', function(){
		$(this).addClass('nor_active')
	})
	head.on('mouseleave', function(){
		$(this).removeClass('nor_active')
	})

	// dept1
	dept1.on('mouseover', function(){
		dept1.removeClass('on')
		$(this).addClass('on')
	})
	$('.pc_gnb .gnb_dept > li').on('mouseleave', function(){
		$('.pc_gnb .gnb_dept .gnb_menu').removeClass('on')
	})

	// scroll시 head 고정
	$(window).scroll(function(){
		var scrollTop = $(window).scrollTop();

		if(scrollTop>90) {
			head.removeClass('nor_active');
			head.addClass('fixed_active')
		}else {
			head.removeClass('fixed_active')
		}
		if(dept1.hasClass('on')){
			head.addClass('nor_active')
		}
	});
}

function cosSlide(){ //COSMECEUTICAL 슬라이드
	var cosSlide = new Swiper('.cos_slide', {
		slidesPerView:'auto',
		loop:true,
		spaceBetween: 8,
		speed : 800,
		pagination: {
			el: ".pagination_bullet",
			type : 'bullets',
			clickable:'true'
		},
		autoplay: {
			delay: 4000,
			disableOnInteraction: false,
		},
	})
}

function ceritSlide(){ //ceritSlide 슬라이드
	var ceritSlide = new Swiper('.certi_slide_wrap .swiper', {
		slidesPerView:1,
		loop:true,
		spaceBetween: 20,
		navigation: {
			nextEl: '.btn_arrow.next',
			prevEl: '.btn_arrow.prev',
		},
		breakpoints: {
			768: {
				slidesPerView: 2,
				spaceBetween: 20
			},
			1024: {
				slidesPerView: 3,
				spaceBetween: 35
			},
		}
	})
}