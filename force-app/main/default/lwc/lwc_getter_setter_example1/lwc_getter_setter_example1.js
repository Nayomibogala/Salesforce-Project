import { LightningElement } from 'lwc';

export default class Lwc_getter_setter_example1 extends LightningElement {
    name='Nayomi';
    Age=0;
    _calculatedAge;
    handleAge(event){
        this.age=event.target.value;
    }
   handleClick(event){
        this.name=this.name.toUpperCase();
    }
    get age(){
        return this._calculatedAge;
    }
    set age(value){
        if(value>25){
            console.error('value can not be sent more than 25');
            this._calculatedAge=24;
        }else {
        this._calculatedAge=value;
    }
}
}