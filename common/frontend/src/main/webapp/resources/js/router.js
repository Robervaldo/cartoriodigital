/**
 * Arquivo criado para gerenciar as navegablidades do sistema.
 */

app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/CadastroCliente', {
        templateUrl: 'resources/pages/cadastroCliente.html',
        controller: 'BaseController'
    }).when('/', {
        templateUrl: 'resources/pages/prime.html',
        controller: 'BaseController'
    });
}]);