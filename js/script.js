// 메인 텍스트
//skrollr
let s = skrollr.init({
  edgeStrategy: 'set',
  easing: 'linear'
});

setTimeout(start, 500);

function start(){
  //$("#main h1").addClass("show");

  let tl = new TimelineMax();
  tl.staggerFromTo("#main_text h1 span", 0.8,  
    {ease: Back.easeOut.config(1.7), opacity: 0, y: 80},
    {ease: Back.easeOut.config(1.7), opacity: 1, y: 0}, 0.05);
} 


// 자바스크립트 - 슬라이드 
  'use strict';
	
	// a[href="#"] 링크 상단 이동 방지
	$(document).on('click', 'a[href="#"]', function(e) {
		e.preventDefault();
	});
	
  const numslide = $('div.slide1-1 div.box ul.slide > li').length;
  let slideNow = 0;
  let slidePrev = 0;
  let slideNext = 0;
  let slideFirst = 1;

  showSlide(slideFirst);

  $('div.slide1-1 p.control a.prev').on('click', function() {
    let index = $('div.slide1-1 ul.indicator > li').index($('div.slide1-1 ul.indicator > li.on'));
    showSlide(slidePrev);
  });

  $('div.slide1-1 p.control a.next').on('click', function() {
    let index = $('div.slide1-1 ul.indicator > li').index($('div.slide1-1 ul.indicator > li.on'));
    showSlide(slideNext);
  });

  $('div.slide1-1 ul.indicator > li > a').on('click', function() {
    let index = $('div.slide1-1 ul.indicator > li').index($(this).parent());
    showSlide(index + 1);
  });

  function showSlide(n) {
    $('div.slide1-1 div.box ul.slide > li').removeClass('on');
    $('div.slide1-1 div.box ul.slide > li:eq('+ (n - 1) +')').addClass('on');
    $('div.slide1-1 ul.indicator > li').removeClass('on');
    $('div.slide1-1 ul.indicator > li:eq('+ (n - 1) +')').addClass('on');
    slideNow = n;
    slidePrev = (n <= 1) ? numslide : (n - 1);
    slideNext = (n >= numslide) ? 1 : (n + 1);
    // console.log(slidePrev +'/'+ slideNow +'/'+ slideNext);
  };
	
	
	
// CSS 애니메이션
$('section.cssani ul.tab > li > a').on('click', function() {
	let index = $('section.cssani ul.tab > li').index($(this).parent());
	$('section.cssani ul.tab > li, section.cssani ul.content > li').removeClass('on');
	$('section.cssani ul.tab > li:eq(' + index + '), section.cssani ul.content > li:eq(' + index + ')').addClass('on');
});
	
	