import { LightningElement } from 'lwc';

export default class Lwc_p_event_declarativey extends LightningElement {
    vol=0;
    cname='please click on volume button';
    handleDecrease(event){
        this.cname=event.detail;
        if(this.vol>0){
            this.vol=this.vol-1;
        }
    };
    handleIncrease(event){
        this.cname=event.detail;
        if(this.vol<100){
            this.vol=this.vol+1;
        }
   
    };
}