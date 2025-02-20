import { LightningElement, api } from 'lwc';

export default class Childcfex extends LightningElement {

    timestamp= new Date();
    @api
    refresh(){
        this.timestamp=new Date();
    }
}