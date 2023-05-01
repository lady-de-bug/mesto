(()=>{"use strict";var e={formSelector:".popup__form",inputSelector:".popup__input",errorClassTemplate:".popup__input-error_type_",inputErrorClass:"popup__input_type_error",errorClass:"popup__input-error_visible",submitButtonSelector:".popup__submit-btn",inactiveButtonClass:"popup__submit-btn_disabled"},t=document.querySelector(".profile"),n=t.querySelector(".profile__edit-button"),r=document.querySelector(".popup_type_place").querySelector(".popup__form_type_place"),o=document.querySelector(".popup_type_profile"),i=o.querySelector(".popup__form_type_profile"),u=t.querySelector(".profile__add-button"),a=o.querySelector(".popup__input_type_name"),c=o.querySelector(".popup__input_type_occupation"),l=document.querySelector(".popup_type_avatar").querySelector(".popup__form_type_avatar"),s=document.querySelector(".profile__avatar-button");function f(e){return f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},f(e)}function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==f(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==f(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===f(o)?o:String(o)),r)}var o}document.querySelector(".profile__avatar");var y=function(){function e(t){var n=t.data,r=t.elementTemplateSelector,o=t.handleCardClick,i=t.userId,u=t.handleDeleteButtonClick,a=t.handleLikeButtonClick;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=n.name,this._link=n.link,this._elementTemplateSelector=r,this._handleCardClick=o,this._userId=i,this._cardId=n._id,this._cardOwnerId=n.owner._id,this._handleDeleteButtonClick=u,this._handleLikeButtonClick=a,this._likes=n.likes}var t,n;return t=e,(n=[{key:"_getTemplate",value:function(){return document.querySelector(this._elementTemplateSelector).content.querySelector(".element").cloneNode(!0)}},{key:"generateCard",value:function(){return this._element=this._getTemplate(),this._elementImage=this._element.querySelector(".element__image"),this._elementImage.src=this._link,this._elementImage.alt=this._name,this._element.querySelector(".element__name-place").textContent=this._name,this._elementPlaceLike=this._element.querySelector(".element__place-like"),this._elementTrashIcon=this._element.querySelector(".element__trash-icon"),this._likesCounter=this._element.querySelector(".element__likes-counter"),this.updateLikes(this._likes),this._hideTrashIcon(),this._setEventListeners(),this._element}},{key:"_setEventListeners",value:function(){var e=this;this._elementPlaceLike.addEventListener("click",(function(){return e._handleLikeButtonClick(e)})),this._elementTrashIcon.addEventListener("click",(function(){return e._handleDeleteButtonClick(e._cardId)})),this._elementImage.addEventListener("click",(function(){return e._handleCardClick()}))}},{key:"getIsLiked",value:function(){var e=this;return this._likes.some((function(t){return t._id===e._userId}))}},{key:"getCardId",value:function(){return this._cardId}},{key:"updateLikes",value:function(e){this._likes=e,this._likesCounter.textContent=e.length,this.getIsLiked()?this._elementPlaceLike.classList.add("element__place-like_active"):this._elementPlaceLike.classList.remove("element__place-like_active")}},{key:"deleteCard",value:function(){this._element.remove(),this._element=null}},{key:"_hideTrashIcon",value:function(){this._userId!==this._cardOwnerId&&this._elementTrashIcon.remove()}}])&&p(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function h(e){return h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},h(e)}function m(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,d(r.key),r)}}function v(e,t,n){return(t=d(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function d(e){var t=function(e,t){if("object"!==h(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==h(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===h(t)?t:String(t)}var _=function(){function e(t,n){var r=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),v(this,"_showInputError",(function(e,t){var n=r._form.querySelector("".concat(r._errorClassTemplate).concat(e.name));n.textContent=t,e.classList.add(r._inputErrorClass),n.classList.add(r._errorClass)})),v(this,"_hideInputError",(function(e){var t=r._form.querySelector("".concat(r._errorClassTemplate).concat(e.name));t.textContent="",e.classList.remove(r._inputErrorClass),t.classList.remove(r._errorClass)})),v(this,"disableButton",(function(){r._submitButton.classList.add(r._inactiveButtonClass),r._submitButton.disabled=!0})),v(this,"_enableButton",(function(){r._submitButton.classList.remove(r._inactiveButtonClass),r._submitButton.disabled=!1})),v(this,"_checkInputValidity",(function(e){e.validity.valid?r._hideInputError(e):r._showInputError(e,e.validationMessage)})),v(this,"_hasInvalidInput",(function(){return r._inputList.some((function(e){return!e.validity.valid}))})),v(this,"_toggleButtonState",(function(){r._hasInvalidInput()?r.disableButton():r._enableButton()})),v(this,"_setEventListeners",(function(){r._inputList=Array.from(r._form.querySelectorAll(r._inputSelector)),r._submitButton=r._form.querySelector(r._submitButtonSelector),r._inputList.forEach((function(e){e.addEventListener("input",(function(){r._checkInputValidity(e),r._toggleButtonState()}))}))})),this._inputSelector=t.inputSelector,this._submitButtonSelector=t.submitButtonSelector,this._errorClassTemplate=t.errorClassTemplate,this._inactiveButtonClass=t.inactiveButtonClass,this._inputErrorClass=t.inputErrorClass,this._errorClass=t.errorClass,this._form=n}var t,n;return t=e,(n=[{key:"enableValidation",value:function(){this._setEventListeners()}},{key:"hideFormErrors",value:function(){var e=this;this._inputList.forEach((function(t){e._hideInputError(t),e._toggleButtonState()}))}}])&&m(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function b(e){return b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},b(e)}function S(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==b(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==b(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===b(o)?o:String(o)),r)}var o}var g=function(){function e(t,n){var r=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderer=r,this._container=document.querySelector(n)}var t,n;return t=e,(n=[{key:"renderItems",value:function(e){var t=this;e.forEach((function(e){return t._renderer(e)}))}},{key:"addItem",value:function(e){this._container.append(e)}},{key:"addNewItem",value:function(e){this._container.prepend(e)}}])&&S(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function w(e){return w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},w(e)}function k(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==w(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==w(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===w(o)?o:String(o)),r)}var o}var E=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popup=document.querySelector(t),this._handleEscClose=this._handleEscClose.bind(this)}var t,n;return t=e,(n=[{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"setEventListeners",value:function(){var e=this;this._popup.addEventListener("click",(function(t){t.target.classList.contains("popup_opened")&&e.close(),t.target.classList.contains("popup__close-icon")&&e.close()}))}}])&&k(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function O(e){return O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},O(e)}function C(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==O(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==O(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===O(o)?o:String(o)),r)}var o}function j(){return j="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=I(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},j.apply(this,arguments)}function P(e,t){return P=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},P(e,t)}function I(e){return I=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},I(e)}var L=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&P(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=I(r);if(o){var n=I(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===O(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,e))._image=t._popup.querySelector(".popup__large-image"),t._imageCaption=t._popup.querySelector(".popup__image-caption"),t}return t=u,(n=[{key:"open",value:function(e,t){this._image.src=t,this._image.alt=e,this._imageCaption.textContent=e,j(I(u.prototype),"open",this).call(this)}}])&&C(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(E);function T(e){return T="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},T(e)}function B(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==T(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==T(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===T(o)?o:String(o)),r)}var o}function R(){return R="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=U(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},R.apply(this,arguments)}function q(e,t){return q=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},q(e,t)}function U(e){return U=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},U(e)}var x=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&q(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=U(r);if(o){var n=U(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===T(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function u(e){var t,n=e.popupSelector,r=e.handleFormSubmit;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,n))._handleFormSubmit=r,t._form=t._popup.querySelector(".popup__form"),t._inputList=t._form.querySelectorAll(".popup__input"),t}return t=u,(n=[{key:"_getInputValues",value:function(){var e=this;return this._formValues={},this._inputList.forEach((function(t){return e._formValues[t.name]=t.value})),this._formValues}},{key:"setEventListeners",value:function(){var e=this;R(U(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(t){t.preventDefault(),e._handleFormSubmit(e._getInputValues()),e.close()}))}},{key:"close",value:function(){R(U(u.prototype),"close",this).call(this),this._form.reset()}}])&&B(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(E);function D(e){return D="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},D(e)}function A(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==D(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==D(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===D(o)?o:String(o)),r)}var o}var F=function(){function e(t){var n=t.name,r=t.occupation,o=t.avatar;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=document.querySelector(n),this._occupation=document.querySelector(r),this._avatar=document.querySelector(o)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{name:this._name.textContent,occupation:this._occupation.textContent,avatar:this._avatar.src}}},{key:"setUserInfo",value:function(e){var t=e.name,n=e.about,r=e.avatar,o=e._id;this._avatar.src=r,this._name.textContent=t,this._occupation.textContent=n,this._userId=o}},{key:"getUserId",value:function(){return this._userId}}])&&A(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function V(e){return V="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},V(e)}function N(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==V(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==V(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===V(o)?o:String(o)),r)}var o}var J=function(){function e(t){var n=t.baseUrl,r=t.headers;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._baseUrl=n,this._headers=r}var t,n;return t=e,(n=[{key:"_checkResponse",value:function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status," ").concat(e.statusText))}},{key:"getUserInfo",value:function(){var e=this;return fetch("".concat(this._baseUrl,"/users/me"),{headers:this._headers}).then((function(t){return e._checkResponse(t)}))}},{key:"getInitialCards",value:function(){var e=this;return fetch("".concat(this._baseUrl,"/cards"),{headers:this._headers}).then((function(t){return e._checkResponse(t)}))}},{key:"editUserInfo",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e.name,about:e.occupation})}).then((function(e){return t._checkResponse(e)}))}},{key:"addNewCard",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify(e)}).then((function(e){return t._checkResponse(e)}))}},{key:"changeAvatar",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e.avatar})}).then((function(e){return t._checkResponse(e)}))}},{key:"deleteCard",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"/cards/").concat(e),{method:"DELETE",headers:this._headers}).then((function(e){return t._checkResponse(e)}))}},{key:"updateLike",value:function(e,t){var n=this;return fetch("".concat(this._baseUrl,"/cards/likes/").concat(e),{method:t?"DELETE":"PUT",headers:this._headers}).then((function(e){return n._checkResponse(e)}))}}])&&N(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function H(e){return H="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},H(e)}function M(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==H(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==H(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===H(o)?o:String(o)),r)}var o}function z(){return z="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=G(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},z.apply(this,arguments)}function $(e,t){return $=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},$(e,t)}function G(e){return G=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},G(e)}var K=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&$(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=G(r);if(o){var n=G(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===H(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function u(e){var t,n=e.popupSelector;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,n))._form=t._popup.querySelector(".popup__form"),t}return t=u,(n=[{key:"setEventListeners",value:function(){var e=this;z(G(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(t){t.preventDefault(),e._handleSubmit()}))}},{key:"actionOfSubmitForm",value:function(e){this._handleSubmit=e}}])&&M(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(E);function Q(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var W=new J({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-65",headers:{authorization:"77ea4194-68a5-47e9-b2b9-0fd15151e335","Content-Type":"application/json"}});Promise.all([W.getInitialCards(),W.getUserInfo()]).then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i,u,a=[],c=!0,l=!1;try{if(i=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=i.call(n)).done)&&(a.push(r.value),a.length!==t);c=!0);}catch(e){l=!0,o=e}finally{try{if(!c&&null!=n.return&&(u=n.return(),Object(u)!==u))return}finally{if(l)throw o}}return a}}(t,n)||function(e,t){if(e){if("string"==typeof e)return Q(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Q(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];Y.setUserInfo(i),ne.renderItems(o)})).catch((function(e){console.log("Ошибка: ".concat(e))}));var X=new L(".popup_type_image");X.setEventListeners();var Y=new F({name:".profile__user-name",occupation:".profile__user-occupation",avatar:".profile__avatar"}),Z=new x({popupSelector:".popup_type_profile",handleFormSubmit:function(e){W.editUserInfo(e).then((function(e){Y.setUserInfo(e),Z.close()})).catch((function(e){console.log("Ошибка: ".concat(e))}))}});Z.setEventListeners(),n.addEventListener("click",(function(){Z.open();var e=Y.getUserInfo();a.value=e.name,c.value=e.occupation,ie.hideFormErrors()}));var ee=new x({popupSelector:".popup_type_place",handleFormSubmit:function(e){W.addNewCard(e).then((function(e){ne.addNewItem(oe(e))}))}});ee.setEventListeners(),u.addEventListener("click",(function(){ee.open(),ue.disableButton(),ue.hideFormErrors()}));var te=new x({popupSelector:".popup_type_avatar",handleFormSubmit:function(e){W.changeAvatar(e).then((function(e){Y.setUserInfo(e),te.close(e)})).catch((function(e){console.log("Ошибка: ".concat(e))}))}});te.setEventListeners(),s.addEventListener("click",(function(){te.open(),ae.disableButton(),ae.hideFormErrors()}));var ne=new g({renderer:function(e){var t=oe(e);ne.addItem(t)}},".elements"),re=new K({popupSelector:".popup_type_submit"});function oe(e){var t=Y.getUserId(),n=new y({data:e,elementTemplateSelector:"#elementTemplate",handleCardClick:function(e,t){X.open(e,t)},userId:t,handleDeleteButtonClick:function(e){re.open(),re.actionOfSubmitForm((function(){W.deleteCard(e).then((function(){re.close(),n.deleteCard()})).catch((function(e){console.log("Ошибка: ".concat(e))}))}))},handleLikeButtonClick:function(e){var t=e.getIsLiked(),n=e.getCardId();W.updateLike(n,t).then((function(t){e.updateLikes(t.likes)}))}});return n.generateCard()}re.setEventListeners();var ie=new _(e,i);ie.enableValidation();var ue=new _(e,r);ue.enableValidation();var ae=new _(e,l);ae.enableValidation()})();
//# sourceMappingURL=main.js.map