import { LightningElement, wire } from 'lwc';
import searchCon from '@salesforce/apex/contactController.searchCon';
const coloumns=[
 {label:'Name' ,fieldName:'Name', type:'text'},
 {label:'Phone' ,fieldName:'Phone', type:'text'},
 {label:'Email', fieldName:'Email', type:'text'},
 

]
export default class SearchContact extends LightningElement {
    seachKey;
     col=coloumns;
    @wire (searchCon, {searchText:'$seachKey'}) contact;
    handleChange(event){
          this.seachKey=event.target.value;
    }
     
    
}