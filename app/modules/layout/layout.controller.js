(function() {
    'use strict';

    angular
        .module('app')
        .controller('layoutCtrl', layoutCtrl);


        layoutCtrl.$inject = ['Appservice','$state'];
    /* @ngInject */
    function layoutCtrl(Appservice,$state) {
        var vm = this;
    vm.islogged= Appservice.isLoggedin;
     vm.appservice=Appservice;
    }
})();
