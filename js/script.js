$(function(){
    var swiper = new Swiper(".mySwiper", {
    spaceBetween: 10,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
        autoplay: {
            delay: 3000, // 슬라이드 전환 시간 (밀리초 단위)
            disableOnInteraction: false, // 사용자가 슬라이드를 조작해도 자동 재생 유지
        },
        loop: true, // 슬라이드 반복

    });
    
});
$(document).ready(function () {
  // 메뉴 열기
  $('.menu-btn').on('click', function (e) {
    e.preventDefault();
    $('.side-menu').addClass('open');
  });

  // 메뉴 닫기
  $('.close-btn').on('click', function () {
    $('.side-menu').removeClass('open');
  });

  // 아코디언 토글
  $('.has-sub .menu-title').on('click', function (e) {
    e.preventDefault();
    const $submenu = $(this).next('.submenu');
    const $icon = $(this).find('.toggle-btn');

    if ($submenu.is(':visible')) {
      $submenu.slideUp(200);
      $icon.text('+');
    } else {
      $submenu.slideDown(200);
      $icon.text('-');
    }
  });
});
$(document).ready(function () {
  // 클릭 시 드롭다운 토글
  $('.locale-select .selected').on('click', function () {
    $('.locale-options').toggle();
    $('.locale-select .arrow').toggleClass('open');
  });

  // 언어 선택 시 텍스트 반영 및 active 적용
  $('.locale-options li a').on('click', function () {
    const selectedText = $(this).text();
    $('.selected-lang').text(selectedText);
    $('.locale-options li').removeClass('active');
    $(this).parent().addClass('active');
    $('.locale-options').hide();
    $('.locale-select .arrow').removeClass('open');
  });

  // 외부 클릭 시 드롭다운 닫기
  $(document).on('click', function (e) {
    if (!$(e.target).closest('.locale-select').length) {
      $('.locale-options').hide();
      $('.locale-select .arrow').removeClass('open');
    }
  });
});

const slider = document.getElementById('slider');
let currentIndex = 0;
const cardWidth = 240; // 카드 한 개의 너비 + 마진
const totalCards = 15; // 전체 카드 수 (필요 시 slider.children.length로 자동 계산 가능)

function slide(direction) {
  const visibleCards = Math.floor(1200 / cardWidth); // 한 화면에 보이는 카드 수
  const maxIndex = totalCards - visibleCards;
  
  currentIndex += direction;

  if (currentIndex < 0) currentIndex = 0;
  if (currentIndex > maxIndex) currentIndex = maxIndex;

  const offset = -currentIndex * cardWidth;
  slider.style.transform = `translateX(${offset}px)`;
  slider.style.transition = 'transform 0.4s ease-in-out';
}

const slider1 = document.getElementById('slider1');
let currentI = 0;
const crdWidth = 240; // 카드 한 개의 너비 + 마진
const ttalCards = 15; // 전체 카드 수 (필요 시 slider.children.length로 자동 계산 가능)

function slide(direction) {
  const visibleCards = Math.floor(1200 / crdWidth); // 한 화면에 보이는 카드 수
  const maxIndex = ttalCards - visibleCards;
  
  currentI += direction;

  if (currentI < 0) currentI = 0;
  if (currentI > maxIndex) currentI = maxIndex;

  const offset = -currentI * crdWidth;
  slider1.style.transform = `translateX(${offset}px)`;
  slider1.style.transition = 'transform 0.4s ease-in-out';
}

  const pickSwiper = document.querySelector('.pick-swiper');
  const slides = document.querySelectorAll('.pick .slide');
  const totalSlides = slides.length;
  let currentPickIndex = 0;

  // 버튼 선택
  const prevBtn = document.querySelector('.pick-btn.prev');
  const nextBtn = document.querySelector('.pick-btn.next');

  // 슬라이드 너비 계산
  const slideWidth = slides[0].offsetWidth;

  function updatePickSlider() {
    const offset = -currentPickIndex * slideWidth;
    pickSwiper.style.transform = `translateX(${offset}px)`;
  }

  nextBtn.addEventListener('click', () => {
    currentPickIndex++;
    if (currentPickIndex >= totalSlides) {
      currentPickIndex = 0; // 다시 처음으로
    }
    updatePickSlider();
  });

  prevBtn.addEventListener('click', () => {
    currentPickIndex--;
    if (currentPickIndex < 0) {
      currentPickIndex = totalSlides - 1; // 마지막으로
    }
    updatePickSlider();
  });

  // 브라우저 리사이즈 시에도 위치 재계산
  window.addEventListener('resize', () => {
    updatePickSlider();
  });



  const sliderTrack = document.querySelector('.slider-track');
  const totalSlides1 = 4; // including clones
  let index = 1;

  function moveToSlide(i) {
    sliderTrack.style.transition = 'transform 0.5s ease-in-out';
    sliderTrack.style.transform = `translateX(-${i * 100}%)`;
  }

  function jumpToSlide(i) {
    sliderTrack.style.transition = 'none';
    sliderTrack.style.transform = `translateX(-${i * 100}%)`;
  }

  setInterval(() => {
    index++;
    moveToSlide(index);

    if (index === totalSlides1 - 1) {
      // 마지막 복제본(슬라이드1) → 원래 슬라이드1로 점프
      setTimeout(() => {
        jumpToSlide(1);
        index = 1;
      }, 500); // transition 시간과 같게
    }
  }, 3000);


  const allImages = document.querySelectorAll('.gallery-img');
  const moreBtn = document.getElementById('more-button');

  let visibleCount = 10;

  function updateVisibleImages() {
    allImages.forEach((img, idx) => {
      img.style.display = idx < visibleCount ? 'block' : 'none';
    });

    if (visibleCount >= allImages.length) {
      moreBtn.style.display = 'none';
    }
  }

  moreBtn.addEventListener('click', () => {
    visibleCount += 10;
    updateVisibleImages();
  });

  // 초기화
  updateVisibleImages();

  