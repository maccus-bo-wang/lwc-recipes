import { LightningElement, track, wire } from 'lwc';
import PIC from '@salesforce/resourceUrl/pic';
import findPicItems from '@salesforce/apex/DemoPicItem.findPicItems';

export default class DemoPicItem extends LightningElement {
    //@track picItem = PIC + this.girl.Path__c;
    //@track picItem = PIC;
    @track picItem;
    searchKey = 'PIC-0003';
    
    @wire(findPicItems, { searchKey: '$searchKey' })
    wiredFindPicItems({error, data}) {
        console.log('In wiredFindPic Items:');
        if (data) {
            console.log('In data length:' + data.length);
            console.log('JSON.stringify(data):' + JSON.stringify(data));
            console.log('data[0].Path:' + data[0].Path);
            this.picItem = PIC + '/pic/' + data[0].Path;
            console.log('picItem:' + this.picItem);
        }
        else if (error) {
            alert(error);
            
        }
    }
    
}