import { LightningElement , track, wire, api} from 'lwc';

import {ShowToastEvent} from 'lightning/platformShowToastEvent';
import ACCOUNT_PHONE from '@salesforce/schema/Account.Phone';
import ACCOUNT_NAME from "@salesforce/schema/Account.Name";
import ACCOUNT_RATING from "@salesforce/schema/Account.Rating";
import ACCOUNT_ANNUALREVENUE from "@salesforce/schema/Account.AnnualRevenue";


export default class RecordForm extends LightningElement {
    @api recordId;
    @api objectApiName;
    customFields=[ACCOUNT_PHONE,ACCOUNT_NAME,ACCOUNT_RATING ,ACCOUNT_ANNUALREVENUE ];
    accountName=ACCOUNT_NAME;
    accountPhone=ACCOUNT_PHONE;
    accountRating=ACCOUNT_RATING;
    accountReveneue=ACCOUNT_ANNUALREVENUE;
    handleSubmit(event){
        event.preventDefault();
        const fields=event.detail.fields;
        this.template.querySelector("lightning-record-edit-form").submit(fields);
    }
    handleSuccess(event){
          this.dispatchEvent(
            new ShowToastEvent ({
                title: "Credit Application",
                message: "Company Information Saved",
                variant:"success"
            })
          );
    }
}