import { LightningElement ,track} from 'lwc';
import getContactsTable from "@salesforce/apex/ContactController.getContactsTable"

export default class ImperativeApexExample extends LightningElement {
    @track contacts;
    @track error;
    coloumns = [
        {label: 'Name', fieldName: 'Name', Type:'text'},
        {label: 'Email', fieldName: 'Email', Type:'email'},
        {label: 'Phone', fieldName: 'Phone', Type:'phone'}
    ]
    handleFectchContacts(){
        getContactsTable()
               .then(result=> {
                     this.contacts=result;
                     this.error=undefined;
               })
               .catch( error => {
                     this.error=error.body.message;
                     this.contacts=undefined;
               });
        
    }
}