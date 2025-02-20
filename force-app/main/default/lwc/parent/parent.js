import { LightningElement } from 'lwc';

export default class Parent extends LightningElement {
    constructor(){
        super();
        console.log("this is parent constructor");
    }
    connectedCallback(){
        console.log("This is parent connectedCallback");
    }
    renderedCallback(){
        console.log("This is parent renderedCallback");
    }
    disconnectedCallback(){
        console.log("This is parent disconnectedCallback");
    }
    errorCallback(error, stack){
        console.log("the error parent is" + error);
    }
}