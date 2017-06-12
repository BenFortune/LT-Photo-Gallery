(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _pagination = require('./pagination.component');

var _pagination2 = _interopRequireDefault(_pagination);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

angular.module('lt.component.pagination', []).component('ltPagination', _pagination2.default);

},{"./pagination.component":2}],2:[function(require,module,exports){
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
        ltModel: '<'
    }
};

exports.default = component;

},{"./pagination.controller.js":3,"./pagination.template.html":4}],3:[function(require,module,exports){
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
    }, {
        key: 'initialPage',
        value: function initialPage() {
            this.ltClicked({ 'page': 1 });
            this.currentPage = 1;
            this.leftPage = 1;
            this.atFirstPage = true;
            this.setPageGroups(this.currentPage);
        }
    }, {
        key: 'setPageGroups',
        value: function setPageGroups(currentPage, countDown) {
            if (countDown) {
                this.leftPage = currentPage - 2;
                this.middlePage = currentPage - 1;
                this.rightPage = currentPage;
                this.currentPage = this.leftPage;
            } else {
                this.leftPage = currentPage;
                this.middlePage = currentPage + 1;
                this.rightPage = currentPage + 2;
            }
            this.checkForBeginning();
            this.checkForEnd();
        }
    }, {
        key: 'checkForBeginning',
        value: function checkForBeginning() {
            if (this.leftPage !== 1) {
                this.onFirstPage = false;
            } else {
                this.onFirstPage = true;
            }
        }
    }, {
        key: 'checkForEnd',
        value: function checkForEnd() {
            if (this.rightPage !== 50) {
                this.onLastPage = false;
            } else {
                this.onLastPage = true;
            }
        }
    }, {
        key: 'goToPage',
        value: function goToPage(page, updatePageGroups, countdown) {
            this.currentPage = page;
            this.ltClicked({ page: page });
            if (updatePageGroups) {
                this.setPageGroups(page, countdown);
            }
        }
    }, {
        key: 'newGroup',
        value: function newGroup(page) {
            if (page === this.leftPage) {
                this.goToPage(this.leftPage - 1, true, true);
            } else {
                this.goToPage(this.rightPage + 1, true, false);
            }
        }
    }, {
        key: 'refreshPage',
        value: function refreshPage() {
            this.ltClicked({ 'page': this.page });
        }
    }]);

    return PaginationController;
}();

