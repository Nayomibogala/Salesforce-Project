import { LightningElement ,wire } from 'lwc';
import {CurrentPageReference} from 'lightning/navigation';
import pubsub from 'c/pubsub';

export default class Lwc_publisher extends LightningElement {
    message='';
    @wire (CurrentPageReference) pageRef;

    handlechange(event)
    {
     this.message=event.target.value;
    }
    handleClick()
    {
        pubsub.fireEvent(this.pageRef,'handlemessagepublish',this.message);
    }
}