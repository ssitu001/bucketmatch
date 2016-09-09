angular
  .module('ActivitiesController', ['ngRoute', 'EventFactory']).controller('activitiescontroller', ['$scope', '$location']);

function activitiescontroller($scope, $location, EventFactory) {
  $scope.userSelectView = function () {
    // function to load user view.
  };
  $scope.activityname = 'test';
  $scope.fetch = function() {
	  ActivityFactory.fetch().then(function (res){
	  	$scope.activities = res.data;	
	  });
	}
}
};
