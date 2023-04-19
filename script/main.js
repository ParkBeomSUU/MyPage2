$(function () {

  // fullpage customization
  $('#fullpage').fullpage({
    sectionSelector: '.vertical-scrolling', //섹션의 선택자 지정
    slideSelector: '.horizontal-scrolling', //슬라이드의 선택자를 지정
    navigation: true, //네비게이션바 표시
    slidesNavigation: true,
    css3: true,
    controlArrows: false //좌우 화살표를 숨김 처리
  });
});