import { LightningElement,wire } from 'lwc';
import {CurrentPageReference} from 'lightning/navigation';
import pubsub from 'c/pubsub';
export default class Lwc_subscriber extends LightningElement {
    message='';
    @wire (CurrentPageReference) pageRef;
    connectedCallback(){
        pubsub.registerListener('handlemessagepublish',this.handleincomingmessage,this);
    }
    handleincomingmessage(message){
         this.message=message;
    }
}