import { LightningElement, wire } from 'lwc';
import getContactList from '@salesforce/apex/ContactController.getContactList';

export default class EventWithData extends LightningElement {
    selectedContact;

    @wire(getContactList) contacts;

    handleSelect(event) {
        console.log("Event:" + event.detail);
        const contactId = event.detail;
        this.selectedCoyntact = this.contacts.data.find(
            (contact) => contact.Id === contactId
        );
    }
}
