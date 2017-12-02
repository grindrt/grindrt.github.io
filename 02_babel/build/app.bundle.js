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
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getNews = undefined;

var _models = __webpack_require__(1);

var buttons = Array.from(document.querySelectorAll('[data-news]'));
buttons.forEach(function (button) {
  button.addEventListener('click', function () {
    var source = button.dataset.source;
    getNews(source);
  });
});

var getUrl = function getUrl(endpoint) {
  for (var _len = arguments.length, sourcesAtr = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    sourcesAtr[_key - 1] = arguments[_key];
  }

  var apiKey = 'cbcde34889f4417b9dce339f88f24de8';
  var sources = sourcesAtr.join(', ');
  return 'https://newsapi.org/v2/' + endpoint + '?sources=' + sources + '&apiKey=' + apiKey;
};

var getNews = function getNews(source) {
  var endpoint = 'top-headlines';
  var url = getUrl(endpoint, source);
  fetch(url).then(function (resp) {
    resp.json().then(fillNews);
  }).catch(function (err) {
    console.log(err);
  });
};

var fillNews = function fillNews(data) {
  var articles = data.articles;

  var newsMap = new Map();
  articles.forEach(function (item, index) {
    newsMap.set(index, new _models.NewsModel(item.title, item.description, item.url, item.urlToImage));
  });
  var html = function html() {
    var html = '';
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = newsMap.values()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var item = _step.value;
        html += item.toHtml();
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    return html;
  };

  document.getElementById("news").innerHTML = html();
};

exports.getNews = getNews;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var NewsModel = function () {
	function NewsModel(title, description, url, imgUrl) {
		_classCallCheck(this, NewsModel);

		this.title = title;
		this.description = description;
		this.url = url;
		this.imgUrl = imgUrl;
	}

	_createClass(NewsModel, [{
		key: 'toHtml',
		value: function toHtml() {
			return '<div class="news-container">\n            \t\t<div class="news-img">\n                \t\t<img class="image" src=\'' + this.imgUrl + '\'/>\n                \t\t<a class="news-title" href="' + this.url + '"><span>' + this.title + '</span></a>\n                \t\t<div class="description-container">\n                    \t\t<div class="description-text"><p>' + this.description + '</p></div>\n                \t\t</div>\n            \t\t</div>\n   \t\t\t\t</div>';
		}
	}, {
		key: 'title',
		get: function get() {
			return this._title;
		},
		set: function set(value) {
			this._title = value;
		}
	}, {
		key: 'description',
		get: function get() {
			return this._description;
		},
		set: function set(value) {
			this._description = value;
		}
	}, {
		key: 'url',
		get: function get() {
			return this._url;
		},
		set: function set(value) {
			this._url = value;
		}
	}, {
		key: 'imgUrl',
		get: function get() {
			return this._imgUrl ? this._imgUrl : 'img/not-found.jpg';
		},
		set: function set(value) {
			this._imgUrl = value;
		}
	}]);

	return NewsModel;
}();

var InheritanceForInheritance = function (_NewsModel) {
	_inherits(InheritanceForInheritance, _NewsModel);

	function InheritanceForInheritance() {
		_classCallCheck(this, InheritanceForInheritance);

		return _possibleConstructorReturn(this, (InheritanceForInheritance.__proto__ || Object.getPrototypeOf(InheritanceForInheritance)).apply(this, arguments));
	}

	_createClass(InheritanceForInheritance, [{
		key: 'imgUrl',
		get: function get() {
			return this._imgUrl;
		}
	}]);

	return InheritanceForInheritance;
}(NewsModel);

exports.NewsModel = NewsModel;
exports.InheritanceForInheritance = InheritanceForInheritance;

/***/ })
/******/ ]);
//# sourceMappingURL=app.bundle.js.map