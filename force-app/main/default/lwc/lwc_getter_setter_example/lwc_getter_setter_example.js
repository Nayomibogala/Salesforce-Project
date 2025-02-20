import { api, LightningElement } from 'lwc';

export default class Lwc_getter_setter_example extends LightningElement {
    _uppercaseitemvalue;
    intialvalue="nayomi";
   
    @api
    get itemValue(){
         try{
        return this._uppercaseitemvalue;
         }
         catch(e){
            return '';
         }
    }
    set itemValue(value){
         this._uppercaseitemvalue=value.toUpperCase();
    }
    handleClick(event){
        this.itemValue=this.intialvalue;
    }
    handleChange(event){
      this.intialvalue=event.target.value;
    }
}