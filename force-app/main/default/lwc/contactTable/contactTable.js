import { LightningElement ,track, wire} from 'lwc';
import getContactsTable from "@salesforce/apex/ContactController.getContactsTable"
export default class ContactTable extends LightningElement {
    @track contacts;
    @track error;
    coloumns = [
        {label: 'Name', fieldName: 'Name', Type:'text'},
        {label: 'Email', fieldName: 'Email', Type:'email'},
        {label: 'Phone', fieldName: 'Phone', Type:'phone'}
    ]
    @wire(getContactsTable)
    wiredContacts({error, data}){
            if(data){
                this.contacts=data;
                this.error=undefined;
            }
            else if(error){
                this.contacts=undefined;
                this.error=error;
            }
    }
}