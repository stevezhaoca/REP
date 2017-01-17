/**
 * Created by dkilty on 8/26/2016.
 */
(function () {
    'use strict';
    angular
        .module('activityApp', [
            'pascalprecht.translate',
            'activityLoadService',
            'activityLists',
            'activityMain',
            'translations',
            'ui.select'
        ])
})();

(function () {
    'use strict';
    angular
        .module('activityApp')
        .controller('MainController', MainController);

    function MainController() {
        var vm = this;
        vm.formType = '@@SET_FORM';
    }
})();
//test
(function () {
    'use strict';
    angular
        .module('activityApp')
        .config(['$translateProvider', function ($translateProvider) {
            $translateProvider.directivePriority(1);
            $translateProvider.preferredLanguage('@@prefLang');
            $translateProvider.useLoader('customLoad');
            $translateProvider.useSanitizeValueStrategy(null);
            $translateProvider.forceAsyncReload(true); //needed for the custom loader

        }]);
})();