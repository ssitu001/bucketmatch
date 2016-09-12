angular
  .module('createNewFactory', [])
  .factory('createNewFactory', createNewFactory)

  function createNewFactory($http, $location) {
    let createNewFactoryObj = {};

    createNewFactoryObj.createNew = function(eventobj) {
      console.log("inside post", eventobj)
      return $http.post('http://localhost:3000/activity/add', JSON.stringify({ data: eventobj }));
    }

    return createNewFactoryObj;
}
