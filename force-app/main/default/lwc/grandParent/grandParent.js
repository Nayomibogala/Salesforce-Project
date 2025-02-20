import { LightningElement } from 'lwc';

export default class GrandParent extends LightningElement {
    constructor(){
        super();
        console.log("this is grandparent constructor");
    }
    connectedCallback(){
        console.log("This is grandparent connectedCallback");
    }
    renderedCallback(){
        console.log("This is grandparent renderedCallback");
    }
    disconnectedCallback(){
        console.log("This is grandparent disconnectedCallback");
    }
    errorCallback(error, stack){
        console.log("the error grandparent is" + error);
    }
}