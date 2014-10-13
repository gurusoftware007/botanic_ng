'use strict';

requirejs.config({
	baseUrl: '../bower_components',
	deps: [
	'app/app',
	'app/routes'
	],
	paths: {
		'app'            : '../scripts',
		'bootstrap'      : '../bower_components/bootstrap/js',
		'angular'        : '../bower_components/angular/angular',
		'uiRouter'       : '../bower_components/angular-ui-router/angular-ui-router',
		'domReady'       : '../bower_components/requirejs-domready/domReady',
		'sockjs'         : '../bower_components/sockjs/sockjs',
		'stomp'          : '../bower_components/stomp-websocket/lib/stomp',
		'angular-masonry': '../bower_components/angular-masonry/angular-masonry',
		'jquery'         : '../bower_components/jquery/jquery',
		'masonry'        : '../bower_components/masonry/masonry',
		'imagesloaded'   : '../bower_components/imagesloaded/imagesloaded',
		'doc-ready'      : '../bower_components/doc-ready',
		'jquery-bridget' : '../bower_components/jquery-bridget/jquery.bridget'
	},
	shim: {
		//'highstock': ['jquery']
		'angular': {
			deps: ['imagesloaded', 'app/masonry-config'],
			exports: 'angular'
		},
		'angular-masonry': {
			deps: ['angular', 'masonry']
		},
		'masonry': ['imagesloaded'],
		'uiRouter': {
			deps: ['angular']
		},
		'sockjs': {
			exports: 'SockJS'
		},
		'stomp': {
			exports: 'Stomp'
		},
		'jquery': {
			exports: 'jQuery'
		}
	}
});

define(['app/routes'], function () {
	angular.bootstrap(document, ['botanicApp']);
});