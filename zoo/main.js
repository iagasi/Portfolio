/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkzoo"] = self["webpackChunkzoo"] || []).push([["main"],{

/***/ "./src/styles/main.scss":
/*!******************************!*\
  !*** ./src/styles/main.scss ***!
  \******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://zoo/./src/styles/main.scss?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://zoo/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://zoo/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/main.scss */ \"./src/styles/main.scss\");\n/* harmony import */ var _js_components_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/components/menu */ \"./src/js/components/menu.js\");\n/* harmony import */ var _js_components_menu__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_js_components_menu__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _js_components_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/components/modal */ \"./src/js/components/modal.js\");\n/* harmony import */ var _js_components_modal__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_js_components_modal__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _js_components_testimonal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./js/components/testimonal */ \"./src/js/components/testimonal.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconsole.log(\"Hello World!\");\r\n\r\n\r\n// window.addEventListener(\"resize\",(e)=>{console.log(\"eeeeeeeeeeeee\")\r\n// )\n\n//# sourceURL=webpack://zoo/./src/index.js?");

/***/ }),

/***/ "./src/js/components/menu.js":
/*!***********************************!*\
  !*** ./src/js/components/menu.js ***!
  \***********************************/
/***/ (() => {

eval("const burger = document.querySelector(\".burger\")\r\n\r\nconst closeBtn = document.querySelector(\".menu__close-btn\")\r\n\r\nconst shadow = document.querySelector(\"#shadow\")\r\nconst menu = document.querySelector(\".menu\")\r\n\r\n\r\nfunction openMenu() {\r\n    burger.addEventListener(\"click\", (e) => {\r\n\r\n        shadow.classList.add(\"shadow\")\r\n        menu.classList.remove(\"not-display\")\r\n        menu.classList.add(\"open-menu\")\r\n\r\n        document.body.classList.add(\"overflowHidden\")\r\n\r\n    })\r\n}\r\n\r\nfunction closeMenu() {\r\n    shadow.addEventListener(\"click\", (e) => {\r\n        menu.classList.add(\"close-menu\")\r\n        document.body.classList.remove(\"overflowHidden\")\r\n\r\n\r\n\r\n    })\r\n}\r\nfunction menuAnimation() {\r\n    menu.addEventListener('animationend', (event) => {\r\n        if (shadow.classList.contains(\"shadow\")) {\r\n            menu.classList.add(\"menu-active\")\r\n            menu.classList.remove(\"open-menu\")\r\n\r\n        }\r\n        if (menu.classList.contains(\"close-menu\")) {\r\n\r\n            menu.classList.remove(\"menu-active\")\r\n            menu.classList.remove(\"close-menu\")\r\n            menu.classList.add(\"not-display\")\r\n\r\n            shadow.classList.remove(\"shadow\")\r\n\r\n        }\r\n    }\r\n\r\n    );\r\n}\r\n\r\nmenu.addEventListener(\"click\", (e) => {\r\n\r\n\r\n    if (e.target.nodeName === \"A\" || e.target.nodeName === \"IMG\") {\r\n        menu.classList.add(\"close-menu\")\r\n        document.body.classList.remove(\"overflowHidden\")\r\n        shadow.classList.remove(\"shadow\")\r\n        console.log(e.target.innerText);\r\n        //  window.location.href=\"donate.html\"\r\n    }\r\n\r\n\r\n})\r\nopenMenu()\r\ncloseMenu()\r\nmenuAnimation()\r\n\n\n//# sourceURL=webpack://zoo/./src/js/components/menu.js?");

/***/ }),

/***/ "./src/js/components/modal.js":
/*!************************************!*\
  !*** ./src/js/components/modal.js ***!
  \************************************/
/***/ (() => {

eval("const shadow = document.querySelector(\"#shadow\")\r\nconst cards = document.querySelector(\".animals__cards\")\r\nconst testimonal = document.querySelector(\".testimomal__cards\")\r\nconst modalWindow = document.querySelector(\".modal\")\r\n\r\n\r\nfunction modal(card, pixels) {\r\n\r\n    card.addEventListener(\"click\", (e) => {\r\n        window.scrollTo({ top: e.pageY - pixels, behavior: \"smooth\" });\r\n\r\n        document.documentElement.style.setProperty(\"--topPixels\", `${e.pageY - pixels}px`)\r\n        document.documentElement.style.setProperty(\"--modalTop\", `${e.pageY - pixels + 100}px`)\r\n        modalWindow.classList.add(\"display\")\r\n        shadow.classList.add(\"shadow\")\r\n        //    document.body.style.overflow =\"hidden\"\r\n        testimonals(e)\r\n\r\n    })\r\n    shadow.addEventListener(\"click\", () => {\r\n        shadow.classList.remove(\"shadow\")\r\n        modalWindow.classList.remove(\"display\")\r\n        document.documentElement.style.setProperty(\"--topPixels\", `0px`)\r\n        document.documentElement.style.setProperty(\"--modalTop\", `0px`)\r\n\r\n        // document.body.style.overflow =\"visible\"\r\n    })\r\n\r\n}\r\nfunction testimonals(e) {\r\n\r\n    console.log(e.target.closest(\".card-item\"))\r\n    //modalWindow.innerHTML=e.target.closest(\".card-item\")\r\n    let str = `\r\n<div class=\"card-item \">\r\n${e.target.closest(\".card-item\").innerHTML}\r\n</div>\r\n`\r\n    modalWindow.firstElementChild.innerHTML = str\r\n\r\n}\r\nmodal(cards, 300)\r\n\r\nmodal(testimonal, 500)\r\n\n\n//# sourceURL=webpack://zoo/./src/js/components/modal.js?");

/***/ }),

