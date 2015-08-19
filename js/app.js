var app = angular.module('movieSearch', ['ngRoute']);

app.config(function ($routeProvider, $locationProvider) {
  $routeProvider
    .when('/:search/', {
      templateUrl: 'partials/searchResults.html',
      controller: 'SearchResultsController'
    })
    .when('/movies/:id', {
      templateUrl: 'partials/showMovie.html',
      controller: 'ShowMovieController'
    })

  //$locationProvider.html5Mode(true).hashPrefix('');
});