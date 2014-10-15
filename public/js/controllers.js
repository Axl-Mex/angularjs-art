var app = angular.module('myApp', []);

app.controller('myController', function($scope){
	$scope.author = {
    'name' : 'Saydd Salas',
    'title' : 'Frontend developer',
    'company' : 'innova web'
  }
});