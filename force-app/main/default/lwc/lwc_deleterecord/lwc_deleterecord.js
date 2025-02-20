import { api, LightningElement } from "lwc";

//1. Import a named import ShowToastEvent
import { NavigationMixin } from 'lightning/navigation';

//2. Import deleteRecord named import
import { deleteRecord } from "lightning/uiRecordApi";

export default class lwc_deleterecord extends  NavigationMixin(LightningElement) {
  
  //3. We would need a recordId 
  @api
  recordId;

    
  handleClick() {
  
      //4. Invoke the deleteRecord to delete a record
      debugger;
    deleteRecord(this.recordId)
      .then(() => {
        this[NavigationMixin.Navigate]({
          type: 'standard__objectPage',
          attributes: {
              objectApiName: 'Case',
              actionName: 'list'
          },
          state: {
              filterName: 'Recent'
          },
      });
         
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
