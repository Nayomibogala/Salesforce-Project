import { LightningElement } from 'lwc';
import girl_image  from "@salesforce/resourceUrl/girl_image";
export default class RenderingDataConditionally extends LightningElement {
              showMe=false;
              handleChange(event){
                this.showMe=event.target.checked;
              }
              get girlUrl() {
                return girl_image;
            }
}