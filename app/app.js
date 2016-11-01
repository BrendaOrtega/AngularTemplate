(function () {
    angular
        .module('brendi',['ngRoute','firebase'])
        .config(configura);
        
        //esta funcion es útil si se trabaja con django, por ahora no funciona
        function configura($httpProvider){

     //         $httpProvider.defaults.withCredentials = true;
       //       $httpProvider.defaults.xsrfCookieName = 'csrftoken';
         //     $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';

        }


})();