/***/ "./src/js/components/testimonal.js":
/*!*****************************************!*\
  !*** ./src/js/components/testimonal.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _libs_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../libs/data */ \"./src/js/libs/data.js\");\n\r\nconst testimonalCards = document.querySelector(\".testimonal__carousel\")\r\nconst trange= document.querySelector(\"#t-range\")\r\nconst tcarousel=document.querySelector(\".testimonal__carousel\")\r\n\r\nfunction createItem(data){\r\nconst item=`\r\n<div class=\"card-item \">\r\n<div class=\"card-item__owner\">\r\n<img class=\"card-item__img\" src=${data.img} alt=\"userImage\">\r\n<div class=\"card-item__credentials\">\r\n    <h4 class=\"description card-item__user-name\">${data.userName}</h4>\r\n    <h5 class=\"card-item__user-location\">${data.time}</h5>\r\n</div>\r\n</div>\r\n<p class=\"card-item__text\">\r\n${data.description}\r\n</p>\r\n</div>\r\n\r\n`\r\nreturn item\r\n}\r\nlet items=\"\"\r\n_libs_data__WEBPACK_IMPORTED_MODULE_0__.testimonal.forEach(e=> {\r\n    items+=createItem(e)\r\n});\r\n testimonalCards.innerHTML=items\r\n\r\nfunction rangeHandler() {\r\n    trange.addEventListener(\"click\",e=>{\r\n        let rangePosition=parseInt(e.target.value)\r\n   \r\n\r\n    console.log(window.innerWidth );\r\nlet width=window.innerWidth \r\n    switch(true){\r\n        case width>1200:\r\n            tcarousel.style=`margin-left:-${rangePosition*291}px;transition: 1s;\r\n            transition-property: margin;`\r\n      \r\n\r\n            ;\r\n            break\r\n            case width<1200:\r\n                tcarousel.style=`margin-left:-${rangePosition*322}px;transition: 1s;\r\n                transition-property: margin;`\r\n          \r\n    \r\n                ;\r\n                break\r\n    }\r\n})\r\n}\r\n\r\nrangeHandler()\n\n//# sourceURL=webpack://zoo/./src/js/components/testimonal.js?");

/***/ }),

/***/ "./src/js/libs/data.js":
/*!*****************************!*\
  !*** ./src/js/libs/data.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"testimonal\": () => (/* binding */ testimonal)\n/* harmony export */ });\nconst testimonal = [\r\n\r\n    {\r\n        img: \"./public/5.jpg\",\r\n        userName: \"Oskar Samborsky\",\r\ntime: \"Local Austria • Yesterday\",\r\ndescription:`The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.\r\nThe best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for\r\nanimals.The best online zoo I’ve met. The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for`,\r\n\r\n    },\r\n    {\r\n        img: \"./public/6.jpg\",\r\n        userName: \"Snoop Dogg\",\r\ntime: \"Local CALIFORNIA • Today\",\r\ndescription:`Smoking every day!!`,\r\n\r\n    },\r\n    {\r\n        img: \"./public/7.jpg\",\r\n        userName: \"Fredericka Michelin\",\r\ntime: \"Local Austria • Yesterday\",\r\ndescription:`The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.\r\nThe best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for\r\nanimals.The best online zoo I’ve met. The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for`,\r\n\r\n    },\r\n    {\r\n        img: \"./public/1.jpg\",\r\n        userName: \"Mila Riksha\",\r\ntime: \"Local Germany • Yesterday\",\r\ndescription:`There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.`,\r\n\r\n    },\r\n    {\r\n        img: \"./public/2.jpg\",\r\n        userName: \"Alex Bolduin\",\r\ntime: \"Local USA • Yesterday\",\r\ndescription:`\r\nBut I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?\"\r\n`,\r\n\r\n    },\r\n    {\r\n        img: \"./public/3.jpg\",\r\n        userName: \" H. Rackham\",\r\ntime: \"Local USA • Yesterday\",\r\ndescription:`The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from \"de Finibus Bonorum et Malorum\" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.`,\r\n\r\n    },\r\n    {\r\n        img: \"./public/4.jpg\",\r\n        userName: \" Jon doe\",\r\ntime: \"Local Canada • Yesterday\",\r\ndescription:`Choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.\"`,\r\n\r\n    },\r\n]\n\n//# sourceURL=webpack://zoo/./src/js/libs/data.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ (() => {

eval("\n\n//# sourceURL=webpack://zoo/./src/style.css?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);