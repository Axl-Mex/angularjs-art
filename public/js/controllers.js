var app = angular.module('myApp', []);

app.controller('myController', function($scope){
	alert("algo");
	$scope.author = {
	    'name' : 'Saydd Salas',
	    'title' : 'Frontend developer',
	    'company' : 'innova web'
  	}
});