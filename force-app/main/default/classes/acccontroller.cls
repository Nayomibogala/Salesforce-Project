public with sharing class acccontroller {
    
    @AuraEnabled(cacheable=true)
    public static List<Account> getaccountList(){
        return [select Name, Phone, Rating, Industry, Fax from Account  order by createdDate Desc LIMIT 5];
    }
 
}