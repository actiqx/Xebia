(function () {
    'use strict';

    angular
        .module('app')
        .controller('searchCtrl', searchCtrl);

    searchCtrl.$inject = ['Appservice','$state','dataFactory','server'];

    /* @ngInject */
    function searchCtrl(Appservice,$state,dataFactory,server) {
        var vm = this;
        vm.appservice = Appservice;
        vm.planets = [];
        vm.next=null;
        vm.previous=null;
       vm.hasRecord=false;
        vm.maxIndex = "";
        vm.islogged=Appservice.isLoggedin;
        vm.search = function () {
        if(vm.appservice.searchQuery.trim()!=""){
                var url = `${server.host}${server.planet}` + vm.appservice.searchQuery + "&ordering=population";
                getHttpCall(url);
            }
            else{
                vm.planet=[];
            }
        };
        vm.search();
        
        vm.showDetails=function(obj){
            vm.appservice.loader=true;
            dataFactory.setsomething(obj);
            $state.go('app.details');
        };
        vm.previousCall=function(url){
            getHttpCall(url);
        };
        vm.nextCall=function(url){
            getHttpCall(url);
        };
        
        function getHttpCall(url){
            vm.appservice.loader=true;
            Appservice.getApiCall(url).then(function (response) {
                if (response && response.results.length > 0) {
                    vm.planets = response.results;
                    vm.next=response.next;
                    vm.previous=response.previous;
                    vm.maxIndex = getmax(vm.planets);
                    vm.hasRecord=true;
                    vm.appservice.loader=false;
                }else{
                    vm.appservice.loader=false;
                }
            });
        }
        function getmax(obj) {
            var par = [];
            for (var i = 0; i < obj.length; i++) {
                if (!isNaN(obj[i].population)) {
                    par.push(obj[i]);
                }
            }
            var max = Math.max.apply(Math, par.map(function (o) {
                return o.population;
            }));

            var index = functiontofindIndexByKeyValue(obj, "population", max);

            return index;
        }

        function functiontofindIndexByKeyValue(arraytosearch, key, valuetosearch) {

            for (var i = 0; i < arraytosearch.length; i++) {

                if (arraytosearch[i][key] == valuetosearch) {
                    return i;
                }
            }
            return null;
        }
    }
})();