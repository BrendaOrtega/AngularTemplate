(function () {
    angular
        .module('brendi')
        .config(config)
        .run(["$rootScope", "$location", function($rootScope, $location) {
          $rootScope.$on("$routeChangeError", function(event, next, previous, error) {
            // We can catch the error thrown when the $requireSignIn promise is rejected
            // and redirect the user back to the home page

            //esta funcion redirecciona al usuario si la uta requiere login

            if (error === "AUTH_REQUIRED") {
              $location.path("/login");
            }
          });
        }])
        .factory("Auth", ["$firebaseAuth",
          function($firebaseAuth) {
            return $firebaseAuth();
          }
        ]);


    config.$inject = ['$routeProvider']
    function config($routeProvider) {
        $routeProvider
            .when('/',{
                template:`<landing-component></landing-component>`,
            })



            // esta ruta está comentada porque es el modelo de una ruta solo accesable con login
            
            // .when('/profile',{
            //     template:`<user-profile-component></user-profile-component>`,
            //     resolve: {
            //       // controller will not be loaded until $requireSignIn resolves
            //       // Auth refers to our $firebaseAuth wrapper in the factory below
            //       "currentAuth": ["Auth", function(Auth) {
            //         // $requireSignIn returns a promise so the resolve waits for it to complete
            //         // If the promise is rejected, it will throw a $stateChangeError (see above)
            //         return Auth.$requireSignIn();
            //       }]
            //     } //resolve
            // })
            .otherwise({
                redirectTo:'/'
            })
    }

})();
