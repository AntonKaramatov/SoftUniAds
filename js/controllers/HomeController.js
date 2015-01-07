'use strict';

// The HomeController holds the presentation logic for the home screen
app.controller('HomeController',
    function ($scope, $rootScope, adsService, notifyService, pageSize) {
		$scope.adsParams = {
			"startPage" : 1,
			"pageSize" : pageSize
		}

		$scope.reloadAds = function (){
			adsService.getAds(
				$scope.adsParams,
				function success(data){
					$scope.data = data;
				},
				function error(err){
					notifyService.showError("Cannot load ads", err);
				}
			);
		}

		$scope.reloadAds();
	}
);