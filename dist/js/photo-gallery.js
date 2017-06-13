(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _footerController = require('./footer.controller.js');

var _footerController2 = _interopRequireDefault(_footerController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var component = {
    controller: _footerController2.default,
    template: require('./footer.template.html')
};

exports.default = component;

},{"./footer.controller.js":2,"./footer.template.html":3}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FooterController = function () {
    function FooterController() {
        // ADD DEPENDENCIES HERE

        _classCallCheck(this, FooterController);
    }

    _createClass(FooterController, [{
        key: "$onInit",
        value: function $onInit() {}
        // CALL CONTROLLER METHODS ON INITIALIZATION HERE


        // ADD CONTROLLER METHODS HERE

    }]);

    return FooterController;
}();

exports.default = FooterController;

},{}],3:[function(require,module,exports){
module.exports = "<!-- PUT FOOTER HTML HERE -->\n<div class=\"lt-footer\">\n    <div class=\"container\">\n        <div class=\"drop-shadow curved curved-top\"></div>\n        <div class=\"row\">\n            <div class=\"col-sm-12\">\n                <h3>Gallery built and powered by:</h3>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-sm-1\">\n                <img class=\"footer-img\" src=\"http://placekitten.com/75/75\" alt=\"Kitten 1\">\n            </div>\n            <div class=\"col-sm-1\">\n                <img class=\"footer-img\" src=\"http://placekitten.com/85/85\" alt=\"Kitten 2\">\n            </div>\n            <div class=\"col-sm-1\">\n                <img class=\"footer-img\" src=\"http://placekitten.com/105/105\" alt=\"Kitten 3\">\n            </div>\n            <div class=\"col-sm-1\">\n                <img class=\"footer-img\" src=\"http://placekitten.com/150/150\" alt=\"Kitten 3\">\n            </div>\n            <div class=\"col-sm-3\"></div>\n            <div class=\"col-sm-5\">\n                <p>Williamsburg blue bottle sustainable bespoke taiyaki. <a href=\"https://www.google.com\">Readymade</a> put a bird on it taxidermy viral normcore tbh williamsburg. Kombucha schlitz offal banjo. Polaroid edison bulb cred offal unicorn DIY.</p>\n            </div>\n        </div>\n    </div>\n</div>\n";

},{}],4:[function(require,module,exports){
'use strict';

var _footer = require('./footer.component');

var _footer2 = _interopRequireDefault(_footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

angular.module('lt.component.footer', []).component('ltFooter', _footer2.default);

},{"./footer.component":1}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _headerController = require('./header.controller.js');

var _headerController2 = _interopRequireDefault(_headerController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var component = {
    controller: _headerController2.default,
    template: require('./header.template.html')
};

exports.default = component;

},{"./header.controller.js":6,"./header.template.html":7}],6:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var HeaderController = function () {
    function HeaderController() {
        // ADD DEPENDENCIES HERE

        _classCallCheck(this, HeaderController);
    }

    _createClass(HeaderController, [{
        key: "$onInit",
        value: function $onInit() {}
        // CALL CONTROLLER METHODS ON INITIALIZATION HERE


        // ADD CONTROLLER METHODS HERE

    }]);

    return HeaderController;
}();

exports.default = HeaderController;

},{}],7:[function(require,module,exports){
module.exports = "<div class=\"lt-header\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-sm-12\">\n                <div><img class=\"lt-logo\" src=\"img/lt-logo.png\" alt=\"LT Logo\"></div>\n                <div>Tech <br/> Assessment</div>\n            </div>\n        </div>\n        <div class=\"drop-shadow curved curved-bottom\"></div>\n    </div>\n</div>\n<hr>\n";

},{}],8:[function(require,module,exports){
'use strict';

var _header = require('./header.component');

var _header2 = _interopRequireDefault(_header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

angular.module('lt.component.header', []).component('ltHeader', _header2.default);

},{"./header.component":5}],9:[function(require,module,exports){
'use strict';

var _pagination = require('./pagination.component');

var _pagination2 = _interopRequireDefault(_pagination);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

angular.module('lt.component.pagination', []).component('ltPagination', _pagination2.default);

},{"./pagination.component":10}],10:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _paginationController = require('./pagination.controller.js');

var _paginationController2 = _interopRequireDefault(_paginationController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var component = {
    controller: _paginationController2.default,
    template: require('./pagination.template.html'),
    bindings: {
        ltClicked: '&',
        ltModel: '<',
        ltShow: '<'
    }
};

exports.default = component;

},{"./pagination.controller.js":11,"./pagination.template.html":12}],11:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PaginationController = function () {
    function PaginationController() {
        _classCallCheck(this, PaginationController);
    }

    _createClass(PaginationController, [{
        key: '$onChanges',
        value: function $onChanges(changesObj) {
            if (changesObj.ltModel.currentValue !== undefined) {
                return;
            } else {
                this.initialPage();
            }
        }

        // Set up pagination on initial page load

    }, {
        key: 'initialPage',
        value: function initialPage() {
            this.ltClicked({ 'page': 1 });
            this.currentPage = 1;
            this.leftPage = 1;
            this.atFirstPage = true;
            this.setPageGroups(this.currentPage);
        }

        // Set pagination variables after moving to the next or previous group of 3

    }, {
        key: 'setPageGroups',
        value: function setPageGroups(currentPage, countDown) {
            this.leftPage = currentPage;
            this.middlePage = currentPage + 1;
            this.rightPage = currentPage + 2;

            if (countDown) {
                this.currentPage = this.leftPage;
            }

            this.checkForBeginning();
            this.checkForEnd();
        }

        // Check to see if at the very beginning of the groupings

    }, {
        key: 'checkForBeginning',
        value: function checkForBeginning() {
            if (this.leftPage !== 1) {
                this.onFirstPage = false;
            } else {
                this.onFirstPage = true;
            }
        }

        // Check to see if at the very end of the groupings

    }, {
        key: 'checkForEnd',
        value: function checkForEnd() {
            if (this.rightPage !== 50) {
                this.onLastPage = false;
            } else {
                this.onLastPage = true;
            }
        }

        // Go to a specific page and retrieve that group of photos

    }, {
        key: 'goToPage',
        value: function goToPage(page, updatePageGroups, countdown) {
            console.log('go to page called', page);
            this.currentPage = page;
            this.ltClicked({ page: page });
            if (updatePageGroups) {
                this.setPageGroups(page, countdown);
            }
        }

        // Check to determine which next set of groupings to get

    }, {
        key: 'newGroup',
        value: function newGroup(page) {
            if (page === this.leftPage) {
                this.goToPage(this.leftPage - 3, true, true);
            } else {
                this.goToPage(this.rightPage + 1, true, false);
            }
        }
    }]);

    return PaginationController;
}();

