/**
 * Created by dkilty on 8/25/2016.
 */


(function () {
    'use strict';
    angular
        .module('dossierLoadModule', ['dataLists'])
})();

(function () {
    'use strict';
    angular
        .module('dossierLoadModule')
        .factory('customLoad', ['$http', '$q', 'getCountryAndProvinces', function ($http, $q, getCountryAndProvinces) {
            var result = {};
            //if going to inject translations
            /* var base_en = "@@TRANSLATIONS_EN" ;

             var base_fr = "@@TRANSLATIONS_FR" ;
             */

            return function (options) {
                var deferred = $q.defer();
                var baseUrl = "data/dossier-" + options.key + ".json";
                var countryUrl = "data/country-" + options.key + ".json";
                /* if(options.key==='fr'){
                 result=base_fr;
                 base_en={};
                 }else{
                 //fallback
                 result=base_en;
                 base_fr={};
                 }*/
                $http.get(baseUrl)
                    .then(function (response) {
                        //angular.extend(result, response.data);
                        return $http.get(countryUrl);
                    })
                    .then(function (response) {
                        angular.extend(result, response.data);
                        getCountryAndProvinces.createCountryList(response.data);

                        return (response.data);
                    })
                    .catch(function (error) {
                        // this catches errors from the $http calls as well as from the explicit throw
                        console.log("An error occurred: " + error);
                        deferred.reject(result);
                    })
                    .finally(function () {
                        deferred.resolve(result);
                    });
                return deferred.promise;
            };
        }]);

})();



