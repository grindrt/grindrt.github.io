/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNews", function() { return getNews; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_models_js__ = __webpack_require__(1);


  const buttons = document.querySelectorAll('[data-news]');
  buttons.forEach((button)=>{
    button.addEventListener('click', ()=>{
      const source = button.dataset.source;
      getNews(source);
    })
  });

let getUrl = (endpoint, ...sourcesAtr) => {
  const apiKey = 'cbcde34889f4417b9dce339f88f24de8';
  let sources = sourcesAtr.join(', ');
  return `https://newsapi.org/v2/${endpoint}?sources=${sources}&apiKey=${apiKey}`;
}

let getNews = (source) => {
  let endpoint = 'top-headlines';
  let url = getUrl(endpoint, source);
  fetch(url)
  .then((resp) => {	resp.json().then(fillNews); })
  .catch((err) => { console.log(err); });
}

let fillNews = (data) => {
  let {articles} = data;
  let newsMap = new Map();
  articles.forEach((item, index)=>{ newsMap.set(index, new __WEBPACK_IMPORTED_MODULE_0__lib_models_js__["a" /* NewsModel */](item.title, item.description, item.url, item.urlToImage)); });
  let html = () => {
    let html ='';
    for (let item of newsMap.values()) { html += item.toHtml(); }
    return html;
  }

  document.getElementById("news").innerHTML = html();
}




/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsModel; });
/* unused harmony export InheritanceForInheritance */
class NewsModel{
	constructor(title, description, url, imgUrl){
		this.title = title;
		this.description = description;
		this.url = url;
		this.imgUrl = imgUrl;
	}

	get title(){
		return this._title;
	}

	set title(value){
		this._title = value;
	}

	get description(){
		return this._description;
	}

	set description(value){
		this._description = value;
	}

	get url(){
		return this._url;
	}

	set url(value){
		this._url = value;
	}

	get imgUrl(){
		return this._imgUrl ? this._imgUrl : 'img/not-found.jpg';
	}

	set imgUrl(value){
		this._imgUrl = value;
	}

	toHtml(){
		return `<div class="news-container">
            		<div class="news-img">
                		<img class="image" src='${this.imgUrl}'/>
                		<a class="news-title" href="${this.url}"><span>${this.title}</span></a>
                		<div class="description-container">
                    		<div class="description-text"><p>${this.description}</p></div>
                		</div>
            		</div>
   				</div>`;
	}
}

class InheritanceForInheritance extends NewsModel {
	get imgUrl(){
		return this._imgUrl;
	}
}




/***/ })
/******/ ]);