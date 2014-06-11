/**
 * Cartorio Digital - 07/06/2014
 */

function HomeCtrl($scope, $http, $window) {
	$scope.geral = {dataAtual: '07/06/2014'};
	$scope.geral = {nome: 'digite um nome'};
}

var myApp = angular.module('myApp', []);

myApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/Cad', {
        templateUrl: 'pages/cadastroCliente.html',
        controller: 'HomeCtrl'
      }).
      otherwise({
    	  redirectTo: '/Cad'
      });
  }]);

myApp.controller('CadCtrl', function($scope) {
	$scope.geral = {nome: 'digite um nome'};
     
});

angular.element(document).ready(function(){
	angular.bootstrap(document, ['myApp']);
});