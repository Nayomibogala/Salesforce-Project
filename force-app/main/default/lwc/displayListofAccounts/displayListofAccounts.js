import { LightningElement, wire } from "lwc";

import getRecords from "@salesforce/apex/ExploreIteratorController.getRecords";
import getContacts from "@salesforce/apex/ExploreIteratorController.getContacts";

export default class DisplayListofAccounts extends LightningElement {
    @wire(getRecords)
    records;
    @wire(getContacts)
    contacts;
}




