"use strict";
!function(e,n,A){function o(e,n){return typeof e===n}function t(){var e,n,A,t,a,i,l;for(var f in r)if(r.hasOwnProperty(f)){if(e=[],n=r[f],n.name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(A=0;A<n.options.aliases.length;A++)e.push(n.options.aliases[A].toLowerCase());for(t=o(n.fn,"function")?n.fn():n.fn,a=0;a<e.length;a++)i=e[a],l=i.split("."),1===l.length?Modernizr[l[0]]=t:(!Modernizr[l[0]]||Modernizr[l[0]]instanceof Boolean||(Modernizr[l[0]]=new Boolean(Modernizr[l[0]])),Modernizr[l[0]][l[1]]=t),s.push((t?"":"no-")+l.join("-"))}}function a(e){var n=u.className,A=Modernizr._config.classPrefix||"";if(c&&(n=n.baseVal),Modernizr._config.enableJSClass){var o=new RegExp("(^|\\s)"+A+"no-js(\\s|$)");n=n.replace(o,"$1"+A+"js$2")}Modernizr._config.enableClasses&&(n+=" "+A+e.join(" "+A),c?u.className.baseVal=n:u.className=n)}function i(e,n){if("object"==typeof e)for(var A in e)f(e,A)&&i(A,e[A]);else{e=e.toLowerCase();var o=e.split("."),t=Modernizr[o[0]];if(2==o.length&&(t=t[o[1]]),"undefined"!=typeof t)return Modernizr;n="function"==typeof n?n():n,1==o.length?Modernizr[o[0]]=n:(!Modernizr[o[0]]||Modernizr[o[0]]instanceof Boolean||(Modernizr[o[0]]=new Boolean(Modernizr[o[0]])),Modernizr[o[0]][o[1]]=n),a([(n&&0!=n?"":"no-")+o.join("-")]),Modernizr._trigger(e,n)}return Modernizr}var s=[],r=[],l={_version:"3.6.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var A=this;setTimeout(function(){n(A[e])},0)},addTest:function(e,n,A){r.push({name:e,fn:n,options:A})},addAsyncTest:function(e){r.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=l,Modernizr=new Modernizr;var f,u=n.documentElement,c="svg"===u.nodeName.toLowerCase();!function(){var e={}.hasOwnProperty;f=o(e,"undefined")||o(e.call,"undefined")?function(e,n){return n in e&&o(e.constructor.prototype[n],"undefined")}:function(n,A){return e.call(n,A)}}(),l._l={},l.on=function(e,n){this._l[e]||(this._l[e]=[]),this._l[e].push(n),Modernizr.hasOwnProperty(e)&&setTimeout(function(){Modernizr._trigger(e,Modernizr[e])},0)},l._trigger=function(e,n){if(this._l[e]){var A=this._l[e];setTimeout(function(){var e,o;for(e=0;e<A.length;e++)(o=A[e])(n)},0),delete this._l[e]}},Modernizr._q.push(function(){l.addTest=i}),Modernizr.addAsyncTest(function(){function e(e,n,A){function o(n){var o=n&&"load"===n.type?1==t.width:!1,a="webp"===e;i(e,a&&o?new Boolean(o):o),A&&A(n)}var t=new Image;t.onerror=o,t.onload=o,t.src=n}var n=[{uri:"data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoBAAEAAwA0JaQAA3AA/vuUAAA=",name:"webp"},{uri:"data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA==",name:"webp.alpha"},{uri:"data:image/webp;base64,UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA",name:"webp.animation"},{uri:"data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=",name:"webp.lossless"}],A=n.shift();e(A.name,A.uri,function(A){if(A&&"load"===A.type)for(var o=0;o<n.length;o++)e(n[o].name,n[o].uri)})}),t(),a(s),delete l.addTest,delete l.addAsyncTest;for(var p=0;p<Modernizr._q.length;p++)Modernizr._q[p]();e.Modernizr=Modernizr}(window,document);
Modernizr.on('webp', function(result) {
  if (result) {
    document.body.classList.add('webp');
  } else {
    document.body.classList.add('no-webp');
  }
});

// Выбор города
let topHeaderPlaceSelect = document.querySelector('.top-header__place-select');
if (topHeaderPlaceSelect) {
  let topHeaderPlaceOptions = document.querySelector('.top-header__place-options');
  topHeaderPlaceSelect.addEventListener('click', function() {
    console.log(topHeaderPlaceSelect);
    console.log(topHeaderPlaceOptions);
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
  if (window.matchMedia('(max-width: 767px)').matches) {
    staffListInner.style.width = (staffItems.length * (window.innerWidth - 80)) + "px";
    console.log(staffNumSpan.innerHTML);
    staffListInner.style.transform = "translateX(0px)";
    staffItems.forEach((item, i) => {
      item.style.width = (window.innerWidth - 80) + "px";
    });
    let staffMove = parseInt(staffListInner.style.transform.match(/\d+/));
    console.log(staffMove);
    staffButtonNext.addEventListener('click', function() {
      staffMove = parseInt(staffListInner.style.transform.match(/\d+/));
      console.log(staffMove);
      staffListInner.style.transform = "translateX(-" + (staffMove + staffWidth) + "px)";
      staffNumber = staffMove / staffWidth + 2;
      console.log(staffNumber);
      staffNumSpan.innerHTML = staffNumber + "/" + staffItems.length;
    });
    staffButtonPrev.addEventListener('click', function() {
      staffMove = parseInt(staffListInner.style.transform.match(/\d+/));
      console.log(staffListInner);
      console.log(staffMove);
      staffListInner.style.transform = "translateX(-" + (staffMove - staffWidth) + "px)";
      staffNumber = staffMove / staffWidth;
      console.log(staffNumber);
      staffNumSpan.innerHTML = staffNumber + "/" + staffItems.length;
    });
  } else if (window.matchMedia('(max-width: 1023px)').matches) {
    staffListInner.style.width = (Math.floor(staffItems.length / 2) * (window.innerWidth - 100)) + "px";
    staffWidth = window.innerWidth - 100;
    console.log(staffNumSpan.innerHTML);
    staffListInner.style.transform = "translateX(0px)";
    staffMove = parseInt(staffListInner.style.transform.match(/\d+/));
    console.log(staffMove);
    staffButtonNext.addEventListener('click', function() {
      staffMove = parseInt(staffListInner.style.transform.match(/\d+/));
      console.log(staffMove);
      staffListInner.style.transform = "translateX(-" + (staffMove + staffWidth) + "px)";
      staffNumber = staffMove / staffWidth + 2;
      console.log(staffNumber);
      staffNumSpan.innerHTML = Math.floor(staffNumber / 2) + "/" + Math.floor(staffItems.length / 2);
    });
    staffButtonPrev.addEventListener('click', function() {
      staffMove = parseInt(staffListInner.style.transform.match(/\d+/));
      console.log(staffListInner);
      console.log(staffMove);
      staffListInner.style.transform = "translateX(-" + (staffMove - staffWidth) + "px)";
      staffNumber = staffMove / staffWidth;
      console.log(staffNumber);
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
  let popupOverlay = document.querySelector('.popup__overlay');
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
  let popupOverlay = document.querySelector('.popup__overlay');
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
      console.log(reviewMove);
      console.log(reviewWidth);
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
//       console.log('asdasd');
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
}
