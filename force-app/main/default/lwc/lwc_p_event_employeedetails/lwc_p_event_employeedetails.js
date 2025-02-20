import { LightningElement } from 'lwc';
const coloumns=[
{label:'Firstname', fieldName:'efn', type:'text'},
{label:'Lastname', fieldName:'eln', type:'text'},
{label:'Phone', fieldName:'ep', type:'text'},
{label:'Email', fieldName:'eem', type:'text'},
];
const  emplist={
   Id:'1', efn:'Nayomi', eln:'Bogala',ep:'2345678901',eem:'nayomi@gmail.com'

};
export default class Lwc_p_event_employeedetails extends LightningElement {
    col=coloumns;
    efirstname;
    elastname;
    
    ephone;
    eemail;
   
    handleEvent(event){
       
        this.efirstname=event.detail.efn;
        this.elastname=event.detail.eln;
        this.ephone=event.detail.ep;
        this.eemail=event.detail.eem;
        
    }
    
}