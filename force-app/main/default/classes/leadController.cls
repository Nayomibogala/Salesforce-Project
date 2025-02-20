public with sharing class leadController {
    @AuraEnabled(cacheable=true)
    public static List<Lead> getLead(string searchText){
        string key='%'+searchText +'%';
        return [select Id, Name, Company, Email, Status, Phone from Lead  where FirstName Like:key];
    }
}