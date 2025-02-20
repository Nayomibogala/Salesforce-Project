import { LightningElement } from 'lwc';

export default class FirstLwcComponent extends LightningElement {
     firstName='';
     lastName='';
     Name='salesforce';
     handleChange(event){
        
          const field=event.target.name;
          if(field ==='firstName'){
            this.firstName=event.target.value;
          } else if (field === 'lastName'){
            this.lastName=event.target.value;
          }
          else if (field=== 'Name'){
            this.Name=event.target.value;
          }
        }
        get uppercasedFullName(){
            return `${this.firstName} ${this.lastName}`.toUpperCase();
        }
     }
