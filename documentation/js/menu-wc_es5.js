'use strict';

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct.bind(); } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

customElements.define('compodoc-menu', /*#__PURE__*/function (_HTMLElement) {
  _inherits(_class, _HTMLElement);

  var _super = _createSuper(_class);

  function _class() {
    var _this;

    _classCallCheck(this, _class);

    _this = _super.call(this);
    _this.isNormalMode = _this.getAttribute('mode') === 'normal';
    return _this;
  }

  _createClass(_class, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      this.render(this.isNormalMode);
    }
  }, {
    key: "render",
    value: function render(isNormalMode) {
      var tp = lithtml.html("\n        <nav>\n            <ul class=\"list\">\n                <li class=\"title\">\n                    <a href=\"index.html\" data-type=\"index-link\">ionicprojetfull documentation</a>\n                </li>\n\n                <li class=\"divider\"></li>\n                ".concat(isNormalMode ? "<div id=\"book-search-input\" role=\"search\"><input type=\"text\" placeholder=\"Type to search\"></div>" : '', "\n                <li class=\"chapter\">\n                    <a data-type=\"chapter-link\" href=\"index.html\"><span class=\"icon ion-ios-home\"></span>Getting started</a>\n                    <ul class=\"links\">\n                        <li class=\"link\">\n                            <a href=\"overview.html\" data-type=\"chapter-link\">\n                                <span class=\"icon ion-ios-keypad\"></span>Overview\n                            </a>\n                        </li>\n                        <li class=\"link\">\n                            <a href=\"index.html\" data-type=\"chapter-link\">\n                                <span class=\"icon ion-ios-paper\"></span>README\n                            </a>\n                        </li>\n                                <li class=\"link\">\n                                    <a href=\"dependencies.html\" data-type=\"chapter-link\">\n                                        <span class=\"icon ion-ios-list\"></span>Dependencies\n                                    </a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"properties.html\" data-type=\"chapter-link\">\n                                        <span class=\"icon ion-ios-apps\"></span>Properties\n                                    </a>\n                                </li>\n                    </ul>\n                </li>\n                    <li class=\"chapter modules\">\n                        <a data-type=\"chapter-link\" href=\"modules.html\">\n                            <div class=\"menu-toggler linked\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#modules-links"' : 'data-target="#xs-modules-links"', ">\n                                <span class=\"icon ion-ios-archive\"></span>\n                                <span class=\"link-name\">Modules</span>\n                                <span class=\"icon ion-ios-arrow-down\"></span>\n                            </div>\n                        </a>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"', ">\n                            <li class=\"link\">\n                                <a href=\"modules/AppModule.html\" data-type=\"entity-link\" >AppModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#components-links-module-AppModule-9615f675692498614c596687947b3612be56f3032ba6d78f32711841dde39e17c9367dfeb31a22c81480ac32b0b0e7dc3526f0121380173948c170b5e4ea8e0b"' : 'data-target="#xs-components-links-module-AppModule-9615f675692498614c596687947b3612be56f3032ba6d78f32711841dde39e17c9367dfeb31a22c81480ac32b0b0e7dc3526f0121380173948c170b5e4ea8e0b"', ">\n                                            <span class=\"icon ion-md-cog\"></span>\n                                            <span>Components</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="components-links-module-AppModule-9615f675692498614c596687947b3612be56f3032ba6d78f32711841dde39e17c9367dfeb31a22c81480ac32b0b0e7dc3526f0121380173948c170b5e4ea8e0b"' : 'id="xs-components-links-module-AppModule-9615f675692498614c596687947b3612be56f3032ba6d78f32711841dde39e17c9367dfeb31a22c81480ac32b0b0e7dc3526f0121380173948c170b5e4ea8e0b"', ">\n                                            <li class=\"link\">\n                                                <a href=\"components/AppComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >AppComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/MenuComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >MenuComponent</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/AppRoutingModule.html\" data-type=\"entity-link\" >AppRoutingModule</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/CoursesPageModule.html\" data-type=\"entity-link\" >CoursesPageModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#components-links-module-CoursesPageModule-d4dbd44e6f08305f4f95ce38824378622bbf38be86f4c4f07ae0508667fb8b91171a14f8e52e3d26f5bf4abac4833112629f59a08e757a547c13e45a83bdc6de"' : 'data-target="#xs-components-links-module-CoursesPageModule-d4dbd44e6f08305f4f95ce38824378622bbf38be86f4c4f07ae0508667fb8b91171a14f8e52e3d26f5bf4abac4833112629f59a08e757a547c13e45a83bdc6de"', ">\n                                            <span class=\"icon ion-md-cog\"></span>\n                                            <span>Components</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="components-links-module-CoursesPageModule-d4dbd44e6f08305f4f95ce38824378622bbf38be86f4c4f07ae0508667fb8b91171a14f8e52e3d26f5bf4abac4833112629f59a08e757a547c13e45a83bdc6de"' : 'id="xs-components-links-module-CoursesPageModule-d4dbd44e6f08305f4f95ce38824378622bbf38be86f4c4f07ae0508667fb8b91171a14f8e52e3d26f5bf4abac4833112629f59a08e757a547c13e45a83bdc6de"', ">\n                                            <li class=\"link\">\n                                                <a href=\"components/CoursesPage.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >CoursesPage</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/CoursesPageRoutingModule.html\" data-type=\"entity-link\" >CoursesPageRoutingModule</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/HomePageModule.html\" data-type=\"entity-link\" >HomePageModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#components-links-module-HomePageModule-505138d4b0b902820bf04bf9e711dc5c228dc709f7eb29e730938c67b74c1e14c0502b3e3088157496bc55ca02f2a16dd453cf16dfda29790b02c7c447c557e6"' : 'data-target="#xs-components-links-module-HomePageModule-505138d4b0b902820bf04bf9e711dc5c228dc709f7eb29e730938c67b74c1e14c0502b3e3088157496bc55ca02f2a16dd453cf16dfda29790b02c7c447c557e6"', ">\n                                            <span class=\"icon ion-md-cog\"></span>\n                                            <span>Components</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="components-links-module-HomePageModule-505138d4b0b902820bf04bf9e711dc5c228dc709f7eb29e730938c67b74c1e14c0502b3e3088157496bc55ca02f2a16dd453cf16dfda29790b02c7c447c557e6"' : 'id="xs-components-links-module-HomePageModule-505138d4b0b902820bf04bf9e711dc5c228dc709f7eb29e730938c67b74c1e14c0502b3e3088157496bc55ca02f2a16dd453cf16dfda29790b02c7c447c557e6"', ">\n                                            <li class=\"link\">\n                                                <a href=\"components/HomePage.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >HomePage</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/HomePageRoutingModule.html\" data-type=\"entity-link\" >HomePageRoutingModule</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/ListeCoursPageModule.html\" data-type=\"entity-link\" >ListeCoursPageModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#components-links-module-ListeCoursPageModule-9f9e07303d73251d3f2bf94b6ef68f344419c391e2d5daee8e21b4d8ac0c5da3345e811c2eeabf928029fbf652fcbee1b2ac1bb4fc9ba434e3493f5713668c16"' : 'data-target="#xs-components-links-module-ListeCoursPageModule-9f9e07303d73251d3f2bf94b6ef68f344419c391e2d5daee8e21b4d8ac0c5da3345e811c2eeabf928029fbf652fcbee1b2ac1bb4fc9ba434e3493f5713668c16"', ">\n                                            <span class=\"icon ion-md-cog\"></span>\n                                            <span>Components</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="components-links-module-ListeCoursPageModule-9f9e07303d73251d3f2bf94b6ef68f344419c391e2d5daee8e21b4d8ac0c5da3345e811c2eeabf928029fbf652fcbee1b2ac1bb4fc9ba434e3493f5713668c16"' : 'id="xs-components-links-module-ListeCoursPageModule-9f9e07303d73251d3f2bf94b6ef68f344419c391e2d5daee8e21b4d8ac0c5da3345e811c2eeabf928029fbf652fcbee1b2ac1bb4fc9ba434e3493f5713668c16"', ">\n                                            <li class=\"link\">\n                                                <a href=\"components/ListeCoursPage.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >ListeCoursPage</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/SaisirComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >SaisirComponent</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/ListeCoursPageRoutingModule.html\" data-type=\"entity-link\" >ListeCoursPageRoutingModule</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/RechercherCoursPageModule.html\" data-type=\"entity-link\" >RechercherCoursPageModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#components-links-module-RechercherCoursPageModule-d595ac4603dd663fa17b8b3dc20b3016cd8038bf53d98333898fc27f9c82d1404ab5025cb070a7739a999a12afb679cfb6e2ac089f7fb727498943b93198f52a"' : 'data-target="#xs-components-links-module-RechercherCoursPageModule-d595ac4603dd663fa17b8b3dc20b3016cd8038bf53d98333898fc27f9c82d1404ab5025cb070a7739a999a12afb679cfb6e2ac089f7fb727498943b93198f52a"', ">\n                                            <span class=\"icon ion-md-cog\"></span>\n                                            <span>Components</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="components-links-module-RechercherCoursPageModule-d595ac4603dd663fa17b8b3dc20b3016cd8038bf53d98333898fc27f9c82d1404ab5025cb070a7739a999a12afb679cfb6e2ac089f7fb727498943b93198f52a"' : 'id="xs-components-links-module-RechercherCoursPageModule-d595ac4603dd663fa17b8b3dc20b3016cd8038bf53d98333898fc27f9c82d1404ab5025cb070a7739a999a12afb679cfb6e2ac089f7fb727498943b93198f52a"', ">\n                                            <li class=\"link\">\n                                                <a href=\"components/RechercherCoursPage.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >RechercherCoursPage</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/RechercherCoursPageRoutingModule.html\" data-type=\"entity-link\" >RechercherCoursPageRoutingModule</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/SaisieCoursPageModule.html\" data-type=\"entity-link\" >SaisieCoursPageModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#components-links-module-SaisieCoursPageModule-e9eda957790d13c0ca0b5fb8543e24ea4475328af73047f0e09a6f02a9f84f9aa182792f90256f86b7017eeddde50f92613094d97fd98c83efd936c6976f3baf"' : 'data-target="#xs-components-links-module-SaisieCoursPageModule-e9eda957790d13c0ca0b5fb8543e24ea4475328af73047f0e09a6f02a9f84f9aa182792f90256f86b7017eeddde50f92613094d97fd98c83efd936c6976f3baf"', ">\n                                            <span class=\"icon ion-md-cog\"></span>\n                                            <span>Components</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="components-links-module-SaisieCoursPageModule-e9eda957790d13c0ca0b5fb8543e24ea4475328af73047f0e09a6f02a9f84f9aa182792f90256f86b7017eeddde50f92613094d97fd98c83efd936c6976f3baf"' : 'id="xs-components-links-module-SaisieCoursPageModule-e9eda957790d13c0ca0b5fb8543e24ea4475328af73047f0e09a6f02a9f84f9aa182792f90256f86b7017eeddde50f92613094d97fd98c83efd936c6976f3baf"', ">\n                                            <li class=\"link\">\n                                                <a href=\"components/SaisieCoursPage.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >SaisieCoursPage</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/SaisieCoursPageRoutingModule.html\" data-type=\"entity-link\" >SaisieCoursPageRoutingModule</a>\n                            </li>\n                </ul>\n                </li>\n                    <li class=\"chapter\">\n                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#classes-links"' : 'data-target="#xs-classes-links"', ">\n                            <span class=\"icon ion-ios-paper\"></span>\n                            <span>Classes</span>\n                            <span class=\"icon ion-ios-arrow-down\"></span>\n                        </div>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"', ">\n                            <li class=\"link\">\n                                <a href=\"classes/ModelCours.html\" data-type=\"entity-link\" >ModelCours</a>\n                            </li>\n                        </ul>\n                    </li>\n                        <li class=\"chapter\">\n                            <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#injectables-links"' : 'data-target="#xs-injectables-links"', ">\n                                <span class=\"icon ion-md-arrow-round-down\"></span>\n                                <span>Injectables</span>\n                                <span class=\"icon ion-ios-arrow-down\"></span>\n                            </div>\n                            <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"', ">\n                                <li class=\"link\">\n                                    <a href=\"injectables/CoursServiceService.html\" data-type=\"entity-link\" >CoursServiceService</a>\n                                </li>\n                            </ul>\n                        </li>\n                    <li class=\"chapter\">\n                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#miscellaneous-links"' : 'data-target="#xs-miscellaneous-links"', ">\n                            <span class=\"icon ion-ios-cube\"></span>\n                            <span>Miscellaneous</span>\n                            <span class=\"icon ion-ios-arrow-down\"></span>\n                        </div>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"', ">\n                            <li class=\"link\">\n                                <a href=\"miscellaneous/variables.html\" data-type=\"entity-link\">Variables</a>\n                            </li>\n                        </ul>\n                    </li>\n                        <li class=\"chapter\">\n                            <a data-type=\"chapter-link\" href=\"routes.html\"><span class=\"icon ion-ios-git-branch\"></span>Routes</a>\n                        </li>\n                    <li class=\"chapter\">\n                        <a data-type=\"chapter-link\" href=\"coverage.html\"><span class=\"icon ion-ios-stats\"></span>Documentation coverage</a>\n                    </li>\n                    <li class=\"divider\"></li>\n                    <li class=\"copyright\">\n                        Documentation generated using <a href=\"https://compodoc.app/\" target=\"_blank\">\n                            <img data-src=\"images/compodoc-vectorise.png\" class=\"img-responsive\" data-type=\"compodoc-logo\">\n                        </a>\n                    </li>\n            </ul>\n        </nav>\n        "));
      this.innerHTML = tp.strings;
    }
  }]);

  return _class;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement)));