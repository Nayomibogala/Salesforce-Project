import { LightningElement } from 'lwc';

export default class Childcount extends LightningElement {
      endval;
    handleClick(event){
       // this.dispatchEvent( new CustomEvent('increasecount'));
       const field=event.target.name;
       if(field=='inpu'){
       this.endval=event.target.value;
    }
      else if (field=='but') {
        const myevnt= new CustomEvent('increasecount', {
       detail:{
         endval: this.endval,
        msg: 'hello world'}
       });
       this.dispatchEvent(myevnt);
    }
   
    }
}