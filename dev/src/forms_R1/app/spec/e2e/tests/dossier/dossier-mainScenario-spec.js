/**
 * Created by dkilty on 13/02/2017.
 */

var dev_dossier_root_ext_url = "http://localhost:2121/dev/dossier/dossierEnrolEXT-en.html";

var DossierMain = require('../../component-definitions/dossier/def-cmp-dossier-main');
var RepContact = require('../../component-definitions/def-cmp-rep-contact');
var ReferenceProduct = require('../../component-definitions/dossier/def-cmp-reference-product');
var TheraProducts = require('../../component-definitions/dossier/def-cmp-thera-class');
var Formulations = require('../../component-definitions/dossier/def-cmp-formulation');
var DrugProduct = require('../../component-definitions/dossier/def-cmp-drug-product');
var contactData = require('../../../e2e/test-data/contact.json');

var repContactObj;
var rootDossierObj;
var referenceProduct;
var theraProduct;
var drugProduct;
var formulations;
describe('Dossier External Form Type Components Test', function () {

    beforeAll(function () {
        console.log("run beforeAll");
        rootDossierObj = new DossierMain();
        rootDossierObj.get(dev_dossier_root_ext_url);
        repContactObj = new RepContact();
        referenceProduct = new ReferenceProduct();
        theraProduct = new TheraProducts();
        drugProduct=new DrugProduct();
        formulations=new Formulations();
    });

    xdescribe("Add a formulation",function(){
        //drugProduct=new DrugProduct();
        //formulations=new Formulations();
        it("Create a formulation and  fill in formulation fields",function(){

            formulations.addFormulationRecord();
           // var record1=formulations.getRecord(0);

        });
        it("Select dosage form",function(){


            // var record1=formulations.getRecord(0);
            formulations.setDosageFormSelect(0,"BEAD");
        });


    });


    xdescribe('Add 2 therapeutic products', function () {

        it('Add Thera Products', function () {
            theraProduct.addTherapeuticClassification();
            theraProduct.setTheraTextValue("Thera Product 1", 0);
            theraProduct.addTherapeuticClassification();
            theraProduct.setTheraTextValue("Thera Product 2", 1);

        });

        it('Second thera product value, Collapse 2nd row and test', function () {
            expect(theraProduct.getTheraTextValue(1)).toEqual("Thera Product 2");
            theraProduct.clickRow(1);
            expect(theraProduct.getRecordVisibility(1)).toBeFalsy();
        });
    });

    xdescribe('Dossier Reference Product Tests', function () {

        it('Yes there are reference products', function () {
            rootDossierObj.setIsRefProductByText('Yes');
            //TODO check states
        });

        it(' Add a reference product', function () {
            referenceProduct.addReferenceProduct();
            referenceProduct.setActiveNameLookup("eth", "(ETHYLENEDINITRILO)TETRAACETIC ACID");
            referenceProduct.setBrandNameValue("brand name 1");
            referenceProduct.setStrengthValue(2.444);
            referenceProduct.setPerValue('Per value');
            referenceProduct.setUnitsTextValue("AMP");
            referenceProduct.setCompanyNameValue('Company Name 1');
            referenceProduct.setDosageFormTextValue("CAPSULE");
            referenceProduct.saveReferenceProduct();
            //TODO check the values that were set
            referenceProduct.clickRow(0);
            expect(referenceProduct.getRecordVisibility(0)).toBeTruthy();
        });


    });

    describe('Rep Contact Tests', function () {
        it('Add Rep Contact', function () {

            repContactObj.addRepContact();
          /*  expect(repContactObj.getFirstNameValue()).toEqual('');
            expect(repContactObj.getSalutationValue()).toEqual('?');
            expect(repContactObj.getInitialsValue()).toEqual('');
            expect(repContactObj.getLastNameValue()).toEqual('');
            expect(repContactObj.getJobTitleValue()).toEqual('');
            expect(repContactObj.getPhoneValue()).toEqual('');
            expect(repContactObj.getPhoneExtValue()).toEqual('');
            expect(repContactObj.getLanguageValue()).toEqual('?');*/

            repContactObj.setSalutationByText(0,contactData.salutation.MRS.en);
            repContactObj.setFirstNameValue("John");
            repContactObj.setInitialsValue("I");
            repContactObj.setLastNameValue("Smith");
            repContactObj.setJobTitleValue("Job Title");
            repContactObj.setPhoneValue("435-123-8765");
            repContactObj.setEmailValue("foo@google.ca");
            repContactObj.setLanguageValue("English");

            expect(repContactObj.getSalutationValue()).toEqual('string:' + contactData.salutation.MRS.expect);
            expect(repContactObj.getFirstNameValue()).toEqual('John');
            expect(repContactObj.getInitialsValue()).toEqual('I');
            expect(repContactObj.getLastNameValue()).toEqual(contactData.lastNames.typical);
            expect(repContactObj.getJobTitleValue()).toEqual('Job Title');
            expect(repContactObj.getPhoneValue()).toEqual('435-123-8765');
            expect(repContactObj.getLanguageValue()).toEqual('string:en');

            repContactObj.saveRepContact();

        });
        it('Open First Rep Contact Record Check Value are the same', function () {

            //get the first REP record
            var repPrimary = element(by.repeater("record in expandTblCtrl.listItems").row(0));
            repPrimary.sendKeys(protractor.Key.ENTER);
            //check that the values have not changed from before the save
            expect(repContactObj.getFirstNameValue()).toEqual('John');
            expect(repContactObj.getInitialsValue()).toEqual('I');
            expect(repContactObj.getLastNameValue()).toEqual('Smith');
            expect(repContactObj.getJobTitleValue()).toEqual('Job Title');
            expect(repContactObj.getPhoneValue()).toEqual('435-123-8765');
            expect(repContactObj.getLanguageValue()).toEqual('string:en');
            expect(repContactObj.getPhoneExtValue()).toEqual('');
        });
    });

});
describe('pause', function () {
    it('Dossier Pause Test', function () {
        browser.pause();

    });

});

