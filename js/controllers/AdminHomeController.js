'use strict';

app.controller('AdminHomeController',
    function ($scope, $rootScope, adminService, notifyService, pageSize) {
    	$rootScope.pageTitle = "Home";
		$scope.adsParams = {
			"startPage" : 1,
			"pageSize" : pageSize,
			"sortBy":""
		}

		$scope.reloadAds = function (){
			adminService.getAds(
				$scope.adsParams,
				function success(data){
					$scope.data = data;
				},
				function error(err){
					notifyService.showError("Cannot load ads", err);
				}
			);
		}

		$scope.approveAd = function(id){
			adminService.approveAd(id,
				function success(){
					notifyService.showInfo("Ad approved successfully");
					$scope.reloadAds();
				},
				function error(err){
					notifyService.showError("Failed to approve ad", err);
				}
			);
		}

		$scope.rejectAd = function(id){
			adminService.rejectAd(id,
				function success(){
					notifyService.showInfo("Ad rejected successfully");
					$scope.reloadAds();
				},
				function error(err){
					notifyService.showError("Failed to reject ad", err);
				}
			);
		}

		$scope.editAd = function(id){
			$location.path("/admin/ads/delete/" + id);
		}

		$scope.deleteAd = function(id){
			$location.path("/admin/ads/delete/" + id);
		}

		$scope.$on("categorySelectionChanged", function(event, selectedCategoryId) {
		    $scope.adsParams.categoryId = selectedCategoryId;
		    $scope.adsParams.startPage = 1;
		    $scope.reloadAds();
		});

		$scope.$on("townSelectionChanged", function(event, selectedTownId) {
		    $scope.adsParams.townId = selectedTownId;
		    $scope.adsParams.startPage = 1;
		    $scope.reloadAds();
		});

		$scope.$on("statusSelectionChanged", function(event, selectedStatus) {
		    $scope.adsParams.status = selectedStatus;
		    $scope.reloadAds();
		});

		$scope.reloadAds();
	}
);
