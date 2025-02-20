import { LightningElement } from 'lwc';

export default class Parentcpccommunication extends LightningElement {
   
       percentage=20;
   
       handleChange(event){
              this.percentage=event.target.value;
       }
   
   /* msg='hello I am parent '
    handleChange(event){
           this.template.querySelector('c-childcpccomminication').changemessage(event.target.value);
    }*/
}