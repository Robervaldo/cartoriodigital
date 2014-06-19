/**
 * 
 */

app.factory('ClienteFactory', function ($resource) {
    return $resource('rest/cliente', {}, {
        query: {
            method: 'GET',
            params: {},
            isArray: true
        }
    });
});