angular.module('admin', []).controller('home',

function($scope, $http) {

	var computeDefaultTemplate = function(user) {
		$scope.template = user && user.roles && user.roles.indexOf("ROLE_WRITER")>0 ? "write.html" : "read.html";
	}

	$http.get('user').success(function(data) {
		if (data.name) {
			$scope.authenticated = true;
			$scope.user = data;
			computeDefaultTemplate(data);
			$http.get('/resource/').success(function(data) {
				$scope.greeting = data;
			})
		} else {
			$scope.authenticated = false;
		}
		$scope.error = null
	}).error(function(response) {
        if (response.status === 0) {
            $scope.error = 'No connection. Verify application is running.';
        } else if (response.status == 401) {
            $scope.error = 'Unauthorized.';
        } else if (response.status == 403) {
            $scope.error = 'Forbidden.';
        } else {
            $scope.error = 'Unknown.';
        }
        $scope.authenticated = false;
	});
});