exports.default = PaginationController;

},{}],12:[function(require,module,exports){
module.exports = "<div class=\"container lt-pagination\" data-ng-if=\"!$ctrl.ltShow\">\n    <div class=\"row\">\n        <div class=\"col-sm-12\">\n            <ul>\n                <li class=\"previous-page\" data-ng-class=\"{'disabled': $ctrl.onFirstPage}\" data-ng-disabled=\"$ctrl.atFirstPage\" data-ng-click=\"$ctrl.newGroup($ctrl.leftPage)\">\n                    <span></span>\n                </li>\n                <li class=\"page\" data-ng-class=\"{'active': $ctrl.leftPage === $ctrl.currentPage}\" data-ng-model=\"$ctrl.leftPage\" data-ng-click=\"$ctl.goToPage($ctrl.leftPage, false, false)\">\n                    <span></span>\n                </li>\n                <li class=\"page\" data-ng-class=\"{'active': $ctrl.middlePage === $ctrl.currentPage}\" data-ng-model=\"$ctrl.middlePage\" data-ng-click=\"$ctrl.goToPage($ctrl.middlePage, false, false)\">\n                    <span></span>\n                </li>\n                <li class=\"page\" data-ng-class=\"{'active': $ctrl.rightPage === $ctrl.currentPage}\" data-ng-model=\"$ctrl.rightPage\" data-ng-click=\"$ctrl.goToPage($ctrl.rightPage, false, false)\">\n                    <span></span>\n                </li>\n                <li class=\"next-page\" data-ng-class=\"{'disabled': $ctrl.onLastPage}\" data-ng-click=\"$ctrl.newGroup($ctrl.rightPage)\">\n                    <span></span>\n                </li>\n            </ul>\n        </div>\n    </div>\n</div>\n";

},{}],13:[function(require,module,exports){
'use strict';

require('./common/js/header');

require('./common/js/pagination');

require('./common/js/footer');

var _photoGallery = require('./photo-gallery.config');

var _photoGallery2 = _interopRequireDefault(_photoGallery);

var _photoGallery3 = require('./photo-gallery.component');

var _photoGallery4 = _interopRequireDefault(_photoGallery3);

var _photoGallery5 = require('./photo-gallery.service');

var _photoGallery6 = _interopRequireDefault(_photoGallery5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

angular.module('app', ['ngRoute', 'lt.component.pagination', 'lt.component.header', 'lt.component.footer']).config(_photoGallery2.default).component('photoGallery', _photoGallery4.default).service('PhotoGalleryService', _photoGallery6.default);

},{"./common/js/footer":4,"./common/js/header":8,"./common/js/pagination":9,"./photo-gallery.component":14,"./photo-gallery.config":15,"./photo-gallery.service":17}],14:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _photoGalleryController = require('./photo-gallery.controller.js');

var _photoGalleryController2 = _interopRequireDefault(_photoGalleryController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var component = {
    controller: _photoGalleryController2.default,
    template: require('./photo-gallery.template.html')
};

exports.default = component;

},{"./photo-gallery.controller.js":16,"./photo-gallery.template.html":18}],15:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = Config;
function Config($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('');
    $routeProvider.when('/', {
        template: '<photo-gallery></photo-gallery>'
    }
    // Add more routes here as more pages get built
    ).otherwise({
        redirectTo: '/'
    });
}

},{}],16:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PhotoGalleryController = function () {
    // INJECT DEPENDENCIES AS SOON AS CONTROLLER IS INSTANTIATED
    function PhotoGalleryController(PhotoGalleryService) {
        _classCallCheck(this, PhotoGalleryController);

        this.PhotoGalleryService = PhotoGalleryService;
    }

    // CONTROLLER METHODS


    _createClass(PhotoGalleryController, [{
        key: 'getPhotos',
        value: function getPhotos(page) {
            var _this = this;

            // Call method in service that will return our photo list array
            this.PhotoGalleryService.getPhotos(page).then(function (success) {
                //TODO handle no photos returning
                _this.photoList = success.data;
                _this.checkForPhotos(success.data);
            }, function (error) {
                console.log('error', error);
            });
        }

        // Verify photo array has photos in it since api doesn't fail when none exist

    }, {
        key: 'checkForPhotos',
        value: function checkForPhotos(photoList) {
            if (photoList.length > 0) {
                this.photoList = photoList;
                this.noPhotosReturned = false;
            } else {
                this.noPhotosReturned = true;
            }
        }
    }]);

    return PhotoGalleryController;
}();

