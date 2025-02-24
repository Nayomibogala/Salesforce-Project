import { LightningElement } from 'lwc';
import praveen_img  from "@salesforce/resourceUrl/praveen_img";
export default class Practice_databinding extends LightningElement {
     showMe=false;
    greeting='World';
    handleChange(event){
        this.greeting=event.target.value;
    }
    handleClick(event){

            this.showMe=event.target.checked;
             
    }
    get praveenImg(){
        return praveen_img;
    }
}