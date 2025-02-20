import { LightningElement } from 'lwc';

export default class Lwc_lifecycle_hooks_parent extends LightningElement {
    message = 'Updated count will appear here!';
    show = true;
    constructor(){
        super();
        console.log('Parent constructor called');
        console.log(this.template.querySelector('c-lwc_lifecycle_hooks'));
    }
    connectedCallback(){
        console.log('Parent connectedCallback  called');
        console.log(this.template.querySelector('c-lwc_lifecycle_hooks'));
    }
    renderedCallback(){
        console.log('Parent renderedCallback  called');
        console.log(this.template.querySelector('c-lwc_lifecycle_hooks'));
    }
    errorCallback(error, stack) {
        console.log('Parent error callback called, error = ' + JSON.stringify(error) + ', stack = ' + stack);
        console.log(this.template.querySelector('c-child'));
    }
    updateMessage(event) {
        this.message = event.detail.message;
    }
    toggleChild() {
        this.show = !this.show;
    }
}