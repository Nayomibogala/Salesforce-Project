import { LightningElement } from 'lwc';

export default class AnotherChild extends LightningElement {
    constructor(){
        super();
        console.log("this is child2 constructor");
    }
    connectedCallback(){
        console.log("This is child2 connectedCallback");
    }
    renderedCallback(){
        console.log("This is child2 renderedCallback");
    }
    disconnectedCallback(){
        console.log("This is child2 disconnectedCallback");
    }
    errorCallback(error, stack){
        console.log("the error child2 is" + error);
    }
}