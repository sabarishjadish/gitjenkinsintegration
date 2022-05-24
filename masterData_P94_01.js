use snoc
db.genericMasterValueCollection.insert({ "_id":"1438", "s_id":NumberLong(1438), "transitionTypeId":"668", "value":"productPriceReport", "description":"Product Price Report", "type":"Product", "isParentLinked":false, "status":NumberLong(174)})
db.feature_mast.insert({ "_id":NumberLong(1031), "level":NumberLong(2), "feature_desc":"Product Price Report", "is_leaf":true, "feature_code":"productPriceReport", "url":"", "parent_id":NumberLong(542), "crtd_dttm":new Date()});

db.genericMasterValueCollection.insert({ "_id":"1439", "s_id":NumberLong(1439), "transitionTypeId":"668", "value":"cashCollectionPositionTotalReport", "description":"Cash collection Position Total Report", "type":"Stock", "isParentLinked":false, "status":NumberLong(174)})
db.feature_mast.insert({ "_id":NumberLong(1032), "level":NumberLong(2), "feature_desc":"Cash Collection Position Total Report", "is_leaf":true, "feature_code":"cashCollectionPositionTotalReport", "url":"", "parent_id":NumberLong(542), "crtd_dttm":new Date() });

use upload
db.template.update({"_id":538},{"$set":{"template.header":"PARTNER_ID!~ORG_ID!~PRODUCT_ID!~TRANSACTION_TYPE!~PRICE"}})