(function() {
    'use strict';

    angular
        .module('app')
        .service('Appservice', Appservice);

    Appservice.$inject = ['$http', '$q'];

    /* @ngInject */
    function Appservice($http, $q) {

        this.getApiCall = function(_url){
            // var requestHeader = { headers: { 'Content-Type': 'application/json',
            //                     'Access-Control-Allow-Headers': 'Content-Type',
            //                     'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
            //                     'Access-Control-Allow-Origin': '*' } };
            var deferred = $q.defer();
                $http.get(_url).success(function (data, status) {                
                    if (data) {
                       deferred.resolve(data);
                    }
                    else {
                       deferred.reject(data);
                    }
                }).error(function (data, status) {
                   deferred.reject(data);
                });

                return deferred.promise;
        }
      
        this.isLoggedin=false;
        this.searchQuery="";
        this.loader=false;
            
        
    }
})();
