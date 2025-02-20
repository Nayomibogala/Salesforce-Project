import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class ShowToasteventex extends LightningElement {

    handleToast(){
        const event = new ShowToastEvent({
                      title:'Success!',
                     message: 'Hello I am Toast event message',
                     variant: 'Success',
                     mode:'dismissable',
                    

        })  ;
    this.dispatchEvent(event);
    }
}