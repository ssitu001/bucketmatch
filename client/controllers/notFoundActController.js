angular
  .module('notFoundActController', ['ngRoute', 'createNewFactory'])
  .controller('notFoundActController', notFoundActController);


function notFoundActController($scope, $location, createNewFactory) {
  $scope.activityname = '';
  $scope.activitydesc = '';

 $scope.createNew = function() {
   console.log("inside create new", this)
    let newEventObj = {
      event: {"actname": $scope.activityname, "actdesc": $scope.activitydesc},
    }

    createNewFactory.createNew(newEventObj).then(function(res) {
      console.log(res);
    })
 }
};

