"use strict";
!function(e,n,A){function o(e,n){return typeof e===n}function t(){var e,n,A,t,a,i,l;for(var f in r)if(r.hasOwnProperty(f)){if(e=[],n=r[f],n.name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(A=0;A<n.options.aliases.length;A++)e.push(n.options.aliases[A].toLowerCase());for(t=o(n.fn,"function")?n.fn():n.fn,a=0;a<e.length;a++)i=e[a],l=i.split("."),1===l.length?Modernizr[l[0]]=t:(!Modernizr[l[0]]||Modernizr[l[0]]instanceof Boolean||(Modernizr[l[0]]=new Boolean(Modernizr[l[0]])),Modernizr[l[0]][l[1]]=t),s.push((t?"":"no-")+l.join("-"))}}function a(e){var n=u.className,A=Modernizr._config.classPrefix||"";if(c&&(n=n.baseVal),Modernizr._config.enableJSClass){var o=new RegExp("(^|\\s)"+A+"no-js(\\s|$)");n=n.replace(o,"$1"+A+"js$2")}Modernizr._config.enableClasses&&(n+=" "+A+e.join(" "+A),c?u.className.baseVal=n:u.className=n)}function i(e,n){if("object"==typeof e)for(var A in e)f(e,A)&&i(A,e[A]);else{e=e.toLowerCase();var o=e.split("."),t=Modernizr[o[0]];if(2==o.length&&(t=t[o[1]]),"undefined"!=typeof t)return Modernizr;n="function"==typeof n?n():n,1==o.length?Modernizr[o[0]]=n:(!Modernizr[o[0]]||Modernizr[o[0]]instanceof Boolean||(Modernizr[o[0]]=new Boolean(Modernizr[o[0]])),Modernizr[o[0]][o[1]]=n),a([(n&&0!=n?"":"no-")+o.join("-")]),Modernizr._trigger(e,n)}return Modernizr}var s=[],r=[],l={_version:"3.6.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var A=this;setTimeout(function(){n(A[e])},0)},addTest:function(e,n,A){r.push({name:e,fn:n,options:A})},addAsyncTest:function(e){r.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=l,Modernizr=new Modernizr;var f,u=n.documentElement,c="svg"===u.nodeName.toLowerCase();!function(){var e={}.hasOwnProperty;f=o(e,"undefined")||o(e.call,"undefined")?function(e,n){return n in e&&o(e.constructor.prototype[n],"undefined")}:function(n,A){return e.call(n,A)}}(),l._l={},l.on=function(e,n){this._l[e]||(this._l[e]=[]),this._l[e].push(n),Modernizr.hasOwnProperty(e)&&setTimeout(function(){Modernizr._trigger(e,Modernizr[e])},0)},l._trigger=function(e,n){if(this._l[e]){var A=this._l[e];setTimeout(function(){var e,o;for(e=0;e<A.length;e++)(o=A[e])(n)},0),delete this._l[e]}},Modernizr._q.push(function(){l.addTest=i}),Modernizr.addAsyncTest(function(){function e(e,n,A){function o(n){var o=n&&"load"===n.type?1==t.width:!1,a="webp"===e;i(e,a&&o?new Boolean(o):o),A&&A(n)}var t=new Image;t.onerror=o,t.onload=o,t.src=n}var n=[{uri:"data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoBAAEAAwA0JaQAA3AA/vuUAAA=",name:"webp"},{uri:"data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA==",name:"webp.alpha"},{uri:"data:image/webp;base64,UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA",name:"webp.animation"},{uri:"data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=",name:"webp.lossless"}],A=n.shift();e(A.name,A.uri,function(A){if(A&&"load"===A.type)for(var o=0;o<n.length;o++)e(n[o].name,n[o].uri)})}),t(),a(s),delete l.addTest,delete l.addAsyncTest;for(var p=0;p<Modernizr._q.length;p++)Modernizr._q[p]();e.Modernizr=Modernizr}(window,document);
Modernizr.on('webp', function(result) {
  if (result) {
    document.body.classList.add('webp');
  } else {
    document.body.classList.add('no-webp');
  }
});
var popupOverlay = document.querySelector('.popup__overlay');
// Выбор города
let topHeaderPlaceSelect = document.querySelector('.top-header__place-select');
if (topHeaderPlaceSelect) {
  let topHeaderPlaceOptions = document.querySelector('.top-header__place-options');
  topHeaderPlaceSelect.addEventListener('click', function() {
    if (topHeaderPlaceOptions.classList.contains('top-header__place-options--show')) {
      topHeaderPlaceOptions.classList.remove('top-header__place-options--show');
    } else {
      topHeaderPlaceOptions.classList.add('top-header__place-options--show');
    }
  })
}

// Меню
let mainNavButton = document.querySelector('.main-nav__nav-button');
if (mainNavButton) {
  let mainNavClose = document.querySelector('.main-nav__close-button');
  let mainNavWrapper = document.querySelector('.main-nav__wrapper');
  let mainNavItemButton = document.querySelectorAll('.main-nav__item-button');
  mainNavButton.addEventListener('click', function() {
    mainNavWrapper.classList.add('main-nav__wrapper--show');
  });
  mainNavClose.addEventListener('click', function() {
    mainNavWrapper.classList.remove('main-nav__wrapper--show');
  });
  mainNavItemButton.forEach((item, i) => {
    item.addEventListener('click', function() {
      if (item.classList.contains('main-nav__item-button--show')) {
        item.classList.remove('main-nav__item-button--show');
      } else {
        item.classList.add('main-nav__item-button--show');
      };
    })
  });
}

// Появление меню услуг
let mainNavItemServices = document.querySelector('.main-nav__item--services');
if (mainNavItemServices) {
  let mainNavItemServicesLink = document.querySelector('.main-nav__item--services-link');
  let newServicesWrapper = document.querySelector('.new-services__wrapper');
  let newServicesCloseButton = document.querySelector('.new-services__close-button')

  if (window.matchMedia('(min-width: 1024px)').matches) {
    mainNavItemServicesLink.removeAttribute('href');
    mainNavItemServices.addEventListener('click', function() {
      if (newServicesWrapper.classList.contains('new-services__wrapper--active')) {
        newServicesWrapper.classList.remove('new-services__wrapper--active');
      } else {
        newServicesWrapper.classList.add('new-services__wrapper--active');
      }
    });
    newServicesCloseButton.addEventListener('click', function(event) {
      newServicesWrapper.classList.remove('new-services__wrapper--active');
    });
  }

  let newServicesItems = document.querySelectorAll('.new-services__item');
  let newServicesBlockItems = document.querySelectorAll('.new-services__block-item');
  function showServiceBlockItem(i) {
    for (let j = 0; j < newServicesBlockItems.length; j++) {
      newServicesBlockItems[j].classList.remove('new-services__block-item--active');
    }
    newServicesBlockItems[i].classList.add('new-services__block-item--active');
  };
  newServicesItems.forEach((item, i) => {
    item.addEventListener('click', function(event) {
      for (let j = 0; j < newServicesItems.length; j++) {
        newServicesItems[j].classList.remove('new-services__item--active');
      }
      item.classList.add('new-services__item--active');
      showServiceBlockItem(i);
    })
  });
}

// var newServicesItems = document.querySelectorAll('.new-services__item');
// var newServicesBlockItems = document.querySelectorAll('.new-services__block-item');
// function showServiceBlockItem(i) {
//   for (var j = 0; j < newServicesBlockItems.length; j++) {
//     newServicesBlockItems[j].classList.remove('new-services__block-item--active');
//   }
//   newServicesBlockItems[i].classList.add('new-services__block-item--active');
// }
// newServicesItems.forEach((item, i) => {
//   item.addEventListener('click', function(event) {
//     for (var j = 0; j < newServicesItems.length; j++) {
//       newServicesItems[j].classList.remove('new-services__item--active');
//     }
//     item.classList.add('new-services__item--active');
//     showServiceBlockItem(i);
//   })
// });

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
  pacientNumber.innerHTML = (0 + '+');
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
          pacientNumber.innerHTML = (Math.floor(lastPacientNumber / 100 * numberCount) + '+');
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
if (staffMainWebp) {
  let staffMainImg = document.querySelector('.staff__main-img');
  let staffText = document.querySelector('.staff__text');
  let staffList = document.querySelector('.staff__list');
  let staffListInner = document.querySelector('.staff__list-inner');
  let staffItems = document.querySelectorAll('.staff__item-inner');
  let staffNumSpan = document.querySelector('.staff__numspan');
  let staffButtonPrev = document.querySelector('.staff__button--prev');
  let staffButtonNext = document.querySelector('.staff__button--next');
  let staffWidth = window.innerWidth - 80;
  let staffNumber = 0;
  // staffButtonPrev.setAttribute('disabled', 'disabled');
  staffNumSpan.innerHTML = "1/" + staffItems.length;
  // staffListInner.style.height = staffItems[0].offsetHeight + "px";
  if (window.matchMedia('(max-width: 767px)').matches) {
    staffListInner.style.width = (staffItems.length * (window.innerWidth - 80)) + "px";
    staffListInner.style.transform = "translateX(0px)";
    staffItems.forEach((item, i) => {
      item.style.width = (window.innerWidth - 80) + "px";
    });
    let staffMove = parseInt(staffListInner.style.transform.match(/\d+/));
    staffButtonNext.addEventListener('click', function() {
      staffMove = parseInt(staffListInner.style.transform.match(/\d+/));
      if ((staffMove + staffWidth) < (staffItems.length * staffWidth)) {
        staffListInner.style.transform = "translateX(-" + (staffMove + staffWidth) + "px)";
        staffNumber = staffMove / staffWidth + 2;
        staffNumSpan.innerHTML = staffNumber + "/" + staffItems.length;
        staffListInner.style.height = staffItems[staffNumber - 1].offsetHeight + "px";
      };
    });
    staffButtonPrev.addEventListener('click', function() {
      staffMove = parseInt(staffListInner.style.transform.match(/\d+/));
      if (staffNumber != 1) {
        staffListInner.style.transform = "translateX(-" + (staffMove - staffWidth) + "px)";
        staffNumber = staffMove / staffWidth;
        staffNumSpan.innerHTML = staffNumber + "/" + staffItems.length;
        staffListInner.style.height = staffItems[staffNumber - 1].offsetHeight + "px";
      };
    });
  } else if (window.matchMedia('(max-width: 1023px)').matches) {
    staffListInner.style.width = (Math.floor(staffItems.length / 2) * (window.innerWidth - 100)) + "px";
    staffWidth = window.innerWidth - 100;
    staffListInner.style.transform = "translateX(0px)";
    let staffMove = parseInt(staffListInner.style.transform.match(/\d+/));
    staffButtonNext.addEventListener('click', function() {
      staffMove = parseInt(staffListInner.style.transform.match(/\d+/));
      staffListInner.style.transform = "translateX(-" + (staffMove + staffWidth) + "px)";
      staffNumber = staffMove / staffWidth + 2;
      staffNumSpan.innerHTML = Math.floor(staffNumber / 2) + "/" + Math.floor(staffItems.length / 2);
    });
    staffButtonPrev.addEventListener('click', function() {
      staffMove = parseInt(staffListInner.style.transform.match(/\d+/));
      staffListInner.style.transform = "translateX(-" + (staffMove - staffWidth) + "px)";
      staffNumber = staffMove / staffWidth;
      staffNumSpan.innerHTML = Math.floor(staffNumber / 2) + "/" + Math.floor(staffItems.length / 2);
    });
  } else {
    staffItems.forEach((item, i) => {
      item.addEventListener('click', function() {
        staffMainWebp.attributes.srcset.textContent = item.querySelector('.staff__item-webp').attributes.srcset.textContent;
        staffMainImg.attributes.src.textContent = item.querySelector('.staff__item-img').attributes.src.textContent;
        staffText.innerHTML = item.querySelector('.staff__text-block').innerHTML;
      })
    });
  }
};

// Фотогалерея
let galleryMainWebp = document.querySelector('.gallery__main-webp');
if (galleryMainWebp) {
  let galleryMainImg = document.querySelector('.gallery__main-img');
  let galleryItems = document.querySelectorAll('.gallery__photo-item');
  let galleryNumSpan = document.querySelector('.gallery__numspan');
  let galleryAllNum = galleryItems.length;
  let galleryPrevButton = document.querySelector('.gallery__button-left');
  let galleryNextButton = document.querySelector('.gallery__button-right');
  function showGalleryPhoto(i) {
    galleryNumSpan.innerHTML = (i+1) + "/" + galleryAllNum;
    galleryItems[i].classList.add('gallery__photo-item--active');
    galleryMainWebp.attributes.srcset.textContent = galleryItems[i].querySelector('.gallery__item-webp').attributes.srcset.textContent;
    galleryMainImg.attributes.src.textContent = galleryItems[i].querySelector('.gallery__item-img').attributes.src.textContent;
  }
  function galeryCheckButtons() {
    if (galleryItems[0].classList.contains('gallery__photo-item--active')) {
      galleryPrevButton.setAttribute('disabled', 'disabled');
    };
    if (galleryItems[galleryItems.length-1].classList.contains('gallery__photo-item--active')) {
      galleryNextButton.setAttribute('disabled', 'disabled');
    }
  }
  function galleryEnableButtons() {
    galleryPrevButton.removeAttribute('disabled');
    galleryNextButton.removeAttribute('disabled');
  }
  galeryCheckButtons();
  galleryItems.forEach((item, i) => {
    item.addEventListener('click', function() {
      for (let j = 0; j < galleryItems.length; j++) {
        galleryItems[j].classList.remove('gallery__photo-item--active')
      }
      showGalleryPhoto(i);
      galleryEnableButtons();
      galeryCheckButtons();
    })
  });
  galleryPrevButton.addEventListener('click', function () {
    for (let j = 0; j < galleryItems.length; j++) {
      if (galleryItems[j].classList.contains('gallery__photo-item--active')) {
        if (j != 0) {
          galleryItems[j].classList.remove('gallery__photo-item--active');
          showGalleryPhoto(j-1);
          galleryEnableButtons();
          galeryCheckButtons();
        };
        break;
      }
    }
  });
  galleryNextButton.addEventListener('click', function () {
    for (let j = 0; j < galleryItems.length; j++) {
      if (galleryItems[j].classList.contains('gallery__photo-item--active')) {
        if (j != (galleryItems.length - 1)) {
          galleryItems[j].classList.remove('gallery__photo-item--active');
          showGalleryPhoto(j+1);
          galleryEnableButtons();
          galeryCheckButtons();
        };
        break;
      }
    }
  });
};

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

// Детская форма попап
let toCallPopup = document.querySelector('.popup__child');
if (toCallPopup) {
  let childForm = document.querySelector('.childform');
  let childFormClose = document.querySelector('.childform__close');
  if (toCallPopup) {
    toCallPopup.addEventListener('click', function() {
      childForm.classList.add('childform--show');
      popupOverlay.classList.add('popup__overlay--show');
    });
    childFormClose.addEventListener('click', function() {
      childForm.classList.remove('childform--show');
      popupOverlay.classList.remove('popup__overlay--show');
    });
    popupOverlay.addEventListener('click', function() {
      childForm.classList.remove('childform--show');
      popupOverlay.classList.remove('popup__overlay--show');
    });
  };
}

// Взрослая форма попап
let formCallPopup = document.querySelectorAll('.form__call-popup');
if (formCallPopup.length) {
  let ainurForm = document.querySelector('.ainur-form');
  let ainurFormClose = document.querySelector('.ainur-form__close');
  formCallPopup.forEach((item, i) => {
    item.addEventListener('click', function() {
      ainurForm.classList.add('ainur-form--show');
      popupOverlay.classList.add('popup__overlay--show');
    });
  });
  ainurFormClose.addEventListener('click', function() {
    ainurForm.classList.remove('ainur-form--show');
    popupOverlay.classList.remove('popup__overlay--show');
  });
  popupOverlay.addEventListener('click', function() {
    ainurForm.classList.remove('ainur-form--show');
    popupOverlay.classList.remove('popup__overlay--show');
  });
};

// Слайдер отзывов
let reviewSlides = document.querySelectorAll('.reviews__item');
if (reviewSlides.length) {
  let reviewWrapper = document.querySelector('.reviews__wrapper');
  let reviewButtonPrev = document.querySelector('.reviews__button--prev');
  let reviewButtonNext = document.querySelector('.reviews__button--next');
  let reviewWidth = window.innerWidth;
  let reviewMove = 0;
  if (window.matchMedia('(max-width: 1199px)').matches) {
    reviewWrapper.style.transform = "translateX(0px)";
    reviewMove = parseInt(reviewWrapper.style.transform.match(/\d+/));
    reviewButtonNext.addEventListener('click', function() {
      reviewMove = parseInt(reviewWrapper.style.transform.match(/\d+/));
      if (window.matchMedia('(max-width: 767px)').matches) {
        if (reviewMove <= (reviewWidth * 2)) {
          reviewWrapper.style.transform = "translateX(-" + (reviewMove + reviewWidth) + "px)";
        }
      } else {
        if (reviewMove <= reviewWidth) {
          reviewWrapper.style.transform = "translateX(-" + (reviewMove + reviewWidth) + "px)";
        }
      }
    });
    reviewButtonPrev.addEventListener('click', function() {
      reviewMove = parseInt(reviewWrapper.style.transform.match(/\d+/));
      reviewWrapper.style.transform = "translateX(-" + (reviewMove - reviewWidth) + "px)";
    });
  }
}

// Accordion
let accordionItem = document.querySelectorAll('.accordion__item');
if (accordionItem) {
  accordionItem.forEach((item, i) => {
    item.addEventListener('click', function() {
      if (item.querySelector('.accordion__text').classList.contains('accordion__text--show')) {
        item.querySelector('.accordion__text').classList.remove('accordion__text--show');
        item.querySelector('.accordion__title').classList.remove('accordion__title--show');
      } else {
        item.querySelector('.accordion__text').classList.add('accordion__text--show');
        item.querySelector('.accordion__title').classList.add('accordion__title--show');
      }
    })
  });
}

// Цены
let ceniItem = document.querySelectorAll('.ceni__item');
if (ceniItem) {
  ceniItem.forEach((item, i) => {
    item.querySelector('.ceni__item-title').addEventListener('click', function() {
      if (item.querySelector('.ceni__table').classList.contains('ceni__table--show')) {
        item.querySelector('.ceni__table').classList.remove('ceni__table--show');
        item.querySelector('.ceni__item-title').classList.remove('ceni__item-title--show');
      } else {
        item.querySelector('.ceni__table').classList.add('ceni__table--show');
        item.querySelector('.ceni__item-title').classList.add('ceni__item-title--show');
      }
    })
  });
}

// Выбор города в вакансиях
// let vacanciesSelect = document.querySelector('.vacancies-main__select-options');
// if (vacanciesSelect) {
//   let vacanciesActualCity = document.querySelector('.vacancies-main__vacancies-actual-city');
//   let vacanciesCities = document.querySelectorAll('.vacancies-main__vacancies-city');
//   for (let i=0; i<vacanciesCities.length; i++) {
//     vacanciesSelect.options[i].addEventListener('click', function() {
//       for (let j=0; j<vacanciesCities.length; j++) {
//         vacanciesCities[j].classList.remove('vacancies-main__vacancies-city--active');
//       }
//       vacanciesCities[i].classList.add('vacancies-main__vacancies-city--active');
//       vacanciesActualCity.innerHTML = vacanciesCities[i].innerHTML;
//       let vacanciesItem = document.querySelectorAll('.vacancies-main__vacancies-item');
//       vacanciesItem.forEach((item, i) => {
//         item.querySelector('.vacancies-main__vacancy-title').addEventListener('click', function() {
//           if (item.querySelector('.vacancies-main__vacancy').classList.contains('vacancies-main__vacancy--show')) {
//             item.querySelector('.vacancies-main__vacancy').classList.remove('vacancies-main__vacancy--show');
//             item.querySelector('.vacancies-main__vacancy-title').classList.remove('vacancies-main__vacancy-title--show');
//           } else {
//             item.querySelector('.vacancies-main__vacancy').classList.add('vacancies-main__vacancy--show');
//             item.querySelector('.vacancies-main__vacancy-title').classList.add('vacancies-main__vacancy-title--show');
//           }
//         })
//       });
//     });
//   }
//   let vacanciesItem = document.querySelectorAll('.vacancies-main__vacancies-item');
//   vacanciesItem.forEach((item, i) => {
//     item.querySelector('.vacancies-main__vacancy-title').addEventListener('click', function() {
//       if (item.querySelector('.vacancies-main__vacancy').classList.contains('vacancies-main__vacancy--show')) {
//         item.querySelector('.vacancies-main__vacancy').classList.remove('vacancies-main__vacancy--show');
//         item.querySelector('.vacancies-main__vacancy-title').classList.remove('vacancies-main__vacancy-title--show');
//       } else {
//         item.querySelector('.vacancies-main__vacancy').classList.add('vacancies-main__vacancy--show');
//         item.querySelector('.vacancies-main__vacancy-title').classList.add('vacancies-main__vacancy-title--show');
//       }
//     })
//   });
// };

let vacanciesItem = document.querySelectorAll('.vacancies-main__vacancies-item');
vacanciesItem.forEach((item, i) => {
  item.querySelector('.vacancies-main__vacancy-title').addEventListener('click', function() {
    if (item.querySelector('.vacancies-main__vacancy').classList.contains('vacancies-main__vacancy--show')) {
      item.querySelector('.vacancies-main__vacancy').classList.remove('vacancies-main__vacancy--show');
      item.querySelector('.vacancies-main__vacancy-title').classList.remove('vacancies-main__vacancy-title--show');
    } else {
      item.querySelector('.vacancies-main__vacancy').classList.add('vacancies-main__vacancy--show');
      item.querySelector('.vacancies-main__vacancy-title').classList.add('vacancies-main__vacancy-title--show');
    }
  })
});

function fun1() {
  let vacanciesIndex = document.querySelector('.vacancies-main__select-options').selectedIndex;
  let vacanciesCities = document.querySelectorAll('.vacancies-main__vacancies-city');
  let vacanciesActualCity = document.querySelector('.vacancies-main__vacancies-actual-city');
  for (let j=0; j<vacanciesCities.length; j++) {
    vacanciesCities[j].classList.remove('vacancies-main__vacancies-city--active');
  };
  vacanciesCities[vacanciesIndex].classList.add('vacancies-main__vacancies-city--active');
  vacanciesActualCity.innerHTML = vacanciesCities[vacanciesIndex].innerHTML;
  let vacanciesItem = document.querySelectorAll('.vacancies-main__vacancies-item');
  vacanciesItem.forEach((item, i) => {
    item.querySelector('.vacancies-main__vacancy-title').addEventListener('click', function() {
      if (item.querySelector('.vacancies-main__vacancy').classList.contains('vacancies-main__vacancy--show')) {
        item.querySelector('.vacancies-main__vacancy').classList.remove('vacancies-main__vacancy--show');
        item.querySelector('.vacancies-main__vacancy-title').classList.remove('vacancies-main__vacancy-title--show');
      } else {
        item.querySelector('.vacancies-main__vacancy').classList.add('vacancies-main__vacancy--show');
        item.querySelector('.vacancies-main__vacancy-title').classList.add('vacancies-main__vacancy-title--show');
      }
    })
  });
};

// Поиск по ценам
let searchInput = document.querySelector('.ceni__search-input');
if (searchInput) {
  window.onload = () => {
    let listPrices = document.querySelectorAll('.ceni__wrapper td');
    let searchTable = document.querySelector('.ceni__search-table');
    let tBody = document.querySelector('.ceni__search-tbody');
    let tableTitles = document.querySelectorAll('.ceni__item-title');
    let searchInfo = document.querySelector('.ceni__search-info');
    let searchCount = 0;
    searchInput.oninput = function() {
      let value = this.value.trim();
      let someClone;
      let someTitle;
      let tableTitlesShow = [];
      for (let i = 0; i < tableTitles.length; i++) {
        tableTitlesShow[i] = 0;
      }
      tBody.innerHTML = '';
      searchCount = 0;
      searchInfo.innerHTML = '';
      searchTable.classList.remove('ceni__search-table--show');
      if (value) {
        listPrices.forEach(elem => {
          if (elem.innerText.search(value) != -1) {
            someClone = elem.parentNode.cloneNode(true);
            if (!elem.classList.contains('ceni__item-strong')) {
              someTitle = elem.parentNode.parentNode.parentNode.parentNode.firstChild.innerHTML;
              tableTitles.forEach((item, i) => {
                if ((someTitle == item.innerHTML) && (!tableTitlesShow[i])) {
                  let someRow = document.createElement('tr');
                  someRow.classList.add('ceni__search-title');
                  someRow.innerHTML = item.innerHTML;
                  tBody.append(someRow);
                  tableTitlesShow[i] = 1;
                }
              });
              tBody.appendChild(someClone);
              searchTable.classList.add('ceni__search-table--show');
              searchCount++;
            }
          };
        });
        searchInfo.innerHTML = 'Найдено ' + searchCount + ' свопадений';
      } else {
        listPrices.forEach(elem => {
          tBody.innerHTML = '';
          searchTable.classList.remove('ceni__search-table--show');
          searchCount = 0;
        });
      }
    }
  }
};

// Галерея лицензий
let licensesList = document.querySelectorAll('.pravovaya-informaciya__item');
if (licensesList.length) {
  let licenseShowed = document.querySelector('.pravovaya-informaciya__showed-license');
  let licenseClose = document.querySelector('.pravovaya-informaciya__close');
  let licensePrevButton = document.querySelector('.pravovaya-informaciya__button--prev');
  let licenseNextButton = document.querySelector('.pravovaya-informaciya__button--next');
  licensesList.forEach((item, i) => {
    item.addEventListener('click', function() {
      licenseShowed.classList.add('pravovaya-informaciya__showed-license--show');
      licenseShowed.querySelector('source').attributes.srcset.textContent = item.querySelector('source').attributes.srcset.textContent;
      licenseShowed.querySelector('img').attributes.src.textContent = item.querySelector('img').attributes.src.textContent;
      popupOverlay.classList.add('popup__overlay--show');
    });
  });
  licenseClose.addEventListener('click', function() {
    licenseShowed.classList.remove('pravovaya-informaciya__showed-license--show');
    popupOverlay.classList.remove('popup__overlay--show');
  });
  popupOverlay.addEventListener('click', function() {
    licenseShowed.classList.remove('pravovaya-informaciya__showed-license--show');
    popupOverlay.classList.remove('popup__overlay--show');
  });
  licensePrevButton.addEventListener('click', function() {
    let licenseNumber = licenseShowed.querySelector('img').attributes.src.textContent;
    licenseNumber = parseInt(licenseNumber.match(/\d+/));
    if (licenseNumber == 1) {
      licenseShowed.querySelector('source').attributes.srcset.textContent = 'img/license' + (licensesList.length) + '.webp';
      licenseShowed.querySelector('img').attributes.src.textContent = 'img/license' + (licensesList.length) + '.jpg';
    } else {
      licenseShowed.querySelector('source').attributes.srcset.textContent = 'img/license' + (licenseNumber - 1) + '.webp';
      licenseShowed.querySelector('img').attributes.src.textContent = 'img/license' + (licenseNumber - 1) + '.jpg';
    }
  });
  licenseNextButton.addEventListener('click', function() {
    let licenseNumber = licenseShowed.querySelector('img').attributes.src.textContent;
    licenseNumber = parseInt(licenseNumber.match(/\d+/));
    if (licenseNumber == 5) {
      licenseShowed.querySelector('source').attributes.srcset.textContent = 'img/license1.webp';
      licenseShowed.querySelector('img').attributes.src.textContent = 'img/license1.jpg';
    } else {
      licenseShowed.querySelector('source').attributes.srcset.textContent = 'img/license' + (licenseNumber + 1) + '.webp';
      licenseShowed.querySelector('img').attributes.src.textContent = 'img/license' + (licenseNumber + 1) + '.jpg';
    }
  });
}

// Галерея сертификатов
let certificateList = document.querySelector('.some-staff__certificate-list');
if (certificateList) {
  let certificateWrapper = document.querySelector('.some-staff__certificate');
  let certificateItem = document.querySelectorAll('.some-staff__certificate-item');
  certificateList.style.width = '' + (certificateItem.length * 100) + '%';
  let certificateWidth;
  let certificatePrevButton = document.querySelector('.some-staff__button--prev');
  let certificateNextButton = document.querySelector('.some-staff__button--next');
  let certificateButtonList = document.querySelector('.some-staff__button-list');
  let certificateClose = document.querySelector('.some-staff__close');
  let certificateMove;
  let posInit;
  let posFinal;
  let posX1;
  let posX2;
  let slideIndex = 0;

  function isMobile() {
    if (window.matchMedia('(max-width: 767px)').matches) {
      return true;
    }
  };
  function isTablet() {
    if ((window.matchMedia('(max-width: 1023px)').matches) && (window.matchMedia('(min-width: 768px)').matches)) {
      return true;
    }
  };
  function isLaptop() {
    if (window.matchMedia('(max-width: 1200px)').matches) {
      return true;
    }
  };

  // Переключение слайдера
  function certificateSwitchSlide(x) {
    event.preventDefault();
    certificateButtonList.childNodes.forEach((item, i) => {
      if (item.classList.contains('some-staff__button-item--active')) {
        item.classList.remove('some-staff__button-item--active');
      }
    });
    if (window.matchMedia('(max-width: 767px)').matches) {
      certificateList.style.transform = "translateX(-" + (x * certificateWidth) + "px)";
      certificateButtonList.childNodes[x].classList.add('some-staff__button-item--active');
    } else if (window.matchMedia('(max-width: 1023px)').matches) {
      if (certificateWrapper.classList.contains('some-staff__certificate--show')) {
        certificateList.style.transform = "translateX(-" + (x * certificateWidth) + "px)";
        certificateButtonList.childNodes[x].classList.add('some-staff__button-item--active');
      } else {
        if (x < (certificateItem.length - 1)) {
          certificateList.style.transform = "translateX(-" + (x * (certificateWidth/2)) + "px)";
        };
        if (x == (certificateItem.length - 2)) {
          certificateList.style.transform = "translateX(-" + (x * (certificateWidth/2)) + "px)";
          certificateButtonList.lastChild.classList.add('some-staff__button-item--active');
        } else {
          certificateButtonList.childNodes[Math.floor(x / 2)].classList.add('some-staff__button-item--active');
        };
      }
    } else if (window.matchMedia('(max-width: 1200px)').matches) {
      if (x < (certificateItem.length - 1)) {
        certificateList.style.transform = "translateX(-" + (x * (certificateWidth/3)) + "px)";
      };
      if ((x == (certificateItem.length - 2)) || (x == (certificateItem.length - 3))) {
        certificateList.style.transform = "translateX(-" + (x * (certificateWidth/3)) + "px)";
        certificateButtonList.lastChild.classList.add('some-staff__button-item--active');
      } else {
        certificateButtonList.childNodes[Math.floor(x / 3)].classList.add('some-staff__button-item--active');
      };
    } else {}
  };

  // События движения тач-слайдера
  function getEvent() {
    return (event.type.search('touch') !== -1) ? event.touches[0] : event;
  };

  // Кнопка перключения следующего слайда
  certificateNextButton.addEventListener('click', function() {
    event.preventDefault();
    if (window.matchMedia('(max-width: 767px)').matches) {
      if (slideIndex < (certificateItem.length - 1)) {
        certificateSwitchSlide(++slideIndex);
      }
    } else if (window.matchMedia('(max-width: 1023px)').matches) {
      if (certificateWrapper.classList.contains('some-staff__certificate--show')) {
        if (slideIndex < (certificateItem.length - 1)) {
          certificateSwitchSlide(++slideIndex);
        }
      } else {
        if (slideIndex < (certificateItem.length - 2)) {
          certificateSwitchSlide(++slideIndex);
        }
      }
    } else if (window.matchMedia('(max-width: 1200px)').matches) {
      if (slideIndex < (certificateItem.length - 3)) {
        certificateSwitchSlide(++slideIndex);
      }
    } else {};
  });

  // Кнопка перключения предыдущего слайда
  certificatePrevButton.addEventListener('click', function() {
    event.preventDefault();
    if (slideIndex > 0) {
      certificateSwitchSlide(--slideIndex);
    }
  });

  // Включение попап галереи
  function bigGallery(x) {
    certificateWrapper.classList.add('some-staff__certificate--show');
    popupOverlay.classList.add('popup__overlay--show');
    certificateWidth = window.innerWidth - 200;
    certificateList.style.width = (certificateItem.length * certificateWidth) + "px";
    while (certificateButtonList.firstChild) {
      certificateButtonList.removeChild(certificateButtonList.firstChild);
    }
    for (let i = 0; i < certificateItem.length; i++) {
      let certificateButtonItem = document.createElement('button');
      certificateButtonItem.classList.add('some-staff__button-item');
      certificateButtonList.append(certificateButtonItem);
    };
    certificateButtonList.childNodes[x].classList.add('some-staff__button-item--active');
    certificateItem.forEach((item, i) => {
      item.style.width = certificateWidth + "px";
    });
    certificateList.style.transform = "translateX(-" + (x * certificateWidth) + "px)";
    certificateButtons()
  };

  // Три функции для перключения слайда скроллом
  function swipeStart() {
    certificateList.classList.remove('some-staff__certificate-list--tr');
    let evt = getEvent();
    posInit = posX1 = evt.clientX;
    certificateList.addEventListener('touchmove', swipeAction);
    certificateList.addEventListener('touchend', swipeEnd);
    certificateList.addEventListener('mousemove', swipeAction);
    certificateList.addEventListener('mouseup', swipeEnd);

    certificateList.classList.remove('some-staff__certificate-list--grab');
    certificateList.classList.add('some-staff__certificate-list--grabbing');
  };

  function swipeAction() {
    let evt = getEvent();
    let transform = parseInt(certificateList.style.transform.match(/\d+/));
    posX2 = posX1 - evt.clientX;
    posX1 = evt.clientX;
    certificateList.style.transform = "translateX(-" + (transform + posX2) + "px)";
  };

  function swipeEnd() {
    posFinal = posInit - posX1;
    certificateList.removeEventListener('touchmove', swipeAction);
    certificateList.removeEventListener('mousemove', swipeAction);
    certificateList.removeEventListener('touchend', swipeEnd);
    certificateList.removeEventListener('mouseup', swipeEnd);
    certificateList.classList.add('some-staff__certificate-list--tr');
    certificateList.classList.add('some-staff__certificate-list--grab');
    certificateList.classList.remove('some-staff__certificate-list--grabbing');

    if (Math.abs(posFinal) > (certificateWidth * 0.3)) {
      if (posInit < posX1) {
        if (slideIndex > 0) {
          certificateSwitchSlide(--slideIndex);
        } else {
          certificateSwitchSlide(slideIndex);
        }
      } else {
        if (window.matchMedia('(max-width: 767px)').matches) {
          if (slideIndex < (certificateItem.length - 1)) {
            certificateSwitchSlide(++slideIndex);
          } else {
            certificateSwitchSlide(slideIndex);
          }
        } else if (window.matchMedia('(max-width: 1023px)').matches) {
          if (certificateWrapper.classList.contains('some-staff__certificate--show')) {
            if (slideIndex < (certificateItem.length - 1)) {
              certificateSwitchSlide(++slideIndex);
            } else {
              certificateSwitchSlide(slideIndex);
            }
          } else {
            if (slideIndex < (certificateItem.length - 2)) {
              certificateSwitchSlide(++slideIndex);
            } else {
              certificateSwitchSlide(slideIndex);
            }
          }
        }
      };
    } else {
      certificateSwitchSlide(slideIndex);
    };
    if (!posFinal) {
      if (window.matchMedia('(max-width: 767px)').matches) {
        certificateWrapper.classList.add('some-staff__certificate--show');
        popupOverlay.classList.add('popup__overlay--show');
      } else if (window.matchMedia('(max-width: 1023px)').matches) {
        certificateItem.forEach((item, i) => {
          if (item.innerHTML == event.target.parentNode.parentNode.innerHTML) {
            slideIndex = i;
          }
        });
        bigGallery(slideIndex);
      }
    }
  };
  certificateList.addEventListener('touchstart', swipeStart);
  certificateList.addEventListener('mousedown', swipeStart);

  // Кнопки закрытия попап галереи
  popupOverlay.addEventListener('click', function() {
    certificateWrapper.classList.remove('some-staff__certificate--show');
    popupOverlay.classList.remove('popup__overlay--show');
    if (window.matchMedia('(max-width: 1023px)').matches) {
      if (slideIndex == (certificateItem.length - 1)) {
        riaSlider(--slideIndex);
      } else {
        riaSlider(slideIndex);
      }
    };
  });
  certificateClose.addEventListener('click', function() {
    certificateWrapper.classList.remove('some-staff__certificate--show');
    popupOverlay.classList.remove('popup__overlay--show');
    if (window.matchMedia('(max-width: 1023px)').matches) {
      if (slideIndex == (certificateItem.length - 1)) {
        riaSlider(--slideIndex);
      } else {
        riaSlider(slideIndex);
      }
    };
  });

  // Построение слайдера
  function riaSlider(x) {
    if (window.matchMedia('(max-width: 767px)').matches) {
      certificateWidth = window.innerWidth - 100;
      certificateList.style.width = (certificateItem.length * certificateWidth) + "px";
      certificateList.style.transform = "translateX(-" + (x * certificateWidth) + "px)";
      while (certificateButtonList.firstChild) {
        certificateButtonList.removeChild(certificateButtonList.firstChild);
      }
      for (let i = 0; i < certificateItem.length; i++) {
        let certificateButtonItem = document.createElement('button');
        certificateButtonItem.classList.add('some-staff__button-item');
        certificateButtonList.append(certificateButtonItem);
      };
      certificateButtonList.childNodes[x].classList.add('some-staff__button-item--active');
      certificateItem.forEach((item, i) => {
        item.style.width = certificateWidth + "px";
      });
    } else if (window.matchMedia('(max-width: 1023px)').matches) {
      certificateWidth = window.innerWidth - 160;
      certificateList.style.width = ((certificateItem.length / 2) * certificateWidth) + "px";
      while (certificateButtonList.firstChild) {
        certificateButtonList.removeChild(certificateButtonList.firstChild);
      };
      for (let i = 0; i < (certificateItem.length / 2); i++) {
        let certificateButtonItem = document.createElement('button');
        certificateButtonItem.classList.add('some-staff__button-item');
        certificateButtonList.append(certificateButtonItem);
      };
      if (x < (certificateItem.length - 1)) {
        certificateList.style.transform = "translateX(-" + (x * (certificateWidth/2)) + "px)";
      };
      if (x == (certificateItem.length - 2)) {
        certificateList.style.transform = "translateX(-" + (x * (certificateWidth/2)) + "px)";
        certificateButtonList.lastChild.classList.add('some-staff__button-item--active');
      } else {
        certificateButtonList.childNodes[Math.floor(x / 2)].classList.add('some-staff__button-item--active');
      };
      if ((certificateItem.length % 2) != 0) {
        certificateItem.forEach((item, i) => {
          item.style.width = (certificateWidth / 2) + 'px';
        });
      };
    } else if (window.matchMedia('(max-width: 1200px)').matches) {
      certificateWidth = window.innerWidth - 200;
      certificateList.style.width = ((certificateItem.length / 3) * certificateWidth) + "px";
      while (certificateButtonList.firstChild) {
        certificateButtonList.removeChild(certificateButtonList.firstChild);
      };
      for (let i = 0; i < (certificateItem.length / 3); i++) {
        let certificateButtonItem = document.createElement('button');
        certificateButtonItem.classList.add('some-staff__button-item');
        certificateButtonList.append(certificateButtonItem);
      };
      if (x < (certificateItem.length - 1)) {
        certificateList.style.transform = "translateX(-" + (x * (certificateWidth/2)) + "px)";
      };
      if ((x == (certificateItem.length - 2)) || (x == (certificateItem.length - 2))) {
        certificateList.style.transform = "translateX(-" + (x * (certificateWidth/2)) + "px)";
        certificateButtonList.lastChild.classList.add('some-staff__button-item--active');
      } else {
        certificateButtonList.childNodes[Math.floor(x / 3)].classList.add('some-staff__button-item--active');
      };
      if ((certificateItem.length % 3) != 0) {
        certificateItem.forEach((item, i) => {
          item.style.width = (certificateWidth / 3) + 'px';
        });
      };
    } else {}
    certificateButtons();
  };

  // Переключение слайда по нижним кнопкам
  function certificateButtons() {
    certificateButtonList.childNodes.forEach((item, i) => {
      if (window.matchMedia('(max-width: 767px)').matches) {
        item.addEventListener('click', function() {
          certificateSwitchSlide(i);
          slideIndex = i;
        })
      } else if (window.matchMedia('(max-width: 1023px)').matches) {
        if (certificateWrapper.classList.contains('some-staff__certificate--show')) {
          item.addEventListener('click', function() {
            certificateSwitchSlide(i);
            slideIndex = i;
          })
        } else {
          item.addEventListener('click', function() {
            if (((i + 1) * 2) < certificateItem.length) {
              certificateSwitchSlide(i*2);
              slideIndex = i*2;
            } else {
              certificateSwitchSlide(certificateItem.length - 2);
              slideIndex = certificateItem.length - 2;
            }
          })
        }
      } else if (window.matchMedia('(max-width: 1200px)').matches) {
        
      }
    });
  }

  riaSlider(0);


  // if (window.matchMedia('(max-width: 767px)').matches) {
  //   certificateWidth = window.innerWidth - 100;
  //   certificateList.style.width = (certificateItem.length * certificateWidth) + "px";
  //   certificateList.style.transform = "translateX(0px)";
  //   for (let i = 0; i < certificateItem.length; i++) {
  //     let certificateButtonItem = document.createElement('button');
  //     certificateButtonItem.classList.add('some-staff__button-item');
  //     certificateButtonList.append(certificateButtonItem);
  //   };
  //   certificateButtonList.childNodes[0].classList.add('some-staff__button-item--active');
  //   certificateItem.forEach((item, i) => {
  //     item.style.width = certificateWidth + "px";
  //   });
  //   // function certificateSwitchSlide(x) {
  //   //   event.preventDefault();
  //   //   certificateButtonList.childNodes.forEach((item, i) => {
  //   //     if (item.classList.contains('some-staff__button-item--active')) {
  //   //       item.classList.remove('some-staff__button-item--active');
  //   //     }
  //   //   });
  //   //   certificateList.style.transform = "translateX(-" + (x * certificateWidth) + "px)";
  //   //   certificateButtonList.childNodes[x].classList.add('some-staff__button-item--active');
  //   // };
  //   // function swipeEnd() {
  //   //   posFinal = posInit - posX1;
  //   //   certificateList.removeEventListener('touchmove', swipeAction);
  //   //   certificateList.removeEventListener('touchend', swipeEnd);
  //   //   certificateList.classList.add('some-staff__certificate-list--tr');
  //   //
  //   //   if (Math.abs(posFinal) > (certificateWidth * 0.3)) {
  //   //     if (posInit < posX1) {
  //   //       if (slideIndex > 0) {
  //   //         certificateSwitchSlide(--slideIndex);
  //   //       } else {
  //   //         certificateSwitchSlide(slideIndex);
  //   //       }
  //   //     } else {
  //   //       if (slideIndex < (certificateItem.length - 1)) {
  //   //         certificateSwitchSlide(++slideIndex);
  //   //       } else {
  //   //         certificateSwitchSlide(slideIndex);
  //   //       }
  //   //     };
  //   //   } else {
  //   //     certificateSwitchSlide(slideIndex);
  //   //   };
  //   //   if (!posFinal) {
  //   //     certificateWrapper.classList.add('some-staff__certificate--show');
  //   //     popupOverlay.classList.add('popup__overlay--show');
  //   //   }
  //   // }
  //   certificateList.addEventListener('touchstart', swipeStart);
  //   certificateButtonList.childNodes.forEach((item, i) => {
  //     item.addEventListener('click', function() {
  //       certificateSwitchSlide(i);
  //       slideIndex = i;
  //     })
  //   });
  // } else if (window.matchMedia('(max-width: 1023px)').matches) {
  //   certificateWidth = window.innerWidth - 160;
  //   certificateList.style.width = ((certificateItem.length / 2) * certificateWidth) + "px";
  //   certificateList.style.transform = "translateX(0px)";
  //   for (let i = 0; i < (certificateItem.length / 2); i++) {
  //     let certificateButtonItem = document.createElement('button');
  //     certificateButtonItem.classList.add('some-staff__button-item');
  //     certificateButtonList.append(certificateButtonItem);
  //   };
  //   certificateButtonList.childNodes[0].classList.add('some-staff__button-item--active');
  //   if ((certificateItem.length % 2) != 0) {
  //     certificateItem.forEach((item, i) => {
  //       item.style.width = (certificateWidth / 2) + 'px';
  //     });
  //   };
  //   // function certificateSwitchSlide(x) {
  //   //   event.preventDefault();
  //   //   certificateButtonList.childNodes.forEach((item, i) => {
  //   //     if (item.classList.contains('some-staff__button-item--active')) {
  //   //       item.classList.remove('some-staff__button-item--active');
  //   //     }
  //   //   });
  //   //   if (x < (certificateItem.length - 1)) {
  //   //     certificateList.style.transform = "translateX(-" + (x * (certificateWidth/2)) + "px)";
  //   //   };
  //   //   if (x == (certificateItem.length - 2)) {
  //   //     certificateList.style.transform = "translateX(-" + (x * (certificateWidth/2)) + "px)";
  //   //     certificateButtonList.lastChild.classList.add('some-staff__button-item--active');
  //   //   } else {
  //   //     certificateButtonList.childNodes[Math.floor(x / 2)].classList.add('some-staff__button-item--active');
  //   //   };
  //   // };
  //   // function swipeEnd() {
  //   //   posFinal = posInit - posX1;
  //   //   certificateList.removeEventListener('touchmove', swipeAction);
  //   //   certificateList.removeEventListener('touchend', swipeEnd);
  //   //   certificateList.classList.add('some-staff__certificate-list--tr');
  //   //
  //   //   if (Math.abs(posFinal) > (certificateWidth * 0.3)) {
  //   //     if (posInit < posX1) {
  //   //       if (slideIndex > 0) {
  //   //         certificateSwitchSlide(--slideIndex);
  //   //       } else {
  //   //         certificateSwitchSlide(slideIndex);
  //   //       }
  //   //     } else {
  //   //       if (slideIndex < (certificateItem.length - 2)) {
  //   //         certificateSwitchSlide(++slideIndex);
  //   //       } else {
  //   //         certificateSwitchSlide(slideIndex);
  //   //       }
  //   //     };
  //   //   } else {
  //   //     certificateSwitchSlide(slideIndex);
  //   //   };
  //   //   if (!posFinal) {
  //   //     certificateItem.forEach((item, i) => {
  //   //       if (item.innerHTML == event.target.parentNode.parentNode.innerHTML) {
  //   //         slideIndex = i;
  //   //       }
  //   //     });
  //   //     bigGallery(slideIndex);
  //   //   }
  //   // }
  //   certificateList.addEventListener('touchstart', swipeStart);
  //   certificateButtonList.childNodes.forEach((item, i) => {
  //     item.addEventListener('click', function() {
  //       if (((i + 1) * 2) < certificateItem.length) {
  //         certificateSwitchSlide(i*2);
  //         slideIndex = i*2;
  //       } else {
  //         certificateSwitchSlide(certificateItem.length - 2);
  //         slideIndex = certificateItem.length - 2;
  //       }
  //     })
  //   })
  // } else if (window.matchMedia('(max-width: 1200px)').matches) {
  //   certificateWidth = window.innerWidth - 200;
  //   certificateList.style.width = ((certificateItem.length / 3) * certificateWidth) + "px";
  //   certificateList.style.transform = "translateX(0px)";
  //   if ((certificateItem.length % 3) != 0) {
  //     certificateItem.forEach((item, i) => {
  //       item.style.width = (certificateWidth / 3) + 'px';
  //     });
  //   };
  //   certificateMove = parseInt(certificateList.style.transform.match(/\d+/));
  //   certificateNextButton.addEventListener('click', function() {
  //     certificateMove = parseInt(certificateList.style.transform.match(/\d+/));
  //     if (certificateMove + certificateWidth < certificateWidth * (certificateItem.length / 3)) {
  //       certificateList.style.transform = "translateX(-" + (certificateMove + certificateWidth) + "px)";
  //     };
  //   });
  //   certificatePrevButton.addEventListener('click', function() {
  //     certificateMove = parseInt(certificateList.style.transform.match(/\d+/));
  //     certificateList.style.transform = "translateX(-" + (certificateMove - certificateWidth) + "px)";
  //   });
  // } else {
  //   certificateWidth =  1100;
  //   certificateList.style.width = ((certificateItem.length / 3) * certificateWidth) + "px";
  //   certificateList.style.transform = "translateX(0px)";
  //   if ((certificateItem.length % 3) != 0) {
  //     certificateItem.forEach((item, i) => {
  //       item.style.width = (certificateWidth / 3) + 'px';
  //     });
  //   };
  //   certificateMove = parseInt(certificateList.style.transform.match(/\d+/));
  //   certificateNextButton.addEventListener('click', function() {
  //     certificateMove = parseInt(certificateList.style.transform.match(/\d+/));
  //     if (certificateMove + certificateWidth < certificateWidth * (certificateItem.length / 3)) {
  //       certificateList.style.transform = "translateX(-" + (certificateMove + certificateWidth) + "px)";
  //     };
  //   });
  //   certificatePrevButton.addEventListener('click', function() {
  //     certificateMove = parseInt(certificateList.style.transform.match(/\d+/));
  //     certificateList.style.transform = "translateX(-" + (certificateMove - certificateWidth) + "px)";
  //   });
  // }
}

// Отзывы
let otziviSlides = document.querySelectorAll('.otzivi__item');
if (otziviSlides.length) {
  let otziviCount = 0;
  for (let i = 0; i < otziviSlides.length; i++) {
    otziviCount++;
  }
  let otziviButtonList = document.querySelector('.otzivi__button-list');
  for (let i = 0; i < otziviCount; i++) {
    let otziviButton = document.createElement('button');
    otziviButton.classList.add('otzivi__button-item');
    otziviButtonList.append(otziviButton);
  }
  otziviButtonList.childNodes[0].classList.add('otzivi__button-item--active');
  for (let i = 0; i < otziviSlides.length; i++) {
    otziviSlides[i].style.left = (i * 100) + '%';
  }
  function showOtziv() {
    for (let i = 0; i < otziviCount; i++) {
      if (otziviButtonList.childNodes[i].classList.contains('otzivi__button-item--active')) {
        for (let j = 0; j < otziviSlides.length; j++) {
          otziviSlides[j].style.left = (j * 100) - (i * 100) + '%';
        }
      }
    }
  }
  function prevOtziv() {
    let x = 0;
    for (let i = 0; i < otziviCount; i++) {
      if (otziviButtonList.childNodes[i].classList.contains('otzivi__button-item--active')) {
        x = i;
      }
    }
    otziviButtonList.childNodes[x].classList.remove('otzivi__button-item--active');
    if (x == 0) {
      otziviButtonList.lastChild.classList.add('otzivi__button-item--active');
    } else {
      otziviButtonList.childNodes[x - 1].classList.add('otzivi__button-item--active');
    }
    showOtziv();
  }

  function nextOtziv() {
    let x = 0;
    for (let i = 0; i < otziviCount; i++) {
      if (otziviButtonList.childNodes[i].classList.contains('otzivi__button-item--active')) {
        x = i;
      }
    }
    otziviButtonList.childNodes[x].classList.remove('otzivi__button-item--active');
    if (x == (otziviCount - 1)) {
      otziviButtonList.firstChild.classList.add('otzivi__button-item--active');
    } else {
      otziviButtonList.childNodes[x + 1].classList.add('otzivi__button-item--active');
    }
    showOtziv();
  }
  for (let i = 0; i < otziviCount; i++) {
    otziviButtonList.childNodes[i].addEventListener('click', function() {
      for (let j = 0; j < otziviSlides.length; j++) {
        otziviButtonList.childNodes[j].classList.remove('otzivi__button-item--active')
      }
      otziviButtonList.childNodes[i].classList.add('otzivi__button-item--active');
      showOtziv();
    });
  }
  let otziviPrevButton = document.querySelector('.otzivi__button--prev');
  otziviPrevButton.addEventListener('click', prevOtziv);
  let otziviNextButton = document.querySelector('.otzivi__button--next');
  otziviNextButton.addEventListener('click', nextOtziv);
}

// Видео-отзывы
let videoLinks = document.querySelectorAll('.otzivi__video-link');
if (videoLinks.length) {
  let overlay = document.querySelector('.video-otzivi__overlay');
  let video = document.querySelectorAll('.video-otzivi__video');
  let iframeVideo = document.querySelectorAll('.video-otzivi__iframe');
  let buttonCloseVideo = document.querySelectorAll('.video-otzivi__close');

  videoLinks.forEach((item, i) => {
    item.addEventListener('click', function(event) {
      event.preventDefault();
      overlay.classList.add('video-otzivi__overlay--active');
      video[i].classList.add('video-otzivi__video--active');
    })
  });

  overlay.addEventListener('click', function(event) {
    overlay.classList.remove('video-otzivi__overlay--active');
    for (var i = 0; i < video.length; i++) {
      video[i].classList.remove('video-otzivi__video--active');
      iframeVideo[i].src = iframeVideo[i].src;
    }
  })

  buttonCloseVideo.forEach((item, i) => {
    item.addEventListener('click', function(event) {
      overlay.classList.remove('video-otzivi__overlay--active');
      video[i].classList.remove('video-otzivi__video--active');
      iframeVideo[i].src = iframeVideo[i].src;
    })
  });
}

// Слайдер ДО-после
let beforeAfterList = document.querySelector('.beforeafter__list');
if (beforeAfterList) {
  let beforeAfterItem = document.querySelectorAll('.beforeafter__item');
  beforeAfterList.style.width = '' + (beforeAfterItem.length * 100) + '%';
  let beforeAfterPrevButton = document.querySelector('.beforeafter__button--prev');
  let beforeAfterNextButton = document.querySelector('.beforeafter__button--next');
  let beforeAfterMove;
  let beforeAfterMoving = false;
  let beforeAfterWidth;
  if (window.matchMedia('(max-width: 767px)').matches) {
    beforeAfterWidth = window.innerWidth - 70;
  } else if (window.matchMedia('(max-width: 1023px)').matches) {
    beforeAfterWidth = window.innerWidth - 140;
  } else if (window.matchMedia('(max-width: 1299px)').matches) {
    beforeAfterWidth = window.innerWidth - 180;
  } else if (window.matchMedia('(min-width: 1300px)').matches) {
    beforeAfterWidth = 1120;
  };
  beforeAfterList.style.transform = "translateX(0px)";
  beforeAfterItem.forEach((item, i) => {
    item.style.width = beforeAfterWidth + "px";
  });
  beforeAfterMove = parseInt(beforeAfterList.style.transform.match(/\d+/));
  beforeAfterNextButton.addEventListener('click', function() {
    beforeAfterMove = parseInt(beforeAfterList.style.transform.match(/\d+/));
    if (beforeAfterMove + beforeAfterWidth < beforeAfterWidth * beforeAfterItem.length) {
      beforeAfterList.style.transform = "translateX(-" + (beforeAfterMove + beforeAfterWidth) + "px)";
      beforeAfterList.style.height = beforeAfterItem[(beforeAfterMove + beforeAfterWidth) / beforeAfterWidth].offsetHeight + 'px';
    };
  });
  beforeAfterPrevButton.addEventListener('click', function() {
    beforeAfterMove = parseInt(beforeAfterList.style.transform.match(/\d+/));
    if ((beforeAfterMove - beforeAfterWidth) / beforeAfterWidth >= 0) {
      beforeAfterList.style.transform = "translateX(-" + (beforeAfterMove - beforeAfterWidth) + "px)";
      beforeAfterList.style.height = beforeAfterItem[(beforeAfterMove - beforeAfterWidth) / beforeAfterWidth].offsetHeight + 'px';
    }
  });
}
// ДО после врачей
let beforeAfter = document.querySelectorAll('.beforeafter__beforeafter');
if (beforeAfter.length) {
  let beforeBlock = document.querySelectorAll('.beforeafter__before-block');
  let beforeImg = document.querySelectorAll('.beforeafter__before-img');
  let change = document.querySelectorAll('.beforeafter__change');
  let body = document.body;
  let isActive = false;

  document.addEventListener('DOMContentLoaded', () => {
    beforeImg.forEach((item, i) => {
      let width = beforeAfter[i].offsetWidth;
      item.style.minWidth = width + 'px';
    });
  });

  let beforeAfterSlider = (x, i) => {
    let shift = Math.max(0, Math.min(x, beforeAfter[i].offsetWidth));
    beforeBlock[i].style.width = shift + 'px';
    change[i].style.left = shift + 'px';
  }

  let pauseEvents = (e) => {
    e.stopPropagation();
    e.preventDefault();
    return false;
  }

  beforeAfter.forEach((item, i) => {
    item.addEventListener('mousedown', () => {
      isActive = true;
    });
    item.addEventListener('mouseup', () => {
      isActive = false;
    });
    item.addEventListener('mouseleave', () => {
      isActive = false;
    });
    item.addEventListener('mousemove', (e) => {
      if (!isActive) {
        return;
      }
      let x  = e.pageX;
      x -= item.getBoundingClientRect().left;
      beforeAfterSlider(x, i);
      pauseEvents(e);
    })

    item.addEventListener('touchstart', () => {
      isActive = true;
    });
    item.addEventListener('touchend', () => {
      isActive = false;
    });
    item.addEventListener('touchcancel', () => {
      isActive = false;
    });
    item.addEventListener('touchmove', (e) => {
      if (!isActive) {
        return;
      };
      let mobileX;
      let y;

      for (y = 0; y < e.changedTouches.length; y++) {
        mobileX = e.changedTouches[y].pageX;
      };

      mobileX -= item.getBoundingClientRect().left;
      beforeAfterSlider(mobileX, i);
      pauseEvents(e);
    });
  });
};
