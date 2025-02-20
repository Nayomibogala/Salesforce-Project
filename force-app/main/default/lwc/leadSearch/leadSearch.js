import { LightningElement, wire } from 'lwc';
import getLead from '@salesforce/apex/leadController.getLead';
const coloums=[
    {label:'Id', fieldName:'Id', type:'text'},
    {label:'Name', fieldName:'Name', type:'text'},
    {label:'Company', fieldName:'Company', type:'text'},
    {label:'Email', fieldName:'Email', type:'text'},
    {label:'Status', fieldName:'Status', type:'text'},
    {label:'Phone', fieldName:'Phone', type:'text'}
];
export default class LeadSearch extends LightningElement {
    col=coloums;
    searchkey;
    @wire(getLead,{searchText:'$searchkey'}) lead;
    handleChange(event){
        this.searchkey=event.target.value;
    }
}