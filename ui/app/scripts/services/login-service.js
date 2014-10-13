define(['app/services/module'], function (module) {
'use strict';
	/**
	 * @ngdoc function
	 * @name botanicApp.controller:AboutController
	 * @description
	 * # AboutController
	 * Controller of the botanicApp
	 */
module.factory('LoginService', function($resource) {
			return $resource(':action', {},
				{
					authenticate: {
						method: 'POST',
						params: {'action' : 'authenticate'}
					}
				}
			);
	});
});