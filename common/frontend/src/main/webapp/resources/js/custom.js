/**
 * Cartorio Digital - 07/06/2014
 */

app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/Cad', {
        templateUrl: 'resources/pages/cadastroCliente.html',
        controller: 'BaseController'
    });
}]);

app.controller('BaseController', function($scope) {
    $scope.greeting = 'Welcome!';
    $scope.geral = {nome: 'Jesus Cristo'};
});


