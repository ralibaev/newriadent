!function(e,n,A){function o(e,n){return typeof e===n}function t(){var e,n,A,t,a,i,l;for(var f in r)if(r.hasOwnProperty(f)){if(e=[],n=r[f],n.name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(A=0;A<n.options.aliases.length;A++)e.push(n.options.aliases[A].toLowerCase());for(t=o(n.fn,"function")?n.fn():n.fn,a=0;a<e.length;a++)i=e[a],l=i.split("."),1===l.length?Modernizr[l[0]]=t:(!Modernizr[l[0]]||Modernizr[l[0]]instanceof Boolean||(Modernizr[l[0]]=new Boolean(Modernizr[l[0]])),Modernizr[l[0]][l[1]]=t),s.push((t?"":"no-")+l.join("-"))}}function a(e){var n=u.className,A=Modernizr._config.classPrefix||"";if(c&&(n=n.baseVal),Modernizr._config.enableJSClass){var o=new RegExp("(^|\\s)"+A+"no-js(\\s|$)");n=n.replace(o,"$1"+A+"js$2")}Modernizr._config.enableClasses&&(n+=" "+A+e.join(" "+A),c?u.className.baseVal=n:u.className=n)}function i(e,n){if("object"==typeof e)for(var A in e)f(e,A)&&i(A,e[A]);else{e=e.toLowerCase();var o=e.split("."),t=Modernizr[o[0]];if(2==o.length&&(t=t[o[1]]),"undefined"!=typeof t)return Modernizr;n="function"==typeof n?n():n,1==o.length?Modernizr[o[0]]=n:(!Modernizr[o[0]]||Modernizr[o[0]]instanceof Boolean||(Modernizr[o[0]]=new Boolean(Modernizr[o[0]])),Modernizr[o[0]][o[1]]=n),a([(n&&0!=n?"":"no-")+o.join("-")]),Modernizr._trigger(e,n)}return Modernizr}var s=[],r=[],l={_version:"3.6.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var A=this;setTimeout(function(){n(A[e])},0)},addTest:function(e,n,A){r.push({name:e,fn:n,options:A})},addAsyncTest:function(e){r.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=l,Modernizr=new Modernizr;var f,u=n.documentElement,c="svg"===u.nodeName.toLowerCase();!function(){var e={}.hasOwnProperty;f=o(e,"undefined")||o(e.call,"undefined")?function(e,n){return n in e&&o(e.constructor.prototype[n],"undefined")}:function(n,A){return e.call(n,A)}}(),l._l={},l.on=function(e,n){this._l[e]||(this._l[e]=[]),this._l[e].push(n),Modernizr.hasOwnProperty(e)&&setTimeout(function(){Modernizr._trigger(e,Modernizr[e])},0)},l._trigger=function(e,n){if(this._l[e]){var A=this._l[e];setTimeout(function(){var e,o;for(e=0;e<A.length;e++)(o=A[e])(n)},0),delete this._l[e]}},Modernizr._q.push(function(){l.addTest=i}),Modernizr.addAsyncTest(function(){function e(e,n,A){function o(n){var o=n&&"load"===n.type?1==t.width:!1,a="webp"===e;i(e,a&&o?new Boolean(o):o),A&&A(n)}var t=new Image;t.onerror=o,t.onload=o,t.src=n}var n=[{uri:"data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoBAAEAAwA0JaQAA3AA/vuUAAA=",name:"webp"},{uri:"data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA==",name:"webp.alpha"},{uri:"data:image/webp;base64,UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA",name:"webp.animation"},{uri:"data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=",name:"webp.lossless"}],A=n.shift();e(A.name,A.uri,function(A){if(A&&"load"===A.type)for(var o=0;o<n.length;o++)e(n[o].name,n[o].uri)})}),t(),a(s),delete l.addTest,delete l.addAsyncTest;for(var p=0;p<Modernizr._q.length;p++)Modernizr._q[p]();e.Modernizr=Modernizr}(window,document);
Modernizr.on('webp', function(result) {
  if (result) {
    document.body.classList.add('webp');
  } else {
    document.body.classList.add('no-webp');
  }
});

// Главный слайдер
let mainSlides = document.querySelectorAll('.main-slider__item');
if (mainSlides.length) {
  let mainSlidesCount = 0;
  for (let i = 0; i < mainSlides.length; i++) {
    mainSlidesCount++;
  }

  let mainSlidesButtonList = document.querySelector('.main-slider__button-list');
  for (let i = 0; i < mainSlidesCount; i++) {
    let mainSlidesButton = document.createElement('button');
    mainSlidesButton.classList.add('main-slider__button-item');
    mainSlidesButtonList.append(mainSlidesButton);
  }

  mainSlidesButtonList.childNodes[0].classList.add('main-slider__button-item--active');

  for (let i = 0; i < mainSlides.length; i++) {
    mainSlides[i].style.left = (i * 100) + '%';
  }

  function showMainSlide() {
    for (let i = 0; i < mainSlidesCount; i++) {
      if (mainSlidesButtonList.childNodes[i].classList.contains('main-slider__button-item--active')) {
        for (let j = 0; j < mainSlides.length; j++) {
          mainSlides[j].style.left = (j * 100) - (i * 100) + '%';
        }
      }
    }
  }

  function prevMainSlide() {
    let x = 0;
    for (let i = 0; i < mainSlidesCount; i++) {
      if (mainSlidesButtonList.childNodes[i].classList.contains('main-slider__button-item--active')) {
        x = i;
      }
    }
    mainSlidesButtonList.childNodes[x].classList.remove('main-slider__button-item--active');
    if (x == 0) {
      mainSlidesButtonList.lastChild.classList.add('main-slider__button-item--active');
    } else {
      mainSlidesButtonList.childNodes[x - 1].classList.add('main-slider__button-item--active');
    }
    showMainSlide();
  }

  function nextMainSlide() {
    let x = 0;
    for (let i = 0; i < mainSlidesCount; i++) {
      if (mainSlidesButtonList.childNodes[i].classList.contains('main-slider__button-item--active')) {
        x = i;
      }
    }
    mainSlidesButtonList.childNodes[x].classList.remove('main-slider__button-item--active');
    if (x == (mainSlidesCount - 1)) {
      mainSlidesButtonList.firstChild.classList.add('main-slider__button-item--active');
    } else {
      mainSlidesButtonList.childNodes[x + 1].classList.add('main-slider__button-item--active');
    }
    showMainSlide();
  }

  let mainSlidesTime = 10000;
  let mainSlidesTimer = setInterval(function() {
    nextMainSlide();
  }, mainSlidesTime);

  for (let i = 0; i < mainSlidesCount; i++) {
    mainSlidesButtonList.childNodes[i].addEventListener('click', function() {
      for (let j = 0; j < mainSlides.length; j++) {
        mainSlidesButtonList.childNodes[j].classList.remove('main-slider__button-item--active')
      }
      mainSlidesButtonList.childNodes[i].classList.add('main-slider__button-item--active');
      showMainSlide();
    });
  }
}

// Увеличение числа
let centrNumber = document.querySelector('.numbers__number--0');
let pacientNumber = document.querySelector('.numbers__number--1');
let clientNumber = document.querySelector('.numbers__number--2');
if (centrNumber) {
  let strClientNumber = clientNumber.innerHTML.slice(0, -1);
  let lastCentrNumber = +centrNumber.innerHTML;
  let lastPacientNumber = +pacientNumber.innerHTML;
  let lastClientNumber = +strClientNumber;
  let firstCentrNumber = 0;
  let firstPacientNumber = 0;
  let firstClientNumber = 0;
  let numberCount = 1;
  let timerIsDone = false;

  centrNumber.innerHTML = 0;
  pacientNumber.innerHTML = 0;
  clientNumber.innerHTML = (0 + '%');

  let advantagesList = document.querySelector('.numbers__list');
  window.addEventListener('scroll', function() {
    let advantagesListPosition = advantagesList.getBoundingClientRect();
    if ((advantagesListPosition.y >= 300) && (advantagesListPosition.y <= 600)) {
      if (!timerIsDone) {
        let timerId = setInterval(function() {
          if (numberCount == 100) {
            clearInterval(timerId);
          }
          centrNumber.innerHTML = (Math.floor(lastCentrNumber / 100 * numberCount));
          pacientNumber.innerHTML = (Math.floor(lastPacientNumber / 100 * numberCount));
          clientNumber.innerHTML = (Math.floor(lastClientNumber / 100 * numberCount) + '%');
          numberCount++;
        }, 10);
        timerIsDone = true;
      }
    }
  });
}

// Выбор табов
let servicesTabs = document.querySelectorAll('.services__tab');
let servicesList = document.querySelectorAll('.services__list');
if (servicesTabs.length) {
  servicesTabs[0].addEventListener('click', function () {
    servicesList[0].style.left = '0';
    servicesList[1].style.left = '100%';
    servicesTabs[0].classList.remove('services__tab--active');
    servicesTabs[1].classList.remove('services__tab--active');
    servicesTabs[0].classList.add('services__tab--active');
    servicesTabs[1].classList.remove('services__tab--active');
  });

  servicesTabs[1].addEventListener('click', function () {
    servicesList[0].style.left = '-100%';
    servicesList[1].style.left = '0';
    servicesTabs[0].classList.remove('services__tab--active');
    servicesTabs[1].classList.remove('services__tab--active');
    servicesTabs[1].classList.add('services__tab--active');
    servicesTabs[0].classList.remove('services__tab--active');
  });
}

// Слайдер внизу
let someSlides = document.querySelectorAll('.some-slider__item');
if (someSlides.length) {
  let someSlidesCount = 0;
  for (let i = 0; i < someSlides.length; i++) {
    someSlidesCount++;
  }

  let someSlidesButtonList = document.querySelector('.some-slider__button-list');
  for (let i = 0; i < someSlidesCount; i++) {
    let someSlidesButton = document.createElement('button');
    someSlidesButton.classList.add('some-slider__button-item');
    someSlidesButtonList.append(someSlidesButton);
  }

  someSlidesButtonList.childNodes[0].classList.add('some-slider__button-item--active');

  for (let i = 0; i < someSlides.length; i++) {
    someSlides[i].style.left = (i * 100) + '%';
  }

  function showSomeSlides() {
    for (let i = 0; i < someSlidesCount; i++) {
      if (someSlidesButtonList.childNodes[i].classList.contains('some-slider__button-item--active')) {
        for (let j = 0; j < someSlides.length; j++) {
          someSlides[j].style.left = (j * 100) - (i * 100) + '%';
        }
      }
    }
  }

  function prevSomeSlides() {
    let x = 0;
    for (let i = 0; i < someSlidesCount; i++) {
      if (someSlidesButtonList.childNodes[i].classList.contains('some-slider__button-item--active')) {
        x = i;
      }
    }
    someSlidesButtonList.childNodes[x].classList.remove('some-slider__button-item--active');
    if (x == 0) {
      someSlidesButtonList.lastChild.classList.add('some-slider__button-item--active');
    } else {
      someSlidesButtonList.childNodes[x - 1].classList.add('some-slider__button-item--active');
    }
    showSomeSlides();
  }

  function nextSomeSlides() {
    let x = 0;
    for (let i = 0; i < someSlidesCount; i++) {
      if (someSlidesButtonList.childNodes[i].classList.contains('some-slider__button-item--active')) {
        x = i;
      }
    }
    someSlidesButtonList.childNodes[x].classList.remove('some-slider__button-item--active');
    if (x == (someSlidesCount - 1)) {
      someSlidesButtonList.firstChild.classList.add('some-slider__button-item--active');
    } else {
      someSlidesButtonList.childNodes[x + 1].classList.add('some-slider__button-item--active');
    }
    showSomeSlides();
  }

  for (let i = 0; i < someSlidesCount; i++) {
    someSlidesButtonList.childNodes[i].addEventListener('click', function() {
      for (let j = 0; j < someSlides.length; j++) {
        someSlidesButtonList.childNodes[j].classList.remove('some-slider__button-item--active')
      }
      someSlidesButtonList.childNodes[i].classList.add('some-slider__button-item--active');
      showSomeSlides();
    });
  }

  let someSlidesPrevButton = document.querySelector('.some-slider__button--prev');
  someSlidesPrevButton.addEventListener('click', prevSomeSlides);

  let someSlidesNextButton = document.querySelector('.some-slider__button--next');
  someSlidesNextButton.addEventListener('click', nextSomeSlides);
}

// Слайдер врачей
let staffMainWebp = document.querySelector('.staff__main-webp');
let staffMainImg = document.querySelector('.staff__main-img');
let staffItems = document.querySelectorAll('.staff__item-inner');
if (staffMainWebp) {
  staffItems.forEach((item, i) => {
    item.addEventListener('click', function() {
      staffMainWebp.attributes.srcset.textContent = item.querySelector('.staff__item-webp').attributes.srcset.textContent;
      staffMainImg.attributes.src.textContent = item.querySelector('.staff__item-img').attributes.src.textContent;
    })
  });
};

// Фотогалерея
let galleryMainWebp = document.querySelector('.gallery__main-webp');
let galleryMainImg = document.querySelector('.gallery__main-webp');
let galleryItems = document.querySelectorAll('.gallery__photo-item');
if (galleryMainWebp) {
  galleryItems.forEach((item, i) => {
    item.addEventListener('click', function() {
      galleryMainWebp.attributes.srcset.textContent = item.querySelector('.gallery__item-webp').attributes.srcset.textContent;
      galleryMainImg.attributes.src.textContent = item.querySelector('.gallery__item-img').attributes.src.textContent;
    })
  });
}

// FAQ
let faqItem = document.querySelectorAll('.faq__item');
if (faqItem) {
  faqItem.forEach((item, i) => {
    item.querySelector('.faq__button').addEventListener('click', function() {
      if (item.querySelector('.faq__text').classList.contains('faq__text--show')) {
        item.querySelector('.faq__text').classList.remove('faq__text--show');
        item.querySelector('.faq__button').classList.remove('faq__button--show');
      } else {
        item.querySelector('.faq__text').classList.add('faq__text--show');
        item.querySelector('.faq__button').classList.add('faq__button--show');
      }
    })
  });
}

// Таймер
;(function() {
  'use strict';
  let now = new Date();
  let days = document.querySelector('.child-form__days-span');
  let hours = document.querySelector('.child-form__hours-span');
  let minutes = document.querySelector('.child-form__minutes-span');
  let seconds = document.querySelector('.child-form__seconds-span');
  if (days) {
    let times = [
      7 - now.getDay(),
      23 - now.getHours(),
      59 - now.getMinutes(),
      59 - now.getSeconds(),
    ];
    let timer = times => {
      let tm = setInterval(() => {
        times[3]--;
        if (times[0] == 0 && times[1] == 0 && times[2] == 0 && times[3] == 0) {
          clearInterval(tm);
        } else if (times[3] == -1) {
          times[3] = 59;
          times[2]--;
        } else if (times[2] == -1) {
          times[2] == 59;
          times[1]--;
        } else if (times[1] == -1) {
          times[1] == 23;
          times[0]--;
        }
        let d = (times[0] < 10) ? '0' + times[0] : times[0];
        let h = (times[1] < 10) ? '0' + times[1] : times[1];
        let m = (times[2] < 10) ? '0' + times[2] : times[2];
        let s = (times[3] < 10) ? '0' + times[3] : times[3];
        showTimer(d, h, m, s);
      }, 1000);
    };
    let showTimer = (day, hour, min, sec) => {
      days.innerHTML = day;
      hours.innerHTML = hour;
      minutes.innerHTML = min;
      seconds.innerHTML = sec;
    }
    timer(times);
  }
})();

// Слайдер врачей
let staffItem = document.querySelectorAll('.staff__item');
let staffButtonPrev = document.querySelector('.staff__button--prev');
let staffButtonNext = document.querySelector('.staff__button--next');
let staffButtonsList = document.querySelector('.staff__buttons-list');


// Попап
let toCallPopup = document.querySelector('.popup__child');
let childOverlay = document.querySelector('.childform__overlay');
let childForm = document.querySelector('.childform');
let childFormClose = document.querySelector('.childform__close');
if (toCallPopup) {
  toCallPopup.addEventListener('click', function() {
    childForm.classList.add('childform--show');
    childOverlay.classList.add('childform__overlay--show');
  });
  childFormClose.addEventListener('click', function() {
    childForm.classList.remove('childform--show');
    childOverlay.classList.remove('childform__overlay--show');
  });
  childOverlay.addEventListener('click', function() {
    childForm.classList.remove('childform--show');
    childOverlay.classList.remove('childform__overlay--show');
  });
}

// Слайдер отзывов
let reviewSlides = document.querySelectorAll('.reviews__item');
if (reviewSlides.length) {
  let reviewSlidesCount = 0;
  for (let i = 0; i < reviewSlides.length; i++) {
    reviewSlidesCount++;
    console.log(window.getComputedStyle(reviewSlides[i]).transform);
  }

  let reviewSlidesButtonList = document.querySelector('.reviews__button-list');
  for (let i = 0; i < reviewSlidesCount; i++) {
    let reviewSlidesButton = document.createElement('button');
    reviewSlidesButton.classList.add('reviews__button-item');
    reviewSlidesButtonList.append(reviewSlidesButton);
  }

  reviewSlidesButtonList.childNodes[0].classList.add('reviews__button-item--active');

  for (let i = 0; i < reviewSlides.length; i++) {
    // reviewSlides[i].style.left = (i * 100) + '%';
    reviewSlides[i].style.transform = "translate(" + (i * document.documentElement.clientWidth) + ")";
  }

  function showReviews() {
    for (let i = 0; i < reviewSlidesCount; i++) {
      if (reviewSlidesButtonList.childNodes[i].classList.contains('reviews__button-item--active')) {
        for (let j = 0; j < reviewSlides.length; j++) {
          reviewSlides[j].style.left = (j * 100) - (i * 100) + '%';
        }
      }
    }
  }

  function prevReviews() {
    let x = 0;
    for (let i = 0; i < reviewSlidesCount; i++) {
      if (reviewSlidesButtonList.childNodes[i].classList.contains('reviews__button-item--active')) {
        x = i;
      }
    }
    reviewSlidesButtonList.childNodes[x].classList.remove('reviews__button-item--active');
    if (x == 0) {
      reviewSlidesButtonList.lastChild.classList.add('reviews__button-item--active');
    } else {
      reviewSlidesButtonList.childNodes[x - 1].classList.add('reviews__button-item--active');
    }
    showReviews();
  }

  function nextReviews() {
    let x = 0;
    for (let i = 0; i < reviewSlidesCount; i++) {
      if (reviewSlidesButtonList.childNodes[i].classList.contains('reviews__button-item--active')) {
        x = i;
      }
    }
    reviewSlidesButtonList.childNodes[x].classList.remove('reviews__button-item--active');
    if (x == (reviewSlidesCount - 1)) {
      reviewSlidesButtonList.firstChild.classList.add('reviews__button-item--active');
    } else {
      reviewSlidesButtonList.childNodes[x + 1].classList.add('reviews__button-item--active');
    }
    showReviews();
  }

  for (let i = 0; i < reviewSlidesCount; i++) {
    reviewSlidesButtonList.childNodes[i].addEventListener('click', function() {
      for (let j = 0; j < reviewSlides.length; j++) {
        reviewSlidesButtonList.childNodes[j].classList.remove('reviews__button-item--active')
      }
      reviewSlidesButtonList.childNodes[i].classList.add('reviews__button-item--active');
      showReviews();
    });
  }

  let reviewSlidesPrevButton = document.querySelector('.reviews__button--prev');
  reviewSlidesPrevButton.addEventListener('click', prevReviews);

  let reviewSlidesNextButton = document.querySelector('.reviews__button--next');
  reviewSlidesNextButton.addEventListener('click', nextReviews);
}
