import { LightningElement } from 'lwc';

export default class Parentcfex extends LightningElement {


    handleClick(event){
        this.template.querySelector("c-childcfex").refresh();
    }
}