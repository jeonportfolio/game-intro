

//배지(스크롤 부하 방지)

const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');

window.addEventListener('scroll', _.throttle(function(){
    console.log(window.scrollY);
    if(window.scrollY > 500){
        //배지 숨기기 
        gsap.to(badgeEl, .6, {
            opacity:0,
            display: 'none'
        });
        // to-top 스크롤 버튼 보이기
        gsap.to(toTopEl, .2, {
            x: 0
        })

    }else {
        //배지 보여주기
        gsap.to(badgeEl, .6, {
            opacity:1,
            display: 'block'
        });
        // to-top 스크롤 버튼 사라지기
        gsap.to(toTopEl, .2, {
            x: 100
        })
    }
    },300));

    // 상단으로 스크롤 올리기 

    
    toTopEl.addEventListener('click', function(){
            gsap.to(window,.7,{
                scrollTo:0
            });
    });

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

    new Swiper('.promotion .swiper-container', {
            slidesPerView: 3, //한번에 보여줄 슬라이드 개수 
            spaceBetween:10, // 슬라이드 사이 여백 
            centeredSlides: true,// 1번 슬라이드가 가운데보이기
            loop: true,
             autoplay: {
                 delay: 2500
             },
             pagination: {
                el:'.promotion .swiper-pagination',
                clickable: true
             },
             navigation : {
                prevEl:'.promotion .swiper-prev',
                nextEl:'.promotion .swiper-next'
             }
    });

    // 푸터 슬라이드 swiper

    new Swiper ('.stack .swiper-container', {
        autoplay: true,
        loop:true,
        spaceBetween:30,
        slidesPerView:5,
        navigation:{
            prevEl:'.stack .swiper-prev',
            nextEl:'.stack .swiper-next'
        }
    });



    // 슬라이더 토글 

    const promotionEl = document.querySelector('.promotion');
    const promotionToggleBtn = document.querySelector('.toggle-promotion');
    let isHidePromotion = false;
    promotionToggleBtn.addEventListener('click', function(){
        isHidePromotion = !isHidePromotion
        if(isHidePromotion) {
            //숨김
            promotionEl.classList.add('hide');
        }else {
            // 나타남
            promotionEl.classList.remove('hide');

        }
    });


    // 범위 랜덤 함수(소수점 2자리까지)
    function random(min, max) {
        // `.toFixed()`를 통해 반환된 문자 데이터를,
        // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
         return parseFloat((Math.random() * (max - min) + min).toFixed(2))
    }


    // floating 효과 

    function floatingObject(selector, delay, size){
        gsap.to(selector, random(1.5, 2.5) , {
            y: size,
            repeat:-1, //무한반복
            yoyo:true,
            ease: "power1.inOut",
            delay: random(0,delay)
        });
    }
    floatingObject('.floating1', 1, 15);
    floatingObject('.floating2', .5, 15);
    floatingObject('.floating3', 1.5, 20);

    
// scrollMagic 

const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function(spyEl){
    new ScrollMagic
        .Scene({
            triggerElement: spyEl, //보여짐 여부를 감시할 요소를 지정 
            triggerHook: .8, //보여지는 화면은 0과 1 거기서 0.8의 뷰포트에 훅이 걸린다
            
        })
        .setClassToggle(spyEl, 'show')
        .addTo(new ScrollMagic.Controller());
});



//메일보내기 

function sendEmail() {
    const email = "etoile929@naver.com"; // 수신할 이메일 주소
   
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}