/**
 * Cartorio Digital - 07/06/2014
 */

app.controller('BaseController', function ($scope) {
    $scope.nome_sistema = 'Notarial';
    $scope.nome_usuario = ' Nome do Usuário Logado';
});

//app.factory('ClienteFactory', function ($resource) {
//    return $resource('/rest/cliente', {}, {
//        post: {method:'POST'}
//    });
//});


app.controller('ClienteController', function ($scope, $http, ngTableParams) {
	
	
	$http.get('rest/cliente').success(function(clientes){
    	var data = clientes;
	    $scope.tableParams = new ngTableParams({
	        page: 1,
	        count: 5
	    }, {
	        total: data.length,
	        getData: function($defer, params) {
	            $defer.resolve(data.slice((params.page() - 1) * params.count(), params.page() * params.count()));
	        }
	    });
    });

	$scope.cliente = {nome:'', dataCadastro:'', status:''};
	
	$scope.salvar = function(){	
		$http.post('rest/cliente', $scope.cliente).success(function(clientes){
			console.log(clientes);
		});
	};
	
});



