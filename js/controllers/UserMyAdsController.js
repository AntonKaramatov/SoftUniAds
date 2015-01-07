'use strict';

app.controller('UserMyAdsController',
    function ($scope, $rootScope, $location, userService, notifyService, pageSize) {
		$rootScope.pageTitle = "My Ads";
		$scope.adsParams = {
			"startPage" : 1,
			"pageSize" : pageSize,
			"status" : null
		}

		$scope.reloadAds = function (){
			userService.getUserAds(
				$scope.adsParams,
				function success(data){
					$scope.data = data;
				},
				function error(err){
					notifyService.showError("Cannot load ads", err);
				}
			);
		}

		$scope.deactivate = function(id){
			userService.deactivateAd(id,
				function success(){
					notifyService.showInfo("Successfully deactivated ad");
					$scope.reloadAds();
				},
				function error(err){
					notifyService.showError("Failed to deactivate ad", err);
				})
		}

		$scope.publishAgain = function(id){
			userService.publishAgainAd(id,
				function success(){
					notifyService.showInfo("Ad submited successfully. Once it is approved, it will be published");
					$scope.reloadAds();
				},
				function error(err){
					notifyService.showError("Failed to publish ad", err);
				})
		}

		$scope.$on("statusSelectionChanged", function(event, selectedStatus) {
		    $scope.adsParams.status = selectedStatus;
		    $scope.reloadAds();
		});

		$scope.reloadAds();
	}
);