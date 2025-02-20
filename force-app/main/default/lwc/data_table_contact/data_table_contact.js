import { LightningElement, wire , track} from 'lwc';
import getContactRecords from '@salesforce/apex/getContacts.getContactRecords';
import { updateRecord } from 'lightning/uiRecordApi';
import FIRST_NAME_FIELD from '@salesforce/schema/Contact.FirstName';
import LAST_NAME_FIELD from '@salesforce/schema/Contact.LastName';
import ID_FIELD from '@salesforce/schema/Contact.Id';
import { ShowToastEvent } from "lightning/platformShowToastEvent";
import { refreshApex } from "@salesforce/apex";
export default class Data_table_contact extends LightningElement {
@track contacts;
@track error;
draftValues=[];

 colomns=[
    {label: 'First Name' ,fieldName: 'FirstName' , type: 'text', editable:true  },
    {label: 'Last Name' ,fieldName: 'LastName' , type: 'text' , editable:true },
    {label: 'Email' ,fieldName: 'Email' , type: 'text'  },
    {label: 'Phone' ,fieldName: 'Phone' , type: 'text'  }   
]
   
    @wire (getContactRecords)
       wiredContacts({data, error}){
        
        if(data){
            this.contacts=data;
            this.error=undefined;
        }
        if(error){
            this.contacts=undefined;
            this.error=error;        }
       }
       handleSave(event){
             const fields={};
           
                fields[FIRST_NAME_FIELD.fieldApiName]=event.detail.draftValues[0].FirstName;
             fields[LAST_NAME_FIELD.fieldApiName]=event.detail.draftValues[0].LastName;
            fields[ID_FIELD.fieldApiName]=event.detail.draftValues[0].Id;
            const recordApi={fields};
            updateRecord(recordApi)
            .then(() => {
                this.dispatchEvent(
                  new ShowToastEvent({
                    title: "Success",
                    message: "Contact updated",
                    variant: "success",
                  }),
                );
                // Display fresh data in the form
                return refreshApex(this.contacts);
              })
              .catch((error) => {
                this.dispatchEvent(
                  new ShowToastEvent({
                    title: "Error creating record",
                    message: error.body.message,
                    variant: "error",
                  }),
                );
              });
          
             
             
       }
}