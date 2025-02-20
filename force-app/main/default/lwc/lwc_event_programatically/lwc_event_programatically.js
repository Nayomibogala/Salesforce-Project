import { LightningElement } from 'lwc';

export default class Lwc_event_programatically extends LightningElement {

    handleFireEvent(){
        this.dispatchEvent(new CustomEvent('programEvent',{
            detail:'My child component programatically',
            bubbles:true,
            composed:true,
        }));
    }
}