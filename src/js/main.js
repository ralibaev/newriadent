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

// Увеличение числа
let centrNumber = document.querySelector('.numbers__number--0');
let pacientNumber = document.querySelector('.numbers__number--1');
let clientNumber = document.querySelector('.numbers__number--2');
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

// Выбор табов
let servicesTabs = document.querySelectorAll('.services__tab');
let servicesList = document.querySelectorAll('.services__list');

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
