(function(){
    'use strict';

    angular
        .module('app')
        .factory('dataFactory', dataFactory)

    /** @ngInject */
    function dataFactory(){

        return {
            getsomething: getsomething,
            setsomething: setsomething
        }


        function setsomething(something){
        this.something=something;

        }
        function getsomething(){
         return this.something;
        }
    }

}());

