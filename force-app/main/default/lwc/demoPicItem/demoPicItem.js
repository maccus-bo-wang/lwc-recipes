import { LightningElement, track, wire } from 'lwc';
import PIC from '@salesforce/resourceUrl/pic';
import findPicItems from '@salesforce/apex/DemoPicItem.findPicItems';
import findPicList from '@salesforce/apex/DemoPicItem.findPicList';

export default class DemoPicItem extends LightningElement {
    //@track picItem = PIC + this.girl.Path__c;
    //@track picItem = PIC;
    @track picItem;
    @track picList1 = 'xxx';
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
    
    handleChange(event) {
        console.log('event.target:' + event.target.value);
        var demoItemList = [{
            Id : event.target.value,
            Name : 'Tom',
            Path : 'pic5'
        },
        {
            Id : '02',
            Name : 'Jack',
            Path : 'pic2'
        }];
        var picList = {
            ItemList : demoItemList
        };
        console.log('picList:' + JSON.stringify(picList));
        findPicList({ilt : picList})
            .then((result) => {this.picList1 = result;})
            .catch((error) => {
                this.picList1 = 'error';
                //console.log('error:' + JSON.stringify(error));
        });
    }
}