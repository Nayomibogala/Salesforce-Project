import { LightningElement } from 'lwc';

export default class Lwc_event_programatically_parent extends LightningElement {
    constructor(){
        super();
        this.template.addEventListener('programEvent',this.handleEvent);
    }
    handleEvent(event){
        alert("parent is listening to child and getting message from child : child msg:"+event.detail);
    }
    }