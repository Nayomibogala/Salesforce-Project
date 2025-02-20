import { LightningElement } from 'lwc';

export default class SimpleInterestCalculator extends LightningElement {
     Result;
    p;
    r;
    t;
    n;
    handleChange(event){
        const cmp=event.target.name;
        if(cmp==='P'){
            this.p=event.target.value;
        }else if(cmp==='R'){
            this.r=event.target.value;
        }else if (cmp==='T'){
            this.t=event.target.value;
        } else if (cmp==='N'){
            this.n=event.target.value;
        }
    }
    handleSimpleCalculate(event){
        const principal= parseFloat(this.p);
        const rate=parseFloat(this.r);
        const time=parseFloat(this.t);
        const num=parseInt(this.n);
        console.log(` principal ${principal}, rate ${rate}, time ${ time} , num ${num} `)
        const number=event.target.name
        if(number==='SI'){
            const c = principal*time*rate/100;
            console.log(`result ${c}`);
            this.Result=c;
        } else if (number==='CI'){
            const amount = principal * (Math.pow((1 + ((1/rate) / num)), (num * time)));
            console.log(`amount ${amount}`);
            const interest = parseInt(amount) - principal;
            this.Result=interest;
        }
       
    }
    handleClear(event){
         this.r='';
         this.p='';
         this.t='';
         this.n='';
    }
}