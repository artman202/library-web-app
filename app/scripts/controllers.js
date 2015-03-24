var app = angular.module('starter.controllers', [])

app.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  $scope.navTitle='<img class="title-image" src="images/logo.svg" />';

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

app.controller('BookController', function($scope, $http) {

  $scope.books = [];
  var object = JSON.parse(sessionStorage.getItem("item"));
  this.currentItem = object;

  $http.get('http://criative.co.za/library-web-app-api/api.php/books').success(function(data) {
  // $http.get('http://127.0.0.1/library-web-app-api/api.php/books').success(function(data) {
    $scope.books = data;
  });

  this.setItem = function(item){
    sessionStorage.setItem("item", JSON.stringify(item));
  };

})

app.controller('ArticleController', function($scope, $http) {

  $scope.articles = [];
  var object = JSON.parse(sessionStorage.getItem("item"));
  this.currentItem = object;

  $http.get('http://criative.co.za/library-web-app-api/api.php/articles').success(function(data) {
  // $http.get('http://127.0.0.1/library-web-app-api/api.php/articles').success(function(data) {
    $scope.articles = data;
  });

  this.setItem = function(item){
    sessionStorage.setItem("item", JSON.stringify(item));
  };

})

app.controller('SearchController', function($scope, $http) {

  // $scope.articles = [];
  // var object = JSON.parse(sessionStorage.getItem("item"));
  // this.currentItem = object;

  // // $http.get('http://criative.co.za/library-web-app-api/api.php/books').success(function(data) {
  // $http.get('http://127.0.0.1/library-web-app-api/api.php/articles').success(function(data) {
  //   $scope.articles = data;
  // });

  // this.setItem = function(item){
  //   sessionStorage.setItem("item", JSON.stringify(item));
  // };

})