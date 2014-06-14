/**
 * Arquivo criado para gerenciar as navegablidades do sistema.
 */

app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
    when('/', {
        templateUrl: 'resources/pages/principal.html',
        controller: 'BaseController'
    }).when('/SearchCadastroCliente', {
        templateUrl: 'resources/pages/searchCadastroCliente.html',
        controller: 'BaseController'
    }).when('/CreateCadastroCliente', {
        templateUrl: 'resources/pages/createCadastroCliente.html',
        controller: 'BaseController'
    });
}]);