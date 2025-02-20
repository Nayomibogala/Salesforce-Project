import { LightningElement , track, api} from 'lwc';

export default class Childcpccomminication extends LightningElement {
  /*  @track msg

     @api
     changemessage(strmsg){
        this.msg=strmsg.toUpperCase();
     }*/

  @api percentage;

  get style(){
      return `background-color: green; 
 min-height: 100px;
 width:${this.percentage}%;
 border:1px solid black;
min-width: 100px`
  }

}