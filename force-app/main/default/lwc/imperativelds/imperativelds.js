import { createRecord } from 'lightning/uiRecordApi';
import { LightningElement } from 'lwc';

export default class Imperativelds extends LightningElement {
 name;
 phone;
 rating;
 fax;
 industry;
 handleChange(event){
  const field=event.target.name;
     if(field=='name'){
        this.name=event.target.value;
     }
     else if(field=='phone'){
        this.phone=event.target.value;
     }
     else if(field=='rating'){
        this.rating=event.target.value;
     }
     else if(field=='fax'){
        this.fax=event.target.value;
     }
     else if(field=='industry'){
        this.industry=event.target.value;
     }
 }
 handleClick(event){
      const fields={
            'Name':this.name,
            'Phone':this.phone,
            'Rating':this.rating,
            'Fax':this.fax,
            'Industry':this.industry
      }
      const recordApi={apiName:'Account', fields};
      createRecord(recordApi)
          .then(response=>{
            alert('Record saved successfully' + response.id);
          })
          .catch(error=>{
            alert('Record save failed' + error.body.message)
          });
 }
}