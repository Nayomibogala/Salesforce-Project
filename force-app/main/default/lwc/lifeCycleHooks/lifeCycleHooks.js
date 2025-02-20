import { LightningElement } from 'lwc';

export default class LifeCycleHooks extends LightningElement {

    constructor(){
        super();
        console.log("this is constructor");
    }
    connectedCallback(){
        console.log("This is connectedCallback");
    }
    renderedCallback(){
        console.log("This is renderedCallback");
    }
    disconnectedCallback(){
        console.log("This is disconnectedCallback");
    }
    errorCallback(error, stack){
        console.log("the error is" + error);
    }
}