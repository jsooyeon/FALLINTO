 $(function(){
 var swiper = new Swiper('.banner_web,  .banner_mobile', {
    speed: 3000,//버튼을 슬라이드가 넘어가는 시간
	  autoplay: {
        delay: 2500,//자동으로 넘어가기 전 머무르는 시간
        disableOnInteraction: false,
      },
      loop: true,//슬라이드 무한반복
      navigation: {//화살표 버튼
        nextEl: '.slide .swiper-button-next',
        prevEl: '.slide .swiper-button-prev',
      },
	    pagination: {//블릿 버튼
        el: '.slide .swiper-pagination',
        clickable: true,
      },
    });

    var swiper = new Swiper('.tab01_2, .tab02_2 ', {
      speed: 2000,//버튼을 슬라이드가 넘어가는 시간
      spaceBetween: 60,//갤러리 사이 간격
        loop: true,//슬라이드 무한반복
        navigation: {//화살표 버튼
          nextEl: '.slide .swiper-button-next',
          prevEl: '.slide .swiper-button-prev',
        },
        pagination: {//블릿 버튼
          el: '.slide .swiper-pagination',
          clickable: true,
        },
      });
});