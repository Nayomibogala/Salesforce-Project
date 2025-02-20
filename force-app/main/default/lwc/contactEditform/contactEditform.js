import { LightningElement, api } from 'lwc';


export default class ContactEditform extends LightningElement {
    @api recordId;
   
    handleReset(event){
           const inputField=this.template.querySelectorAll('lightning-input-field');
           inputField.forEach(field => {field.reset();});
    }
    
    
}