(function() {
    'use strict';

    angular
        .module('app.login')
        .controller('loginCtrl', loginCtrl);

    loginCtrl.$inject = ['Appservice','$state','server'];

    /* @ngInject */
    function loginCtrl(Appservice,$state,server) {
        var vm = this;
        vm.user={};
        vm.people=[];

            vm.doLogin=function(){
                Appservice.loader=true;
                var url=`${server.host}${server.people}`+vm.user.uname;
                Appservice.getApiCall(url).then(function(response) {
                    if(response && response.results.length >0){
                        if(response.results[0].birth_year == vm.user.password.trim()){
                            Appservice.loggedinUser=response.results[0];
                            Appservice.isLoggedin=true;
                            Appservice.loader=false;
                            $state.go("app.search");


                        }else{
                            Appservice.loader=false;
                            alert("Please Enter Valid Password");
                            
                        }
                    }
                });
            }
    }
})();
