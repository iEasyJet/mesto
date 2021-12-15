(()=>{"use strict";var e={d:(t,n)=>{for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};function t(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}e.d({},{hi:()=>ne,Fu:()=>oe,MG:()=>pe});var n=function(){function e(t,n){var r,o,i=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),o=function(){i.toggleButtonState(),i._inputs.forEach((function(e){e.addEventListener("input",(function(){i._checkInputValidity(e),i.toggleButtonState()}))}))},(r="_setEventListeners")in this?Object.defineProperty(this,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):this[r]=o,this._validationConfig=t,this._form=n,this._button=this._form.querySelector(this._validationConfig.submitButtonSelector),this._inputs=Array.from(this._form.querySelectorAll(this._validationConfig.inputSelector))}var n,r;return n=e,(r=[{key:"resetValidation",value:function(){var e=this;this.toggleButtonState(),this._inputs.forEach((function(t){e._hideInputError(t)}))}},{key:"_showInputError",value:function(e,t){var n=this._form.querySelector(".".concat(e.id,"-error"));e.classList.add(this._validationConfig.inputErrorClass),n.textContent=t,n.classList.add(this._validationConfig.errorClass)}},{key:"_hideInputError",value:function(e){var t=this._form.querySelector(".".concat(e.id,"-error"));e.classList.remove(this._validationConfig.inputErrorClass),t.classList.remove(this._validationConfig.errorClass),t.textContent=""}},{key:"_hasInvalidInput",value:function(){return this._inputs.some((function(e){return!e.validity.valid}))}},{key:"toggleButtonState",value:function(){this._hasInvalidInput()?(this._button.classList.add(this._validationConfig.inactiveButtonClass),this._button.setAttribute("disabled","disabled")):(this._button.classList.remove(this._validationConfig.inactiveButtonClass),this._button.removeAttribute("disabled"))}},{key:"_checkInputValidity",value:function(e){e.validity.valid?this._hideInputError(e):this._showInputError(e,e.validationMessage)}},{key:"enableValidation",value:function(){this._form.addEventListener("submit",(function(e){e.preventDefault()})),this._setEventListeners()}},{key:"changeButtonName",value:function(e){this._button.textContent=e}}])&&t(n.prototype,r),e}();function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var i=function(){function e(t){var n=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),o(this,"_handleEscClose",(function(e){"Escape"===e.key&&n.close()})),o(this,"_closeOnOverlay",(function(e){e.target===e.currentTarget&&n.close()})),this._selectorPopup=t,this._closePopup=this._selectorPopup.querySelector(".popup__close")}var t,n;return t=e,(n=[{key:"open",value:function(){var e=this;this._selectorPopup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose),this._selectorPopup.addEventListener("click",this._closeOnOverlay),this._closePopup.addEventListener("click",(function(){e.close()}))}},{key:"close",value:function(){this._selectorPopup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose),this._selectorPopup.removeEventListener("click",this._closeOnOverlay)}},{key:"setEventListeners",value:function(){var e=this;this._closePopup.addEventListener("click",(function(){e.close()}))}}])&&r(t.prototype,n),e}();function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function u(){return u="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=s(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},u.apply(this,arguments)}function s(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=p(e)););return e}function l(e,t){return l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},l(e,t)}function f(e,t){if(t&&("object"===a(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function p(e){return p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},p(e)}var h=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&l(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=p(r);if(o){var n=p(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return f(this,e)});function a(e,t){var n,r=t.submitEvent;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,e))._callBack=r,n._form=n._selectorPopup.querySelector(".popup__form"),n}return t=a,(n=[{key:"_getInputValues",value:function(){this._inputList=this._selectorPopup.querySelectorAll(".popup__input");var e={};return this._inputList.forEach((function(t){e[t.name]=t.value})),e}},{key:"close",value:function(){u(p(a.prototype),"close",this).call(this),this._form.reset()}},{key:"setEventListeners",value:function(){var e=this;u(p(a.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(t){t.preventDefault(),e._callBack(e._getInputValues()),e.close()}))}}])&&c(t.prototype,n),a}(i);function _(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var v=function(){function e(t,n){var r=this,o=n.submitEvent;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),d(this,"_handleEscClose",(function(e){"Escape"===e.key&&r.close()})),d(this,"_closeOnOverlay",(function(e){e.target===e.currentTarget&&r.close()})),this._nameProfile=document.querySelector(t.nameProfile),this._jobProfile=document.querySelector(t.jobProfile),this._popupChangeAvatar=t.popupChangeAvatar,this._closePopup=this._popupChangeAvatar.querySelector(".popup__close"),this.btnUpdateAvatar=document.querySelector(".profile__pencil"),this.submitEvent=o,this._avatarProfile=document.querySelector(".profile__img")}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return this._userData={name:this._nameProfile.textContent,job:this._jobProfile.textContent},this._userData}},{key:"setUserInfo",value:function(e){this._nameProfile.textContent=e.name,this._jobProfile.textContent=e.about}},{key:"setUserAvatar",value:function(e){this._avatarProfile.src=e.avatar}},{key:"submit",value:function(){this.submitEvent()}},{key:"_open",value:function(){var e=this;this._popupChangeAvatar.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose),this._popupChangeAvatar.addEventListener("click",this._closeOnOverlay),this._closePopup.addEventListener("click",(function(){e.close()}))}},{key:"close",value:function(){this._popupChangeAvatar.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose),this._popupChangeAvatar.removeEventListener("click",this._closeOnOverlay)}},{key:"openPopup",value:function(e){var t=this;e.validation,this.btnUpdateAvatar.addEventListener("click",(function(){t._open()})),this.submit()}}])&&_(t.prototype,n),e}();function y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var m=function(){function e(t,n,r,o,i,a,c){var u=c.callbackAddLike,s=c.callbackDeleteLike;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._title=t,this._linkImg=n,this._template=r.template,this._like=r.like,this._delete=r.delete,this._img=r.img,this._titleCard=r.title,this._handleCardClick=r.handleCardClick,this._id=r.id,this._likeCounter=r.likeCounter,this._userId=o,this._cardId=i,this._callbackAddLike=u,this._callbackDeleteLike=s,this._sumLikes=a,this._handleDeleteCard=r.handleDeleteCard}var t,n;return t=e,(n=[{key:"_getTemplate",value:function(){return document.querySelector(this._template).content.querySelector(".card__item").cloneNode(!0)}},{key:"addLike",value:function(){this._elementLike.classList.add("card__like_active")}},{key:"countLike",value:function(e){this._elementLikes.textContent=e}},{key:"deleteLike",value:function(){this._elementLike.classList.remove("card__like_active")}},{key:"_deleteCard",value:function(){this._element.remove()}},{key:"_setEventListeners",value:function(){var e=this;this._elementLike.addEventListener("click",(function(){e._elementLike.className.includes("card__like_active")?(e.deleteLike(),e._callbackDeleteLike()):(e.addLike(),e._callbackAddLike())})),this._elementDelete.addEventListener("click",(function(){e._handleDeleteCard(e._cardId,e)})),this._elementImg.addEventListener("click",(function(){e._handleCardClick(e._title,e._linkImg)}))}},{key:"generateCard",value:function(){var e=this;return this._element=this._getTemplate(),this._elementLike=this._element.querySelector(this._like),this._elementDelete=this._element.querySelector(this._delete),this._elementImg=this._element.querySelector(this._img),this._elementTitle=this._element.querySelector(this._titleCard),this._elementLikes=this._element.querySelector(this._likeCounter),this._id!==this._userId&&this._element.querySelector(this._delete).remove(),this._sumLikes.some((function(t){return t._id===e._id}))&&this.addLike(),this._setEventListeners(),this._elementImg.src=this._linkImg,this._elementImg.alt=this._linkImg,this._elementTitle.textContent=this._title,this._elementLikes.textContent=this._sumLikes.length,this._element}}])&&y(t.prototype,n),e}();function b(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var k=function(){function e(t,n){var r=t.items,o=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderedItems=r,this._renderer=o,this._container=document.querySelector(n)}var t,n;return t=e,(n=[{key:"addItem",value:function(e){this._container.prepend(e)}},{key:"renderItems",value:function(){var e=this;this._renderedItems.forEach((function(t){e._renderer(t)}))}}])&&b(t.prototype,n),e}(),g=document.querySelector(".profile"),C=g.querySelector(".profile__edit-btn"),E=g.querySelector(".profile__btn"),L=document.querySelector(".popup_type_profile"),w=L.querySelector(".popup__form"),O=w.querySelector(".popup__input_type_name"),P=w.querySelector(".popup__input_type_job"),S=document.querySelector(".popup_type_card"),j=S.querySelector(".popup__form"),I=document.querySelector(".popup_type_pic"),q=document.querySelector(".popup_type_delete-card"),R=document.querySelector(".popup_type_new-avatar"),T=R.querySelector(".popup__form_update_avatar"),A=R.querySelector(".popup__input"),B={nameProfile:".profile__name-user",jobProfile:".profile__name-job",popupChangeAvatar:R},D={template:"#card",like:".card__like",likeCounter:".card__like-counter",delete:".card__delete",img:".card__img",title:".card__title",id:"32552929d6c636d73b975107",handleCardClick:oe,handleDeleteCard:pe},x={inputSelector:".popup__input",submitButtonSelector:".popup__btn",inactiveButtonClass:"popup__btn_disabled",inputErrorClass:"popup__input_error_active",errorClass:"popup__input-error_active"},U=function(e){var t=new k({items:e,renderer:function(e){!function(e,t){var n=new m(e.name,e.link,D,e.owner._id,e._id,e.likes,{callbackAddLike:function(){ne.addLike(e._id).then((function(e){n.addLike(e.likes.length),n.countLike(e.likes.length)})).catch((function(e){return console.log(e)}))},callbackDeleteLike:function(){ne.deleteLike(e._id).then((function(e){n.deleteLike(e.likes.length),n.countLike(e.likes.length)})).catch((function(e){return console.log(e)}))}}),r=n.generateCard();t.addItem(r)}(e,t)}},".card");t.renderItems()};function N(e){return N="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},N(e)}function V(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function z(){return z="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=J(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},z.apply(this,arguments)}function J(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=F(e)););return e}function H(e,t){return H=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},H(e,t)}function M(e,t){if(t&&("object"===N(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function F(e){return F=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},F(e)}var G=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&H(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=F(r);if(o){var n=F(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return M(this,e)});function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e))._title=t._selectorPopup.querySelector(".popup__pic-title"),t._expand=t._selectorPopup.querySelector(".popup__pic-expand"),t}return t=a,(n=[{key:"open",value:function(e,t){z(F(a.prototype),"open",this).call(this),this._title.textContent=e,this._expand.src=t,this._expand.alt=e}}])&&V(t.prototype,n),a}(i);function K(e){return K="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},K(e)}function Q(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function W(){return W="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=X(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},W.apply(this,arguments)}function X(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=$(e)););return e}function Y(e,t){return Y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},Y(e,t)}function Z(e,t){if(t&&("object"===K(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function $(e){return $=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},$(e)}var ee=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Y(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=$(r);if(o){var n=$(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return Z(this,e)});function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e))._deleteConfirmation=e.querySelector(".popup__btn"),t}return t=a,(n=[{key:"submit",value:function(e){this._submit=e}},{key:"setEventListeners",value:function(){var e=this;W($(a.prototype),"setEventListeners",this).call(this),this._deleteConfirmation.addEventListener("click",(function(){e._submit()}))}}])&&Q(t.prototype,n),a}(i);function te(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var ne=new(function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._url=t.url,this._token=t.token}var t,n;return t=e,(n=[{key:"_parseResponse",value:function(e){return e.ok?e.json():Promise.reject(new Error("Произошла ошибка со статус-кодом ".concat(e.status)))}},{key:"getUserUnfo",value:function(){var e=this;return fetch("".concat(this._url,"/users/me"),{headers:{authorization:this._token}}).then((function(t){return e._parseResponse(t)}))}},{key:"getInitalCards",value:function(){var e=this;return fetch("".concat(this._url,"/cards"),{headers:{authorization:this._token}}).then((function(t){return e._parseResponse(t)}))}},{key:"changeUserInfo",value:function(e,t){var n=this;return fetch("".concat(this._url,"/users/me"),{method:"PATCH",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({name:e,about:t})}).then((function(e){return n._parseResponse(e)}))}},{key:"addNewCard",value:function(e){var t=this;return fetch("".concat(this._url,"/cards"),{method:"POST",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({name:e.name,link:e.link})}).then((function(e){return t._parseResponse(e)}))}},{key:"deleteCard",value:function(e){var t=this;return fetch("".concat(this._url,"/cards/").concat(e),{method:"DELETE",headers:{authorization:this._token}}).then((function(e){return t._parseResponse(e)}))}},{key:"addLike",value:function(e){var t=this;return fetch("".concat(this._url,"/cards/").concat(e,"/likes"),{method:"PUT",headers:{authorization:this._token}}).then((function(e){return t._parseResponse(e)}))}},{key:"deleteLike",value:function(e){var t=this;return fetch("".concat(this._url,"/cards/").concat(e,"/likes"),{method:"DELETE",headers:{authorization:this._token}}).then((function(e){return t._parseResponse(e)}))}},{key:"changeUserAvatar",value:function(e){var t=this;return fetch("".concat(this._url,"/users/me/avatar"),{method:"PATCH",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({avatar:e})}).then((function(e){return t._parseResponse(e)}))}}])&&te(t.prototype,n),e}())({url:"https://mesto.nomoreparties.co/v1/cohort-31",token:"e34c71c9-c8d5-4539-958c-5ad6a7cda687"});ne.getUserUnfo().then((function(e){ie.setUserInfo(e),ie.setUserAvatar(e)}));var re=new G(I);function oe(e,t){re.open(e,t),re.setEventListeners()}var ie=new v(B,{submitEvent:function(){R.addEventListener("submit",(function(){se.changeButtonName("Сохранение..."),ne.changeUserAvatar(A.value).then((function(e){ie.setUserAvatar(e),ie.close()})).catch((function(e){return console.log(e)})).finally((function(){se.changeButtonName("Сохранить")})),T.reset(),ie.close(),se.resetValidation()}))}});ie.openPopup({validation:function(){se.resetValidation()}});var ae=new h(L,{submitEvent:function(e){ce.changeButtonName("Сохранение...");var t=e.name,n=e.job;ne.changeUserInfo(t,n).then((function(e){ie.setUserInfo(e),ae.close()})).catch((function(e){return console.log(e)})).finally((function(){ce.changeButtonName("Сохранить")})),ae.close()}});ae.setEventListeners(),C.addEventListener("click",(function(){var e;ae.open(),e=ie.getUserInfo(),O.value=e.name,P.value=e.job,ce.resetValidation()}));var ce=new n(x,w);ce.enableValidation();var ue=new n(x,j);ue.enableValidation();var se=new n(x,T);se.enableValidation(),ne.getInitalCards().then((function(e){U(e)})).catch((function(e){return console.log(e)}));var le=new h(S,{submitEvent:function(e){ue.changeButtonName("Загрузка...");var t={name:e.nameImg,link:e.linkImg};ne.addNewCard(t).then((function(e){var t=[{name:e.name,link:e.link,owner:{_id:e.owner._id},_id:e._id,likes:e.likes}];U(t),le.close()})).catch((function(e){return console.log(e)})).finally((function(){ue.changeButtonName("Создать")}))}});le.setEventListeners(),E.addEventListener("click",(function(){le.open(),ue.resetValidation()}));var fe=new ee(q);function pe(e,t){fe.open(),fe.submit((function(){!function(e,t){ne.deleteCard(e).then((function(){t._deleteCard(),fe.close()})).catch((function(e){return console.log(e)}))}(e,t)}))}fe.setEventListeners()})();