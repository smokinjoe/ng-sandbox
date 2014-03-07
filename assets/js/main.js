var app = angular.module('behaviorApp', []);

app.directive('enter', function () {
  return function (scope, element) {
    element.bind('mouseenter', function () {
      console.log("I'm inside of you!");
    });
  };
});
