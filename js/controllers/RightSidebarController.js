'use strict';

// The RightSidebarController controls the content displayed in the right sidebar
app.controller('RightSidebarController',
    function ($scope, categoriesService, townsService) {
		$scope.towns = townsService.getTowns();
		$scope.categories = categoriesService.getCategories();
    }
);
