'use strict';

app.controller('UserDeleteAdController',
    function ($scope, $rootScope, $route, $location, adsService, notifyService) {
		$rootScope.pageTitle = "Delete Ad";
		adsService.getAdById($route.current.params.id,
			function success(data){
				$scope.ad = data;
			},
			function error(err){
				notifyService.showError("Getting ad failed", err);
			}
		);

		$scope.deleteAd = function(id){
			adsService.deleteAd(id,
				function success(){
					notifyService.showInfo("Ad deleted successfully");
					$location.path("/user/ads");
				},
				function error(err){
					notifyService.showError("Getting ad failed", err);
				}
			);
		}
	}
);