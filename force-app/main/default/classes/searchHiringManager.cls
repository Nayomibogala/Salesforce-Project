public with sharing class searchHiringManager {
    @AuraEnabled(cacheable=true)
    public static List<Position__C> getHm(string searchtext){
       string  key='%'+searchtext+'%';
        return [Select Name, Id,Severity__c,Status__c,Days_Open__c from Position__C where Name like:key ];
    }
}