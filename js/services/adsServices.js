'use strict';

app.factory('adsService',
	function ($http, baseServiceUrl, authService) {
		return {
			getAds: function(params, success, error) {
                var request = {
                    method: "GET",
                    url: baseServiceUrl + "/api/ads",
                    params: params
                };
                $http(request).success(success).error(error);
            },

            getAdById: function(id, success, error) {
            	var request = {
                    method: "GET",
                    url: baseServiceUrl + "/api/user/ads/" + id,
                    headers: authService.getAuthHeaders()
                };
                $http(request).success(success).error(error);
            },

            editAd: function (adData, success, error){
            	var request = {
                    method: "PUT",
                    url: baseServiceUrl + "/api/user/ads/" + adData.id,
                    headers: authService.getAuthHeaders(),
                    data: adData
                };
                $http(request).success(success).error(error);
            },

            deleteAd: function (id, success, error){
                var request = {
                    method: "DELETE",
                    url: baseServiceUrl + "/api/user/ads/" + id,
                    headers: authService.getAuthHeaders(),
                };
                $http(request).success(success).error(error);
            }
		};
    }
);

app.factory('townsService',
	function ($resource, baseServiceUrl) {
		var resource = $resource(baseServiceUrl + "/api/towns");
		function getAllTowns(success, error) {
				return resource.query(success, error);
		}
		return {
			getTowns:getAllTowns
		};
    }
);

app.factory('categoriesService',
	function ($resource, baseServiceUrl) {
		var resource = $resource(baseServiceUrl + "/api/categories");
		function getAllCategories(success, error) {
			return resource.query(success, error);
		}
		return {
			getCategories:getAllCategories
		};
    }
);
