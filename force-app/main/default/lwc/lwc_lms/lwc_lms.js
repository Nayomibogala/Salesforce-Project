import { LightningElement } from 'lwc';
import { publish,subscribe, unsubscribe, createMessageContext, releaseMessageContext } from 'lightning/messageService';
import SAMPLEMC from '@salesforce/messageChannel/lmessage__c';
export default class Lwc_lms extends LightningElement {
    receivedMessage='';
    mymessage='';
    subscription=null;
    context=createMessageContext();
    constructor(){
        super();
    }
    handleChnage(event)
    {
        this.mymessage=event.target.value;
    }
    publishMC(event)
    {
        const message={
            messageToSend:this.mymessage,
            sourceSystem:'This is from  Lightning Web Component ',
            mobilenumber:'9481393707'
         };
         publish(this.context,SAMPLEMC,message);
    }
    subscribeMC(event)
    {
    if(this.subscription){
        return;
    }
    this.subscription=subscribe(this.context,SAMPLEMC,(message)=>{
        this.displayMessage(message);
    });
    }
    displayMessage(message){
        this.receivedMessage=message?JSON.stringify(message,null,'\t'):'No Message from VF Page';
    }
    unsubscribeMC(event)
    {
        unsubscribe(this.subscription);
        this.subscription=null;
    }
    disconnectedCallback(){
             releaseMessageContext(this.context);
    }
}