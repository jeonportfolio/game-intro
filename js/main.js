
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