exports.default = PaginationController;

},{}],4:[function(require,module,exports){
module.exports = "<div class=\"container lt-pagination\">\n    <div class=\"row\">\n        <div class=\"col-sm-12\">\n            <p>left page {{$ctrl.leftPage}}</p>\n            <p>middle page {{$ctrl.middlePage}}</p>\n            <p>right page {{$ctrl.rightPage}}</p>\n            <ul>\n                <li class=\"previous-page\" data-ng-class=\"{'disabled': $ctrl.atFirstPage}\" data-ng-disabled=\"$ctrl.atFirstPage\" data-ng-click=\"$ctrl.newGroup($ctrl.leftPage)\">\n                    <span></span>\n                </li>\n                <li class=\"page\" data-ng-class=\"{'active': $ctrl.leftPage === $ctrl.currentPage}\" data-ng-model=\"$ctrl.leftPage\" data-ng-click=\"$ctl.goToPage($ctrl.leftPage, false, false)\">\n                    <span></span>\n                </li>\n                <li class=\"page\" data-ng-class=\"{'active': $ctrl.middlePage === $ctrl.currentPage}\" data-ng-model=\"$ctrl.middlePage\" data-ng-click=\"$ctrl.goToPage($ctrl.middlePage, false, false)\">\n                    <span></span>\n                </li>\n                <li class=\"page\" data-ng-class=\"{'active': $ctrl.rightPage === $ctrl.currentPage}\" data-ng-model=\"$ctrl.rightPage\" data-ng-click=\"$ctrl.goToPage($ctrl.rightPage, false, false)\">\n                    <span></span>\n                </li>\n                <li class=\"next-page\" data-ng-class=\"{'disabled': $ctrl.atLastPage}\" data-ng-click=\"$ctrl.newGroup($ctrl.rightPage)\">\n                    <span></span>\n                </li>\n            </ul>\n        </div>\n    </div>\n</div>\n";

},{}],5:[function(require,module,exports){
'use strict';

require('./common/js/pagination');

var _photoGallery = require('./photo-gallery.config');

var _photoGallery2 = _interopRequireDefault(_photoGallery);

var _photoGallery3 = require('./photo-gallery.component');

var _photoGallery4 = _interopRequireDefault(_photoGallery3);

var _photoGallery5 = require('./photo-gallery.service');

var _photoGallery6 = _interopRequireDefault(_photoGallery5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

angular.module('app', ['ngRoute', 'lt.component.pagination']).config(_photoGallery2.default).component('photoGallery', _photoGallery4.default).service('PhotoGalleryService', _photoGallery6.default);

},{"./common/js/pagination":1,"./photo-gallery.component":6,"./photo-gallery.config":7,"./photo-gallery.service":9}],6:[function(require,module,exports){
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

},{"./photo-gallery.controller.js":8,"./photo-gallery.template.html":10}],7:[function(require,module,exports){
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
    // .when('/new', {
    //     template: '<edit-letter></edit-letter>',
    //     resolve: newLetterResolve
    // })
    // .when('/edit/:letterId?', {
    //     template: '<edit-letter></edit-letter>',
    //     resolve: editLetterResolve
    // })
    ).otherwise({
        redirectTo: '/'
    });
}
//
// const newLetterResolve = {
//     customerResolve: function getCustomer(EditLetterService) {
//         'ngInject';
//         return EditLetterService.getCustomer();
//     },
//     newOrEdit: function newOrEdit() {
//         return true;
//     }
// };
//
// const editLetterResolve = {
//     customerResolve: function getCustomer(EditLetterService) {
//         'ngInject';
//         return EditLetterService.getCustomer();
//     },
//     newOrEdit: () => {
//         return false;
//     }
// };

},{}],8:[function(require,module,exports){
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
            }, function (error) {
                console.log('error', error);
            });
        }
    }]);

    return PhotoGalleryController;
}();

exports.default = PhotoGalleryController;

},{}],9:[function(require,module,exports){
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

},{}],10:[function(require,module,exports){
module.exports = "\n<!-- BEGIN HEADER -->\n<div class=\"lt-header\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-sm-12\">\n                <div><img class=\"lt-logo\" src=\"img/lt-logo.png\" alt=\"LT Logo\"></div>\n                <div>Tech <br/> Assessment</div>\n            </div>\n        </div>\n        <div class=\"drop-shadow curved curved-bottom\"></div>\n    </div>\n</div>\n<hr>\n<!-- END HEADER -->\n<!-- BEGIN PHOTO GALLERY CONTENT -->\n<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-sm-12\">\n            <h2>Image Gallery</h2>\n            <p>Interactive images representing some rad content</p>\n        </div>\n    </div>\n    <lt-pagination lt-model=\"$ctrl.photoList\" lt-clicked=\"$ctrl.getPhotos(page)\"></lt-pagination>\n    <div class=\"row lt-photo-gallery\">\n        <div class=\"col-sm-3\" data-ng-repeat=\"photo in $ctrl.photoList\">\n            <div class=\"photo-wrapper\">\n                <img class=\"lt-photo\" data-ng-src=\"{{photo.url}}\" alt=\"Photo-{{photo.id}}\"/>\n                <div class=\"lt-photo-info\">\n                    <p>Id: {{photo.id}}</p>\n                    <p class=\"lt-photo-title\">Title: {{photo.title}}</p>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<!-- END PHOTO GALLERY CONTENT -->\n<!-- BEGIN FOOTER -->\n<!-- END FOOTER -->\n";

},{}]},{},[5]);
