import { LightningElement ,wire} from 'lwc';
import getopplist from '@salesforce/apex/opportunityController.getopplist';
import { deleteRecord } from 'lightning/uiRecordApi';
import { refreshApex } from '@salesforce/apex';
const coloumns=[
    {label:'Name', fieldName:'Name', type:'text'},
    {label:'Amount', fieldName:'Amount', type:'text'},
    {label:'StageName', fieldName:'StageName', type:'text'},
]
export default class DeleteOpp extends LightningElement {
     col=coloumns;
     opportunities;
     oppwireddata=[];
     error;
     selectedRecord;
     @wire (getopplist) opplist(result){
        this.oppwireddata=result;
        if(result.data){
            this.opportunities=result.data;
            this.error=undefined;
        }else if(result.error){
            this.opportunities=[];
            this.error=result.error;
        }
        
     }
     handleSelection(event){
        if(event.detail.selectedRows.length>0){
          this.selectedRecord=event.detail.selectedRows[0].Id;
        }
     }

     handleDelete(event){
        deleteRecord(this.selectedRecord).then(
            ()=>{
                alert("Record deleted successfully");
                refreshApex(this.oppwireddata);
            }
        ).catch(
            error=>{
                alert("error occured while deleting record" + error.body.message);
            }
        );
     }

}