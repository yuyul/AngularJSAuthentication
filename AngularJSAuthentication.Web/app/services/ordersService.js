app.factory('ordersService', ['$http', function ($http) {

    var serviceBase = "http://localhost:57360/";
    var ordersServiceFactory = {};

    var _getOrders = function () {
        return $http.get(serviceBase + 'api/orders').then(function (results) {
            return results;
        });
    };

    ordersServiceFactory.getOrders = _getOrders;

    return ordersServiceFactory;

}]);