exports.default = PhotoGalleryController;

},{}],17:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PhotoGalleryService = function () {
    // INJECT DEPENDENCIES AS SOON AS SERVICE IS INSTANTIATED
    function PhotoGalleryService($http) {
        _classCallCheck(this, PhotoGalleryService);

        this.$http = $http;
    }

    // SERVICE METHODS *SET CONFIG IN CONSTRUCTOR IF ADDING MORE API CALLS EXPECTED IN JSON*


    _createClass(PhotoGalleryService, [{
        key: 'getPhotos',
        value: function getPhotos(pageNumber) {
            var config = {
                'headers': {
                    'Content-Type': 'application/json'
                }
            };
            return this.$http.get('https://jsonplaceholder.typicode.com/photos?albumId=' + pageNumber, config);
        }
    }]);

    return PhotoGalleryService;
}();

exports.default = PhotoGalleryService;

},{}],18:[function(require,module,exports){
module.exports = "\n<!-- BEGIN HEADER -->\n<lt-header></lt-header>\n<!-- END HEADER -->\n\n<!-- BEGIN PHOTO GALLERY CONTENT -->\n<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-sm-12\">\n            <h2>Image Gallery</h2>\n            <p class=\"tip-block\">Interactive images that display informative content when hovering</p>\n        </div>\n    </div>\n    <lt-pagination lt-model=\"$ctrl.photoList\" lt-clicked=\"$ctrl.getPhotos(page)\" lt-show=\"$ctrl.noPhotosReturned\"></lt-pagination>\n    <div class=\"row lt-photo-gallery\" data-ng-if=\"!$ctrl.noPhotosReturned\">\n        <div class=\"col-sm-3\" data-ng-repeat=\"photo in $ctrl.photoList\">\n            <div class=\"photo-wrapper\">\n                <img class=\"lt-photo\" data-ng-src=\"{{photo.url}}\" alt=\"Photo-{{photo.id}}\"/>\n                <div class=\"lt-photo-info\">\n                    <p>Id: {{photo.id}}</p>\n                    <p class=\"lt-photo-title\">Title: {{photo.title}}</p>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"row\" data-ng-if=\"$ctrl.noPhotosReturned\">\n        <div class=\"col-sm-12\">\n            <div class=\"alert alert-info\">Bummer! There was a problem retrieving the super magnificent photos. Please refresh your browser and try again. Sorry for the inconvenience</div>\n        </div>\n    </div>\n</div>\n<!-- END PHOTO GALLERY CONTENT -->\n\n<!-- BEGIN FOOTER -->\n<lt-footer></lt-footer>\n<!-- END FOOTER -->\n";

},{}]},{},[13]);
