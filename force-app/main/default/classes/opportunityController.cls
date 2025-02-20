public with sharing class opportunityController {
     @AuraEnabled(cacheable=true)
     public static List<Opportunity> getopplist(){
         return [select Name, Amount, StageName from Opportunity  order by createdDate desc LIMIT 5];
     }
}