import { LightningElement, track } from 'lwc';

export default class Parentccpcommunication extends LightningElement {
    @track msg;
    constructor(){
        super();
        this.template.addEventListener('mycustomevent', this.handleCustomEvent.bind(this));
    }
    handleCustomEvent(event){
        const textVal = event.detail;
        this.msg = textVal;
    }
    }
  /*  handleCustomEvent(event) {
        const textVal = event.detail;
        this.msg = textVal;
    } */
   



