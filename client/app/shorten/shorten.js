angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  $scope.link = $scope.link || {};
  $scope.addLink = function () {
    Links.shorten($scope.link)
    .then(function () {
      $scope.link.url = "";
      $location.url('/links');
    });
  };
});
