define(['app/controllers/module'], function (module) {
'use strict';

/**
 * @ngdoc function
 * @name botanicApp.controller:AboutController
 * @description
 * # AboutController
 * Controller of the botanicApp
 */
module.controller('AboutController', function ($scope) {
		$scope.message = 'Spring Rocks';
	});
});