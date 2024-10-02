# 블로그 소개 페이지 만들기 <br/>

## 이미지 편집

- FIGMA unplash 사용 <br/>

## reset.css cdn<br/>

- cdn으로 브라우저의 전체속성 초기화<br/>
- `<link href="https://cdn.jsdelivr.net/npm/reset-css@5.0.2/reset.min.css" rel="stylesheet">`<br/>


## 오픈그래프 <br/>

- SNS 공유할때 메타정보 선택 (웹페이지와 트위터) <br/>

## 크로스 브라우징 폰트 설정 <br/>

- `google fonts` <br/>

## 아이콘 <br/>

- `google material icons`사용<br/>

## input요소 javascript 제어 <br/>

- 포커싱 여부에 따라서 width값과 아이콘 제어  <br/>
- 아이콘 클릭까지 input요소에 포커싱 되게 설정 <br/>

## 배너요소 javascript 제어 <br/> 

- 스크롤시 효과 `lodash cdn` 사용<br/>
- `throttle()`메소드 사용 -> 부하 방지<br/>
- 스크롤의 Y의 값에 따라 배지의 유무 제어<br/>
- GSAP 사용 (`gsap cdn`)<br/>

## section 이미지

- 로고 `vector icon`사용<br/>
- 각 로고마다 각각 나타나는 순차적 애니메이션 적용 (gsap사용 -> delay (index를 활용))<br/>

## 공지사항 & 이미지 슬라이더 <br/>

- swiper 사용 `http://swiperjs.com`<br/>
- left, margin-left 속성 사용해서 이미지 슬라이더 정가운데 위치로 만들기<br/>
- loop를 사용해서 반복적 회전구조 만들기<br/>
- slide -> opacity를 통해 현재의 슬라이드 구분<br/>
- 슬라이드의 위치표시 및 이동 (swiper -> pagination, navigation)<br/>
- 슬라이드 토글을 통해 슬라이더의 숨김 및 보임처리 <br/>


## 유튜브 영상 사용하기 (API)

- 16:9의 비율로 영상 제공- -> padding-top:56.25%<br/>
- `youtube iframe api`사용  <br/>
- `https://www.youtube.com/watch?v=V_oRJZbSuk0`영상출처<br/>
- 영상 위 floating 애니메이션 효과 (gsap yoyo, easing효과)<br/>

## 애니메이션 효과 

- section별로 position fixed효과로 애니메이션 효과<br/>
- transform:rotateY , perspective 를 활용한 3D애니메이션 효과 <br/>

## 스크롤 계산 

- `scrollMagic cdn` 사용<br/>
- scroll-spy 클래스를 사용하여 지나는 지점은 show를 추가해 구분하여 애니메이션 추가<br/>
- css에서 translateX를 이용해서 x축 변경과 delay 효과 적용 <br/>


