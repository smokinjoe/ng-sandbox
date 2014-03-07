var myApp = angular.module('myApp', []);
myApp.factory('Data', function () {
  return { message: "I'm data from a service" };
});

function FirstController($scope, Data) {
  $scope.data = Data;
}

function SecondController($scope, Data) {
  $scope.data = Data;

  $scope.reversedMessage = function () {
    return $scope.data.message.split("").reverse().join("");
  }
}
