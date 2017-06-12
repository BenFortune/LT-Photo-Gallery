'use strict';

import './common/js/pagination';
import Config from './photo-gallery.config';
import component from './photo-gallery.component';
import PhotoGalleryService from './photo-gallery.service';
angular.module('app', [
    'ngRoute',
    'lt.component.pagination'
])
    .config(Config)
    .component('photoGallery', component)
    .service('PhotoGalleryService', PhotoGalleryService);
