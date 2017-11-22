(function(){
    'use strict';

    angular
        .module('app.search')
        .controller('searchDetailsCtrl', searchDetailsCtrl);

        searchDetailsCtrl.$inject = ['dataFactory','$state'];

    function searchDetailsCtrl(dataFactory,$state) {
        /* jshint validthis:true */
        var vm = this;
        vm.planet=dataFactory.getsomething();
        vm.goback=function(){
            $state.go('app.search');
        }
    }
})();