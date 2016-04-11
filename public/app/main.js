
import $ from 'jquery';
import angular from 'angular';
import app from './module';

import './controllers/index';

angular.element(document).ready(function () {
    angular.bootstrap(document, [app.name]);
});