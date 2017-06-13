'use strict';

import './common/js/header';
import './common/js/pagination';
import './common/js/footer';
import Config from './photo-gallery.config';
import component from './photo-gallery.component';
import PhotoGalleryService from './photo-gallery.service';
angular.module('app', [
    'ngRoute',
    'lt.component.pagination',
    'lt.component.header',
    'lt.component.footer'
])
    .config(Config)
    .component('photoGallery', component)
    .service('PhotoGalleryService', PhotoGalleryService);
