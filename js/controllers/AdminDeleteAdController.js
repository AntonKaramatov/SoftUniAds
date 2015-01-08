'use strict';

app.controller('AdminDeleteAdController',
    function ($scope, $rootScope, $route, $location, adminService, notifyService) {
		$rootScope.pageTitle = "Delete Ad";
		adminService.getAdById($route.current.params.id,
			function success(data){
				$scope.ad = data;
			},
			function error(err){
				notifyService.showError("Getting ad failed", err);
			}
		);

		$scope.deleteAd = function(id){
			adminService.deleteAd(id,
				function success(){
					notifyService.showInfo("Ad deleted successfully");
					$location.path("/admin/home");
				},
				function error(err){
					notifyService.showError("Getting ad failed", err);
				}
			);
		}
	}
);