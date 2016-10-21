/**
 * Created by Abdessamad on 8/22/2016.
 */

(function () {
    'use strict';

    angular
        .module('tissuesFluidsOriginModule', [])
})();

(function () {
    'use strict';

    angular
        .module('tissuesFluidsOriginModule')
        .component('cmpTissuesFluidsOrigin',{
            templateUrl: './components/appendix-four/tpl-tissues-fluids-origin.html',
            controller: tissuesFluidsOriginCtrl,
            controllerAs: 'tfoCtrl',
            bindings:{
                tissuesModel : '<',
                onUpdate : '&'
            }

        });

    function tissuesFluidsOriginCtrl(){

        var self = this;
        self.isSelected = "";
        self.otherTextError = false;
        self.$onInit = function(){

            self.model = {
                nervousSystem:{
                    title: "Nervous System", //the legend for checkbox list
                    groupName: "nervous-sys", // the group name for checkboxlist
                    list: [
                    {name: "brain", label: "Brain", value: false},
                    {name: "brain-stem", label: "Brain Stem", value: false},
                    {name: "cerebellum", label: "Cerebellum", value: false},
                    {name: "cerebrospinal-fluid", label: "Cerebrospinal Fluid", value: false},
                    {name: "dorsal-root-ganglia", label: "Dorsal Root Ganglia", value: false},
                    {name: "dura-mater", label: "Dura Mater", value: false},
                    {name: "hypothalmus", label: "hypothalmus", value: false},
                    {name: "retina-optic", label: "Retina Optic", value: false},
                    {name: "spinal-cord", label: "Spinal Cord", value: false},
                    {name: "trigerminal-ganglia", label: "Trigerminal Ganglia", value: false},
                        {
                            name: "other-nervous",
                            label: "Other Nervous",
                            value: false,
                            hasOtherDetails: true,
                            otherText: ""
                        }
                ]},
                digestiveSystem:{
                    title: "Digestive System",
                    groupName: "digestive-sys",
                    list: [
                    {name: "appendix", label: "appendix", value:false},
                    {name: "bile", label: "bile", value:false},
                    {name: "distal-ileum", label: "Distal Ileum", value:false},
                    {name: "large-intestine", label: "Large Intestine", value:false},
                    {name: "saliva-salivary", label: "Saliva Salivary", value:false},
                    {name: "small-intestine", label: "Small Intestine", value:false},
                    {name: "stomach", label: "stomach", value:false},
                        {
                            name: "other-digestive",
                            label: "Other Digestive",
                            value: false,
                            hasOtherDetails: true,
                            otherText: ""
                        }
                ]},
                reproductiveSystem:{
                    title: "Reproductive System",
                    groupName: "reproductive-sys",
                    list: [
                    {name: "milk-products", label: "Milk Products", value:false},
                    {name: "kidney", label: "kidney", value:false},
                    {name: "colostrum", label: "colostrum", value:false},
                    {name: "mammary-glands", label: "Mammary Glands", value:false},
                    {name: "ovaries", label: "ovaries", value:false},
                    {name: "placenta", label: "placenta", value:false},
                    {name: "placental-fluid", label: "Placental Fluid", value:false},
                    {name: "semen", label: "semen", value:false},
                    {name: "testes", label: "testes", value:false},
                    {name: "urine", label: "urine", value:false},
                        {
                            name: "other-reproductive",
                            label: "Other Reproductive",
                            value: false,
                            hasOtherDetails: true,
                            otherText: ""
                        }
                ]},
                cardioSystem:{
                    title: "Cardio System",
                    groupName: "cardio-sys",
                    list: [
                    {name: "heart-pericardium", label: "Heart Pericardium", value:false},
                    {name: "lung", label: "lung", value:false},
                    {name: "nasal-fluid", label: "Nasal Fluid", value:false},
                    {name: "trachea", label: "trachea", value:false},
                        {
                            name: "other-cardio-respiratory",
                            label: "Other Cardio Respiratory",
                            value: false,
                            hasOtherDetails: true,
                            otherText: ""
                        }
                ]},
                immuneSystem:{
                    title: "Immune System",
                    groupName: "immune-sys",
                    list: [
                    {name: "lymph-nodes", label: "Lymph Nodes", value:false},
                    {name: "spleen", label: "spleen", value:false},
                    {name: "thymus", label: "thymus", value:false},
                    {name: "tonsils", label: "tonsils", value:false},
                        {
                            name: "other-immune",
                            label: "Other Immune",
                            value: false,
                            hasOtherDetails: true,
                            otherText: ""
                        }
                ]},
                skinGlandSystem:{
                    title: "Skin Gland System",
                    groupName: "skin-gland-sys",
                    list: [
                    {name: "adrenal-gland", label: "Adrenal Gland", value:false},
                    {name: "hair-hooves-feathers", label: "Hair Hooves Feathers", value:false},
                    {name: "liver", label: "liver", value:false},
                    {name: "pancreas", label: "pancreas", value:false},
                    {name: "pituitary", label: "pituitary", value:false},
                    {name: "skin-hides", label: "skinHides", value:false},
                    {name: "thyroid-parathyroid", label: "Thyroid Parathyroid", value:false},
                        {
                            name: "other-skin-glandular",
                            label: "Other Skin Glandular",
                            value: false,
                            hasOtherDetails: true,
                            otherText: ""
                        }
                ]},
                musculoSkeletalSystem:{
                    title: "Musculo Skeletal System",
                    groupName: "musculo-skeletal-sys",
                    list: [
                    {name: "abdomen", label: "abdomen", value:false},
                    {name: "skull", label: "skull", value:false},
                    {name: "bones", label: "bones", value:false},
                    {name: "collagen", label: "collagen", value:false},
                    {name: "tendons-ligaments", label: "Tendons Ligaments", value:false},
                    {name: "vertebral-column", label: "Vertebral Column", value:false},
                    {name: "muscle", label: "muscle", value:false},
                        {
                            name: "other-musculo-skeletal",
                            label: "Other Musculo Skeletal",
                            value: false,
                            hasOtherDetails: true,
                            otherText: ""
                        }
                ]},
                otherTissues:{
                    title: "Other Tissues",
                    groupName: "other-tissues",
                    list: [
                    {name: "adipose", label: "adipose", value:false},
                    {name: "ascites", label: "ascites", value:false},
                    {name: "antler-velvet", label: "Antler Velvet", value:false},
                    {name: "serum", label: "serum", value:false},
                    {name: "whole-blood", label: "Whole Blood", value:false},
                    {name: "plasma", label: "plasma", value:false},
                    {name: "embryonic-tissue", label: "Embryonic Tissue", value:false},
                    {name: "fetal-tissue", label: "Fetal Tissue", value:false},
                    {name: "bone-marrow", label: "Bone Marrow", value:false},
                    {name: "eyes-cornea", label: "Eyes Cornea", value:false},
                    {name: "gall-bladder", label: "Gall Bladder", value:false},
                        {
                            name: "other-fluids-tissues",
                            label: "Other Fluids Tissues",
                            value: false,
                            hasOtherDetails: true,
                            otherText: ""
                        }
                ]
            }

            };

            if(self.tissuesModel){
                self.model = self.tissuesModel;
            }

        }


        self.$onChanges = function (changes) {
            if(changes.tissuesModel){
                self.model = changes.tissuesModel.currentValue;
            }
        };

        self.$doCheck = function () {
            if (!angular.equals(self.model.nervousSystem.list, self.tissuesModel.nervousSystem.list)) {
                console.log('tissues fluids nervousSystem model changed ');
            }
        };
        /**
         * Checks that at least one tissue has been selected
         * Checks if the other checkboz is selected with no other details
         * @returns {boolean}
         */
        self.oneTissueSourceSelected = function () {
            var tissuesArray = [
                self.model.nervousSystem,
                self.model.digestiveSystem,
                self.model.reproductiveSystem,
                self.model.immuneSystem,
                self.model.cardioSystem,
                self.model.musculoSkeletalSystem,
                self.model.otherTissues,
                self.model.skinGlandSystem
            ];
            //reset before looping
            self.isSelected = "";
            self.otherTextError = false
            //n2 not terribly efficient
            //go through the entire list looking for other text errors
            for (var i = 0; i < tissuesArray.length; i++) {
                for (var j = 0; j < tissuesArray[i].list.length; j++) {
                    if (tissuesArray[i].list[j].value === true) {
                        //if has otherText property, check that it is filled in
                        if (tissuesArray[i].list[j].hasOwnProperty('otherText')) {
                            if (tissuesArray[i].list[j].otherText) {
                                self.isSelected = true;
                            } else {
                                //set error flag for other text
                                self.otherTextError = true;
                            }
                        } else {
                            self.isSelected = true;
                        }
                    }
                }
            }
            if (self.isSelected) {
                return true;
            }
            return false;
        };

        self.updateNervousSystemList = function(list){

            console.log('nervousSystem model changed');

            self.model.nervousSystem.list = list;
            self.onUpdate({model:self.model});

        };

        self.showNoRecordError = function (isDirty) {
            return (!self.oneTissueSourceSelected());

        };
    }
})();
