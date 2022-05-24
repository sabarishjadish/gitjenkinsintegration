use snoc
db.transitionTypeCollection.update({"_id" : "11"}, {"$set":{"disp_order" : NumberLong(11)}})
db.transitionTypeCollection.update({"_id" : "50"}, {"$set":{"disp_order" : NumberLong(11)}})
db.transitionTypeCollection.update({"_id" : "15"}, {"$set":{"disp_order":NumberLong(10)}})
db.transitionTypeCollection.insert({"_id" : "904","s_id":NumberLong(904),"disp_order" : NumberLong(9),"orgType" : "154","addnlParameter" : "true","description" : "Destination","addnlCode" : "destination","crtd_dt" : new Date(),"status" : NumberLong(174),enabled: NumberInt(1),"prd_avl_crt": NumberLong(0),"org_avl_crt":NumberLong(1), "parent_id":"10"})

db.genericMasterValueCollection.insert({ "_id" : "805", "s_id" : NumberLong(805), "parentTransitionValueId" : "", "transitionTypeId" : "901", "description" : "Start Location", "parentTransitionTypeId" : "", "isParentLinked" : false, "status" : NumberLong(174) })
db.genericMasterValueCollection.insert({ "_id" : "806", "s_id" : NumberLong(806), "parentTransitionValueId" : "", "transitionTypeId" : "901", "description" : "End Location", "parentTransitionTypeId" : "", "isParentLinked" : false, "status" : NumberLong(174) })

db.genericMasterValueCollection.insert({"_id":"1440","s_id":NumberLong(1440),"transitionTypeId":"668","value":"recommendedBeatReport","description":"Recommended Beat Report","type":"Beat","isParentLinked":false,"status":NumberLong(174)})
db.genericMasterValueCollection.insert({"_id":"1441","s_id":NumberLong(1441),"transitionTypeId":"668","value":"recommendedOrderReport","description":"Recommended Order Report","type":"Beat","isParentLinked":false,"status":NumberLong(174)})

db.feature_mast.insert({"_id":NumberLong(110007),"level":NumberLong(2),"feature_desc":"Recommended Beat Report","is_leaf":true,"feature_code":"recommendedBeatReport","url":"","parent_id":NumberLong(400),"crtd_dttm":new Date()})

db.feature_mast.insert({"_id":NumberLong(100013),"level":NumberLong(2),"feature_desc":"Serials Scanning","is_leaf":true,"feature_code":"SerialsScanning","url":"","parent_id":NumberLong(37),"crtd_dttm":new Date(),"crtd_by":NumberLong(10001)})


db.feature_mast.insert({"_id":NumberLong(100013),"level":NumberLong(2),"feature_desc":"Serials Scanning","is_leaf":true,"feature_code":"SerialsScanning","url":"","parent_id":NumberLong(37),"crtd_dttm":ISODate("2021-12-07T08:51:48.415Z"),"crtd_by":NumberLong(10001)})



#Consignation menu changes

db.getCollection('feature_mast').remove({"_id":100010})
db.getCollection('feature_mast').remove({"_id":100011})
db.getCollection('feature_mast').remove({"_id":100012})


db.feature_mast.insert(
{
    "_id" : NumberLong(100010),
    "level" : NumberLong(2),
    "feature_desc" : "Consignation",
    "is_leaf" : true,
    "feature_code" : "Consignation",
    "url" : "",
    "parent_id" : NumberLong(37),
    "crtd_dttm" : ISODate("2020-04-28T02:47:51.089Z"),
    "crtd_by" : NumberLong(10002)
})
db.feature_mast.insert({"_id" : NumberLong(100012),"crtd_by" : NumberLong(10001),"crtd_dttm" : ISODate("2020-04-28T14:40:31.611Z"),"feature_code" : "ConsignationCheckSerial", "feature_desc" : "ConsignationCheckSerial","is_leaf" : true,  "level" : NumberLong(2),"parent_id" : NumberLong(37)})
db.feature_mast.insert({"_id" : NumberLong(100011),"crtd_by" : NumberLong(10001),"crtd_dttm" : ISODate("2020-04-28T14:40:31.611Z"),"feature_code" : "ConsignationSalesToPos","feature_desc" : "ConsignationSalesToPos","is_leaf" : true,"level" : NumberLong(2),"parent_id" : NumberLong(37)})
db.fieldTemplate.insert({"Default":"","Id":"scanned_all_serials_1001","Name":"scanned_all_serials_1001","Options":[],"Placeholder":"Serials Scanning","Title":"Serials Scanning","Type":"text","_id":1001,"crtd_by":10002,"ctgr_id":[101],"edit":"","featurecode":"field1001","instructions":"","mandatory":false,"pattern":"^[^]{0,10000}$","status":NumberLong(171),"updtd_by":NumberLong(10002),"updtd_dt":ISODate("2022-02-15T13:27:27.656Z")})
db.formTemplate.insert({"_id":2201,"crtd_by":10002,"crtd_dttm":ISODate("2022-02-15T13:32:07.174Z"),"ctgr_id":[10069],"form_env":{"form":{"Name":"SerialsScanning","dataArray":[{"fieldsets":[{"fieldset":[{"Default":"","Ctgr":[101],"Name":"scanned_all_serials_1001_17","instructions":"","Type":"text","mandatory":false,"edit":"","Placeholder":"Serials Scanning","Id":"scanned_all_serials_1001_17","Options":[],"Title":"Serials Scanning"}]}]}],"action":"SerialsScanning","buttons":[{"Name":"Submit","icon":"","Type":"button","Id":"genericForm","destId":"","css":"btn btn-xs btn-info"},{"Name":"Reset","icon":"","Type":"reset","Id":"reset","destId":"","css":"btn btn-xs"}],"method":"POST","featurecode":"SerialsScanning","modName":"","key":"","serviceUrlId":""}},"status":NumberLong(171),"updtd_by":NumberLong(10002),"updtd_dt":ISODate("2022-02-15T13:33:19.218Z")})


