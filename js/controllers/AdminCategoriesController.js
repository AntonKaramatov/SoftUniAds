'use strict';

app.controller('AdminCategoriesController',
    function ($scope, $rootScope, $location, adminService, notifyService, pageSize) {
    	$rootScope.pageTitle = "Categories";
		$scope.catParams = {
			"startPage": 1,
			"pageSize": pageSize,
			"sortBy": "Id"
		};

		$scope.reloadCategories = function (){
			adminService.getCategories(
				$scope.catParams,
				function success(data){
					$scope.data = data;
				},
				function error(err){
					notifyService.showError("Cannot load categories", err);
				}
			);
		};

		$scope.deleteCategory = function(cat){
			$rootScope.cat = cat;
			$location.path("/admin/categories/delete/" + cat.id);
		}

		$scope.editCategory = function(cat){
			$rootScope.cat = cat;
			$location.path("/admin/categories/edit/" + cat.id);
		}

		$scope.sort = function(param){
			var num = $scope.catParams.sortBy.indexOf(param);
			switch (num) {
				case 0: $scope.catParams.sortBy = "-" + $scope.catParams.sortBy; break;
				case 1: $scope.catParams.sortBy = $scope.catParams.sortBy.substring(1); break;
				default: $scope.catParams.sortBy = param;
			}
			$scope.reloadCategories();
		}

		$scope.reloadCategories();
	}
);
