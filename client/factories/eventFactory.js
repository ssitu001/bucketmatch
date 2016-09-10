angular
  .module('EventFactory', [])
  .factory('EventFactory', eventFactory)

function eventFactory($http, $location) {
  let obj = {};
  let event = '';
  let user = '';
  let matchAct;




  obj.updateEvent = function (data) {
    console.log("event before", event)
    event = data;
    console.log("event",event)
    $location.path('activities');

  };

  obj.fetchMatches = function() {
    console.log("inside the fetch", event)
    return $http.get('http://localhost:3000/useractivity/findbyact/' + event);
  }

  obj.updateUser = function (data) {
    user = data;
  };

  obj.fetchUsers = function () {
    return $http.get(ADDURL + '?activity=' + event)
  };

  obj.fetchActivities = function () {
    return $http.get('http://localhost:3000/activities');
  };

  obj.addUserToEvent = function (data) {
    data.userId = user;
    const dataArr = [data];
    console.log(dataArr);
    const req = {
      method: 'POST',
      url: 'http://192.168.0.146:3000/useractivity/add',
      headers: { 'Content-Type': undefined },
      data: JSON.stringify(dataArr)
    };
    return $http.post('http://192.168.0.146:3000/useractivity/add', JSON.stringify({ data: dataArr }));
  };
  return obj;
}
