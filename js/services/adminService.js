'use strict';

app.factory('adminService',
	function ($http, baseServiceUrl, authService) {
		return {
			getAds: function(params, success, error) {
                var request = {
                    method: "GET",
                    url: baseServiceUrl + "/api/admin/ads",
                    headers: authService.getAuthHeaders(),
                    params: params
                };
                $http(request).success(success).error(error);
            },

            getAdById: function(id, success, error) {
            	var request = {
                    method: "GET",
                    url: baseServiceUrl + "/api/admin/ads/" + id,
                    headers: authService.getAuthHeaders()
                };
                $http(request).success(success).error(error);
            },

            approveAd: function (id, success, error){
                var request = {
                    method: "PUT",
                    url: baseServiceUrl + "/api/admin/ads/approve/" + id,
                    headers: authService.getAuthHeaders(),
                };
                $http(request).success(success).error(error);
            },

            rejectAd: function (id, success, error){
                var request = {
                    method: "PUT",
                    url: baseServiceUrl + "/api/admin/ads/reject/" + id,
                    headers: authService.getAuthHeaders(),
                };
                $http(request).success(success).error(error);
            },

            editAd: function (adData, success, error){
            	var request = {
                    method: "PUT",
                    url: baseServiceUrl + "/api/admin/ads/" + adData.id,
                    headers: authService.getAuthHeaders(),
                    data: adData
                };
                $http(request).success(success).error(error);
            },

            deleteAd: function (id, success, error){
                var request = {
                    method: "DELETE",
                    url: baseServiceUrl + "/api/admin/ads/" + id,
                    headers: authService.getAuthHeaders(),
                };
                $http(request).success(success).error(error);
            },

            getUsers: function(params, success, error) {
                var request = {
                    method: "GET",
                    url: baseServiceUrl + "/api/admin/users",
                    headers: authService.getAuthHeaders(),
                    params: params
                };
                $http(request).success(success).error(error);
            },

            editUser: function (userData, success, error){
                var request = {
                    method: "PUT",
                    url: baseServiceUrl + "/api/admin/user/" + userData.username,
                    headers: authService.getAuthHeaders(),
                    data: userData
                };
                $http(request).success(success).error(error);
            },

            deleteUser: function (username, success, error){
                var request = {
                    method: "DELETE",
                    url: baseServiceUrl + "/api/admin/user/" + username,
                    headers: authService.getAuthHeaders(),
                };
                $http(request).success(success).error(error);
            },

            changeUserPassword: function (passwordData, success, error){
                var request = {
                    method: 'PUT',
                    url: baseServiceUrl + "/api/admin/setPassword/",
                    headers: authService.getAuthHeaders(),
                    data: passwordData
                };
                $http(request).success(success).error(error);
            },

            getCategories: function(params, success, error) {
                var request = {
                    method: "GET",
                    url: baseServiceUrl + "/api/admin/categories",
                    headers: authService.getAuthHeaders(),
                    params: params
                };
                $http(request).success(success).error(error);
            },

            createCategory: function(data, success, error){
                 var request = {
                    method: "POST",
                    url: baseServiceUrl + "/api/admin/categories",
                    headers: authService.getAuthHeaders(),
                    data: data
                };
                $http(request).success(success).error(error);
            },

            createCategory: function(data, id, success, error){
                 var request = {
                    method: "PUT",
                    url: baseServiceUrl + "/api/admin/categories/" + id,
                    headers: authService.getAuthHeaders(),
                    data: data
                };
                $http(request).success(success).error(error);
            },

            deleteCategory: function(id, success, error){
                 var request = {
                    method: "DELETE",
                    url: baseServiceUrl + "/api/admin/categories/" + id,
                    headers: authService.getAuthHeaders(),
                };
                $http(request).success(success).error(error);
            }
		};
    }
);
