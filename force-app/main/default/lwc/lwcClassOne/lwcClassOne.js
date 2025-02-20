import { LightningElement } from 'lwc';

export default class LwcClassOne extends LightningElement {
    name="SRI GURU AADHVIKA Enterprises";
    handleClick(event){
          alert("This is sample LWC component");
          this.name="This is new branch of AAdhvika Enterprises"
    }
    handleChange(event){
        this.name=event.target.value;
    }
}