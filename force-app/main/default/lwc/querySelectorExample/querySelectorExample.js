import { LightningElement } from 'lwc';

export default class QuerySelectorExample extends LightningElement {
    ename
    email
    phone
    handleSubmit(event){
       //  this.ename=this.template.querySelector("lightning-input").value;
       var input= this.template.querySelectorAll("lightning-input");
       input.forEach(function(element){
                    if(element.name=='fname'){
                        this.ename=element.value;
                    } 
                    else if(element.name=='email'){
                        this.email=element.value;
                    }
                    else if(element.name=='phone'){
                        this.phone=element.value;
                    }
       }, this);
    }
}