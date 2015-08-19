app.controller('MainController', function ($scope, $location) {
  $scope.test = 'test'

  $scope.movieSearch = function (searchText) {
    $location.path('/search').search({title: searchText})

  }
});


app.controller('SearchResultsController', function ($scope, $location, $routeParams, $http) {
  $scope.inside = $scope.test;
  $scope.searchTerm = $routeParams.title;

  $http.get('http://www.omdbapi.com/?s=' + $scope.searchTerm)
    .then(function (data) {
      $scope.movies=data.data.Search
      console.log(data)
    });

  //console.log($routeParams)

});

app.controller('ShowMovieController', function ($routeParams, $scope, $http) {
  console.log($routeParams)

  $http.get('http://www.omdbapi.com/?i='+$routeParams.id)
    .then(function (data) {
      console.log(data)
      $scope.movie=data.data

    })

})