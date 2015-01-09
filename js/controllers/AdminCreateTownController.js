'use strict';

app.controller('AdminCreateTownController',
    function ($scope, $rootScope, $location, adminService, notifyService) {
    	$rootScope.pageTitle = "Create Town";
    	$scope.create = function (town){
    		var t = {"name":town};
    		adminService.createTown(t,
    			function success(){
    				notifyService.showInfo("Town created successfully");
    				$location.path("/admin/towns/list");
    			},
    			function error(err){
    				notifyService.showError("Failed to create town", err);
    			}
    		);
    	}
	}
);
