'use strict';

app.controller('AdminEditTownController',
    function ($scope, $rootScope, $location, adminService, notifyService) {
    	$rootScope.pageTitle = "Edit Town";
        $scope.town = $rootScope.town;
        delete($rootScope.town);
    	$scope.edit = function (town){
            var t = {"name": town.username}
    		adminService.editTown(t, town.id,
    			function success(){
    				notifyService.showInfo("Town edited successfully");
    				$location.path("/admin/towns/list");
    			},
    			function error(err){
    				notifyService.showError("Failed to edit town", err);
    			}
    		);
    	}
	}
);
