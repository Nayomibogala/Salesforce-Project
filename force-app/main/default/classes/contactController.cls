public with sharing class contactController {
    @AuraEnabled(cacheable=true)
    public static List<Contact> searchCon(string searchText){
        string key='%'+searchText+'%';
        return [SELECT Id, Name, Phone, Email from Contact where FirstName Like:key];
    }
}