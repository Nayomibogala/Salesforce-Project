import { LightningElement, wire } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { refreshApex } from '@salesforce/apex';
import { deleteRecord } from 'lightning/uiRecordApi';
import getaccountList from '@salesforce/apex/acccontroller.getaccountList';
import { reduceErrors } from 'c/ldsUtils';

const coloumns=[
    {label:'Name', fieldName:"Name", type:'text'},
    {label:'Phone', fieldName:"Phone", type:'text'},
    {label:'Rating', fieldName:"Rating", type:'text'},
    {label:'Industry', fieldName:"Industry", type:'text'},
    {label:'Fax', fieldName:"Fax", type:'text'},
]   
export default class AccountDelete extends LightningElement {
    col=coloumns;
    accounts;
    error;
   
     /** Wired Apex result so it can be refreshed programmatically */
    wiredAccountsResult;
     selectRecord;
    @wire(getaccountList)
    wiredAccounts(result) {
        this.wiredAccountsResult = result;
        if (result.data) {
            this.accounts = result.data;
            this.error = undefined;
        } else if (result.error) {
            this.error = result.error;
            this.accounts = undefined;
        }
    }

    handleSelect(event){
          if(event.detail.selectedRows.length>0){
            this.selectRecord=event.detail.selectedRows[0].Id;
                  }
    }

    async deleteAccount(event) {
       
        try {
            await deleteRecord(this.selectRecord);
            this.dispatchEvent(
                new ShowToastEvent({
                    title: 'Success',
                    message: 'Account deleted',
                    variant: 'success'
                })
            );
            await refreshApex(this.wiredAccountsResult);
        } catch (error) {
            this.dispatchEvent(
                new ShowToastEvent({
                    title: 'Error deleting record',
                    message: reduceErrors(error).join(', '),
                    variant: 'error'
                })
            );
        }
    }
}
