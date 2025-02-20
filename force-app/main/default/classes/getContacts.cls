public with sharing class getContacts {
  
          
        @AuraEnabled(cacheable=true)

        public static List<contact> getContactRecords(){
            try {
                return [select FirstName, LastName, Phone, Email from Contact where Email!='null'];
            } catch (Exception e) {
                throw new AuraHandledException(e.getMessage());
            }
        }
    }
