'use strict';

app.controller('AdminCreateCategoryController',
    function ($scope, $rootScope, $location, adminService, notifyService) {
    	$rootScope.pageTitle = "Create Category";
    	$scope.create = function (category){
    		var cat = {"name":category};
    		adminService.createCategory(cat,
    			function success(){
    				notifyService.showInfo("Category created successfully");
    				$location.path("/admin/categories/list");
    			},
    			function error(err){
    				notifyService.showError("Failed to create category", err);
    			}
    		);
    	}
	}
);
