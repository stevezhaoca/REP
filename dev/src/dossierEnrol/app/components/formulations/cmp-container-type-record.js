/**
 * Created by Abdessamad on 9/25/2016.
 */

(function () {
    'use strict';

    angular
        .module('containerTypeRecordModule', [])
})();

(function () {
    'use strict';

    angular
        .module('containerTypeRecordModule')
        .component('cmpContainerTypeRecord', {
            templateUrl: './components/formulations/tpl-container-type-record.html',
            controllerAs: 'ctrCtrl',
            controller: containerTypeRecCtrl,
            bindings: {
                deleteBtn: '<',
                record:'<',
                onAddIng: '&',
                onUpdate: '&',
                onDelete: '&',
                onCancel: '&'
            }

        });

    function containerTypeRecCtrl() {

        var self = this;

        self.$onInit = function () {

            self.ctModel = {};

            if(self.record){
                self.ctModel = self.record;
            }
        };

        self.save = function () {
            if (self.record) {
                // console.log('product details update product');
                self.onUpdate({cType:self.ctModel});
            }else{
                //  console.log('product details add product');
                self.onAddIng({cType:self.ctModel});
            }

        };

        self.discardChanges = function(){
            self.ctModel = self.record ? self.record : {};
            self.onCancel();
        }

        self.delete = function(){
            if (self.record) {
                //  console.log('product details delete product');
                self.onDelete();
            }

        };


    }

})();
