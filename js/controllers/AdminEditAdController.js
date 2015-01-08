'use strict';

app.controller('AdminEditAdController',
    function ($scope, $rootScope, $route, $location, adminService, categoriesService, townsService, notifyService) {
		$rootScope.pageTitle = "Edit Ad";
		$scope.towns = townsService.getTowns();
		$scope.categories = categoriesService.getCategories();
		$scope.getAd = function(){
			adminService.getAdById($route.current.params.id,
				function success(data){
					$scope.adData = data;
					$scope.image = data.imageDataUrl;
					if(data.imageDataUrl){
						$(".image-box").html("<img src='" + data.imageDataUrl + "'>");
					}
				},
				function error(err){
					notifyService.showError("Getting ad failed", err);
				}
			);
		}

		$scope.fileSelected = function(fileInputField) {
		    delete $scope.adData.imageDataUrl;
		    var file = fileInputField.files[0];
		    if (file.type.match(/image\/.*/)) {
		        var reader = new FileReader();
		        reader.onload = function() {
		            $scope.adData.imageDataUrl = reader.result;
		            $(".image-box").html("<img src='" + reader.result + "'>");
		        };
		        reader.readAsDataURL(file);
		    } else {
		        $(".image-box").html("<p>File type not supported!</p>");
		    }
		};

		$scope.deleteImage = function (){
			delete $scope.adData.imageDataUrl;
			$(".image-box").html("<p>Image Preview</p>");
			$("#image").wrap('<form>').closest('form').get(0).reset();
  			$("#image").unwrap();
		}

		$scope.editAd = function (adData){
			if(adData.imageDataUrl === $scope.image){
				adData.changeImage = false;
			}
			else {
				adData.changeImage = true;
			}
			adminService.editAd(adData,
				function success(data){
					notifyService.showInfo("Ad edited successfully");
					$location.path("/admin/home");
				},
				function error(err){
					notifyService.showError("Editig ad failed", err);
				}
			);
		}

		$scope.getAd();
	}
);