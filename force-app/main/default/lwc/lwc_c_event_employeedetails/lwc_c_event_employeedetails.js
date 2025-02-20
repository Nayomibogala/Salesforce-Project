import { LightningElement } from 'lwc';

export default class Lwc_c_event_employeedetails extends LightningElement {
       fname;
       lname;
       phone;
       email;
   
    emfname(event){
        this.fname=event.target.value;
    };
    emlname(event){
        this.lname=event.target.value;
    };
    emphone(event){
        this.phone=event.target.value;
    };
    ememail(event){
        this.email=event.target.value;
    };

    emsubmit(event){
        this.dispatchEvent(new CustomEvent('displayempdetails',{
            detail:{ 
                efn:this.fname,
                eln:this.lname,
                ep:this.phone,
                eem:this.email,
                
            }
        }));
    };
}