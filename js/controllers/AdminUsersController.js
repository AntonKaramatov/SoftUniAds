'use strict';

app.controller('AdminUsersController',
    function ($scope, $rootScope, $location, adminService, notifyService, pageSize) {
    	$rootScope.pageTitle = "Users";
		$scope.userParams = {
			"startPage": 1,
			"pageSize": pageSize,
			"sortBy": "UserName"
		};

		$scope.reloadUsers = function (){
			adminService.getUsers(
				$scope.userParams,
				function success(data){
					$scope.data = data;
				},
				function error(err){
					notifyService.showError("Cannot load users", err);
				}
			);
		};

		$scope.deleteUser = function(user){
			$rootScope.user = user;
			$location.path("/admin/users/delete/" + user.username);
		}

		$scope.editUser = function(user){
			$rootScope.user = user;
			$location.path("/admin/users/edit/" + user.username);
		}

		$scope.sort = function(param){
			var num = $scope.userParams.sortBy.indexOf(param);
			switch (num) {
				case 0: $scope.userParams.sortBy = "-" + $scope.userParams.sortBy; break;
				case 1: $scope.userParams.sortBy = $scope.userParams.sortBy.substring(1); break;
				default: $scope.userParams.sortBy = param;
			}
			$scope.reloadUsers();
		}

		$scope.reloadUsers();
	}
);
