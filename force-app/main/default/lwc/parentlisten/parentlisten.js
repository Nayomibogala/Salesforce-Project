import { LightningElement} from 'lwc';

export default class Parentlisten extends LightningElement {
      count=1;
      endvalu=0;
      msg;
   handleEvent(event){
         this.endvalu=event.detail.endval;
         this.msg=event.detail.msg;
         if(this.count<this.endvalu){
            this.count=this.count + 1
        }
        
   }
   handleClear(event){
    this.count=1;
   }
  
}


