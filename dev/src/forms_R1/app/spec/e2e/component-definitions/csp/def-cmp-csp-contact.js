/**
 * Created by dkilty on 27/04/2017.
 */
var ContactDetails = require('../common/def-cmp-contact-details');
var AddressDetails = require('../common/def-cmp-address-details');



var CspContact = function () {

    var _name_modelString="cspApplCtrl.model.applicantName";
    var contactDetails=new ContactDetails();
    var addressDetails = new AddressDetails();

    /**
     *
     * @constructor
     */
    this.CspContact = function () {

    };

    this.setApplicantNameValue = function (parent) {
        parent.element(by.model(_name_modelString)).click();
    };
    this.getApplicantNameValue = function (parent) {
        return parent.element(by.model(_name_modelString)).getAttribute('value');
    };


    this.setSalutation = function (parent, value) {
        contactDetails.setSalutationValue(parent,value)
    };

    this.getSalutation = function (parent) {
        contactDetails.getSalutationValue(parent);
    };

    this.setFirstName = function (parent, value) {
        contactDetails.setFirstNameValue(parent,value)
    };
    this.getFirstName = function (parent) {
        contactDetails.getFirstNameValue(parent);
    };
    this.setLastName = function (parent, value) {
        contactDetails.setLastNameValue(parent,value)
    };
    this.getLastName = function (parent) {
        contactDetails.getLastNameValue(parent,value)
    };
    this.setInitials = function (parent, value) {
        contactDetails.setInitialsValue(parent,value)
    };
    this.getInitials = function (parent) {
        contactDetails.getInitialsValue(parent)
    };
    this.setJobTitle = function (parent, value) {
        contactDetails.setJobTitleValue(parent,value)
    };
    this.getJobTitle = function (parent) {
        contactDetails.getJobTitleValue(parent)
    };
    this.setPhone = function (parent, value) {
        contactDetails.setPhoneValue(parent,value)
    };
    this.getPhone = function (parent) {
        contactDetails.getPhoneValue(parent)
    };
    this.setPhoneExt = function (parent, value) {
        contactDetails.setPhoneExtValue(parent,value)
    };
    this.getPhoneExt = function (parent) {
        contactDetails.getPhoneExtValue(parent)
    };
    this.setFax = function (parent, value) {
        contactDetails.setFaxValue(parent,value)
    };
    this.getFax = function (parent) {
        contactDetails.getFaxValue(parent)
    };
    this.setEmail = function (parent, value) {
        contactDetails.setEmailValue(parent,value)
    };
    this.getEmail = function (parent) {
        contactDetails.getEmailValue(parent)
    };
    this.setLanguage = function (parent, value) {
        contactDetails.setLanguageValue(parent,value)
    };
    this.getLanguage = function (parent) {
        contactDetails.setLanguageValue(parent);
    };
    this.setStreetValue = function (parent, value) {
        addressDetails.setStreetValue(parent, value);
    };
    this.getStreetValue = function (parent) {
        return addressDetails.getStreetValue(parent);
    };

    this.setStateTextValue = function (parent, value) {
        addressDetails.setStateTextValue(parent, value);
    };
    this.getStateTextValue = function (parent) {
        return addressDetails.getStateTextValue(parent);
    };

    this.setPostalCodeTextValue = function (parent, value) {
        addressDetails.setPostalCodeTextValue(parent, value);
    };
    this.getPostalCodeTextValue = function (parent) {
        return addressDetails.getPostalCodeTextValue(parent);
    };


    this.setCountryListValue = function (parent, value) {
        addressDetails.setCountryListValue(parent, value);
    };

    this.getCountryListValue = function (parent) {
        return addressDetails.getCountryListValue(parent);
    };


    this.setStateListValue = function (parent, value) {
        addressDetails.setStateListValue(parent, value);
    };

    this.getStateListValue = function (parent) {
        return addressDetails.getStateListValue(parent);
    };


    this.setCityValue = function (parent, value) {
        addressDetails.setCityTextValue(parent, value);
    };

    this.getCityValue = function (parent) {
        return addressDetails.getCityTextValue(parent);
    };


};

module.exports = CspContact;