db.formTemplate.remove({"_id":NumberLong(2201)})
db.formTemplate.insert({"_id":NumberLong(2201),"crtd_by":NumberLong(10002),"crtd_dttm":ISODate("2022-02-15T13:32:07.174Z"),"ctgr_id":[10069],"form_env":{"form":{"Name":"SerialsScanning","dataArray":[{"fieldsets":[{"fieldset":[{"Default":"","Ctgr":[101],"Name":"scanned_all_serials_1001_17","instructions":"","Type":"text","mandatory":false,"edit":"","Placeholder":"Serials Scanning","Id":"scanned_all_serials_1001_17","Options":[],"Title":"Serials Scanning"}]}]}],"action":"SerialsScanning","buttons":[{"Name":"Submit","icon":"","Type":"button","Id":"genericForm","destId":"","css":"btn btn-xs btn-info"},{"Name":"Reset","icon":"","Type":"reset","Id":"reset","destId":"","css":"btn btn-xs"}],"method":"POST","featurecode":"SerialsScanning","modName":"","key":"","serviceUrlId":""}},"status":NumberLong(171),"updtd_by":NumberLong(10002),"updtd_dt":ISODate("2022-02-15T13:33:19.218Z")})

db.fieldTemplate.remove({"Default":"","Id":"scanned_all_serials_1001"})
db.fieldTemplate.insert({"Default":"","Id":"scanned_all_serials_1001","Name":"scanned_all_serials_1001","Options":[],"Placeholder":"Serials Scanning","Title":"Serials Scanning","Type":"text","_id":NumberLong(1001),"crtd_by":NumberLong(10002),"ctgr_id":[NumberLong(101)],"edit":"","featurecode":"field1001","instructions":"","mandatory":false,"pattern":"^[^]{0,10000}$","status":NumberLong(171),"updtd_by":NumberLong(10002),"updtd_dt":new Date()})
db.formTemplate.remove({"_id":NumberLong(2201)})
db.formTemplate.insert({"_id":NumberLong(2201),"crtd_by":NumberLong(10002),"crtd_dttm":new Date(),"ctgr_id":[NumberLong(10069)],"form_env":{"form":{"Name":"SerialsScanning","dataArray":[{"fieldsets":[{"fieldset":[{"Default":"","Ctgr":[NumberLong(101)],"Name":"scanned_all_serials_1001_17","instructions":"","Type":"text","mandatory":false,"edit":"","Placeholder":"Serials Scanning","Id":"scanned_all_serials_1001_17","Options":[],"Title":"Serials Scanning"}]}]}],"action":"SerialsScanning","buttons":[{"Name":"Submit","icon":"","Type":"button","Id":"genericForm","destId":"","css":"btn btn-xs btn-info"},{"Name":"Reset","icon":"","Type":"reset","Id":"reset","destId":"","css":"btn btn-xs"}],"method":"POST","featurecode":"SerialsScanning","modName":"","key":"","serviceUrlId":""}},"status":NumberLong(171),"updtd_by":NumberLong(10002),"updtd_dt":new Date()})

db.genericMasterValueCollection.insert({"_id":"1440","s_id":NumberLong(1440),"transitionTypeId":"668","value":"recommendedBeatReport","description":"Recommended Beat Report","type":"Beat","isParentLinked":false,"status":NumberLong(174)})
db.genericMasterValueCollection.insert({"_id":"1441","s_id":NumberLong(1441),"transitionTypeId":"668","value":"recommendedOrderReport","description":"Recommended Order Report","type":"Beat","isParentLinked":false,"status":NumberLong(174)})

db.feature_mast.insert({"_id":NumberLong(110007),"level":NumberLong(2),"feature_desc":"Recommended Beat Report","is_leaf":true,"feature_code":"recommendedBeatReport","url":"","parent_id":NumberLong(400),"crtd_dttm":new Date()})
db.feature_mast.insert({"_id":NumberLong(110008),"level":NumberLong(2),"feature_desc":"Recommended Order Report","is_leaf":true,"feature_code":"recommendedOrderReport","url":"","parent_id":NumberLong(400),"crtd_dttm":new Date()})