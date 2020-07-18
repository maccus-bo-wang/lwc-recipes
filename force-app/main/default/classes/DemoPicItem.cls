public with sharing class DemoPicItem {
    @AuraEnabled(cacheable=true)
    public static List<DemoPicItem.DemoPicItemInfo> findPicItems(String searchKey) {
        String key = '%' + searchKey + '%';
        /*
        return [
            SELECT Id, Path__c
            FROM DemoPic__c
            WHERE Name LIKE :key AND Path__c != null
            WITH SECURITY_ENFORCED
        ];*/
        System.debug('key:' + key);
        List<DemoPicItem.DemoPicItemInfo> demoList = new List<DemoPicItem.DemoPicItemInfo>();
        for(DemoPic__c itr: [SELECT Id, Name, Path__c FROM DemoPic__c WHERE Name LIKE :key AND Path__c != null]) {
            DemoPicItem.DemoPicItemInfo item = new DemoPicItem.DemoPicItemInfo();
            item.Id = itr.Id;
            item.Name = itr.Name;
            item.Path = itr.Path__c;
            demoList.add(item);
        }

        return demoList;
    }

    @AuraEnabled
    public static string findPicList(DemoPicItem.DemoPicItemList ilt) {
            for (DemoPicItemInfo item : ilt.ItemList) {
                System.debug('Id=>' + item.Id + ',Name=>' + item.Name + ',Path=>' + item.Path);
            }
            System.debug('JSON.serialize(ilt):' + JSON.serialize(ilt));
            return JSON.serialize(ilt);
    }

    public class DemoPicItemInfo {

        @AuraEnabled 
        public String Id {get;set;}

        @AuraEnabled 
        public String Name {get;set;}

        @AuraEnabled 
        public String Path {get;set;}
    }

    public class DemoPicItemList {
        @AuraEnabled
        public List<DemoPicItemInfo> ItemList {get;set;}     
    }
}