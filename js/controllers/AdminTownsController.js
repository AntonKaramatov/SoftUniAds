'use strict';

app.controller('AdminTownsController',
    function ($scope, $rootScope, $location, adminService, notifyService, pageSize) {
    	$rootScope.pageTitle = "Towns";
		$scope.townParams = {
			"startPage": 1,
			"pageSize": pageSize,
			"sortBy": "Id"
		};

		$scope.reloadTowns = function (){
			adminService.getTowns(
				$scope.townParams,
				function success(data){
					$scope.data = data;
				},
				function error(err){
					notifyService.showError("Cannot load towns", err);
				}
			);
		};

		$scope.deleteTown = function(town){
			$rootScope.town = town;
			$location.path("/admin/towns/delete/" + town.id);
		}

		$scope.editTown = function(town){
			$rootScope.town = town;
			$location.path("/admin/towns/edit/" + town.id);
		}

		$scope.sort = function(param){
			var num = $scope.townParams.sortBy.indexOf(param);
			switch (num) {
				case 0: $scope.townParams.sortBy = "-" + $scope.townParams.sortBy; break;
				case 1: $scope.townParams.sortBy = $scope.townParams.sortBy.substring(1); break;
				default: $scope.townParams.sortBy = param;
			}
			$scope.townParams.startPage = 1;
			$scope.reloadTowns();
		}

		$scope.reloadTowns();
	}
);
