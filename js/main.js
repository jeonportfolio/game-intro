
//Input 포커싱 
const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function(){
    searchInputEl.focus();
});

searchInputEl.addEventListener('focus', function(){
    searchEl.classList.add('focused');
    searchInputEl.setAttribute('placeholder','검색어를 입력해주세요');
});

searchInputEl.addEventListener('blur', function(){
    searchEl.classList.remove('focused');
    searchInputEl.setAttribute('placeholder','');
});


//배지(스크롤 부하 방지)

const badgeEl = document.querySelector('header .badges');

window.addEventListener('scroll', _.throttle(function(){
    console.log(window.scrollY);
    if(window.scrollY > 500){
        //배지 숨기기 
        gsap.to(badgeEl, .6, {
            opacity:0,
            display: 'none'
        });
    }else {
        //배지 보여주기
        gsap.to(badgeEl, .6, {
            opacity:1,
            display: 'block'
        });
    }
    },300));

    //visual 이미지 순차적으로 생성

    const fadeEls = document.querySelectorAll('.visual .fade-in');
    fadeEls.forEach(function(fadeEl, index){
            gsap.to(fadeEl,1,{
                delay:(index + 1) * .5,
                opacity:1
            });
    });

    //공지사항 swiper

    new Swiper('.notice-line .swiper-container', {
            direction:'vertical',
            autoplay: true,
            loop: true,
    });





