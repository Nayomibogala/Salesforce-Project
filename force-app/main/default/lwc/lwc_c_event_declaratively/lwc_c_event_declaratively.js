import { LightningElement } from 'lwc';

export default class Lwc_c_event_declaratively extends LightningElement {
    handledecrease(event){
        this.dispatchEvent(new CustomEvent('decrease',{detail:'Decrease Volume'}));
    };
    handleincrease(event){
        this.dispatchEvent(new CustomEvent('increase',{detail:'Increase Volume'}));
    };
}