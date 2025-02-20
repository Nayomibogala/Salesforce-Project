import { LightningElement, wire } from 'lwc';
import getHm from '@salesforce/apex/searchHiringManager.getHm';
const colomns=[
      {label:'Id' , fieldName:'Id', type:'text'},
      {label:'Name' , fieldName:'Name', type:'text'},
      {label:'Severity' , fieldName:'Severity__c', type:'text'},
      {label:'Status' , fieldName:'Status__c', type:'text'},
      {label:'Days_Open', fieldName:'Days_Open__c', type:'text'},
];
export default class SeachHiringManager extends LightningElement {
    col=colomns;
    searchKey;
    posList;
    error;
    handleChange(event){
        this.searchKey=event.target.value;
    }
    @wire (getHm,{searchtext:'$searchKey'}) 
    position;
    
    @wire(getHm,{searchtext:'$searchKey'}) positionf({data,error}){
         if(data){
            this.posList=data;
            this.error=undefined;
         }else{
            this.error=error;
            this.posList=undefined;
         }
    };
}