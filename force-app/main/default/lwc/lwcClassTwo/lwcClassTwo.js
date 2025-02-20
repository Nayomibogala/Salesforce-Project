import { LightningElement } from 'lwc';

export default class LwcClassTwo extends LightningElement {
    fNumber;
    sNumber;
    tNumber;
    handleChange(event){
        const field=event.target.name;
        if(field==="fNumber"){
            this.fNumber=event.target.value;
        } else if(field==="sNumber"){
            this.sNumber=event.target.value;
        } else if(field==="tNumber"){
            this.tNumber=event.target.value;
        }
       
    }
    handleCalculate(event){
       const a=parseInt(this.fNumber);
       const b=parseInt(this.sNumber);
       const c=parseInt(this.tNumber);
          if(a>b && a>c){
            alert("the gretest number is " + a );
          }
          else if (b>a && b>c){
            alert("The greatest number is "+ b);
          }
          else{
            alert("The greatest number is "+ c);
          }
    }
    handleClear(event){
        this.fNumber='';
        this.sNumber='';
        this.tNumber='';
    }
}