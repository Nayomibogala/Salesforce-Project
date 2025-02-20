import { LightningElement,api } from 'lwc';
import page1 from './template1.html';
import page2 from './template2.html';

export default class Lwc_three_html_hooks extends LightningElement {
    @api page='template1';
    list=[];
    constructor(){
             super();
             console.log('In Constructor');
    }    
    connectedCallback(){
            this.list.push('hello LWC component');
           console.log('In connectedCallback');
           console.log(this.list[0]);
    };
    disconnectedCallback(){
       this.list=[];
       console.log('In disconnectedCallback');
    };
    renderedCallback(){
        console.log('In renderedCallback');
        console.log(this.list);
    };    
    handletempchange(){
           if(this.page=='template1'){
            this.page='template2';
           }
           else
           this.page='template1';
    };
   render(){
          if(this.page=='template1'){
                   return page1;
          }
          else return page2;
   }

}