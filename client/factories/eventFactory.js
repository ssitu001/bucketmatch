angular
  .module('EventFactory', [])
  .factory('EventFactory', eventFactory)

function eventFactory($http) {
  let obj = {};
  let event = '';
  let user = '';

  obj.updateEvent = function (data) {
    event = data;
  };
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
