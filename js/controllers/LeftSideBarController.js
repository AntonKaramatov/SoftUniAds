'use strict';

app.controller('LeftSidebarController',
    function ($scope, $rootScope) {    	
		$scope.statusClicked = function(clickedStatus){
			$scope.selectedStatus = clickedStatus;
			$rootScope.$broadcast("statusSelectionChanged", clickedStatus);
		}
    }
);