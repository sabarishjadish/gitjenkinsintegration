use upload

db.template.remove({_id:538})

db.template.insert( { "_id" : NumberLong(538), "template" : { "template_type" : "Product Price List", "name" : "Product Price List", "short_name" : "PRODUCTPRICELIST", "sheet_name" : "ProductPriceList", "base_template" : "ProductPriceList", "record_limit" : NumberLong(20000), "file_extension" : "xlsm", "header" : "PRD_NAME!~PRD_EXT_ID!~PRD_CATEGORY!~CRITERIA_ID!~CRITERIA_NAME!~OWNER_ORG!~OLD_STATUS!~START_DT!~END_DT!~NEW_STATUS!~PRICE", "sheet_details" : [ ], "role_list" : [ NumberLong(1), NumberLong(2), NumberLong(3) ], "status" :NumberLong(1), "number_of_instances" : NumberLong(3), "state" : { "template_request" : "ProductPriceListDownload_run.sh", "upload_process" : "ProductPriceListUpload_run.sh" } } } )

db.template.insert( { "_id" : NumberLong(110006), "template" : { "base_template" : "POSANDPRODUCTPRICES", "file_extension" : "xlsm", "header" : "PARTNER_ID!~ORG_ID!~PRODUCT_ID!~TRANSACTION_TYPE!~PRICE", "name" : "POSAndProductPrices", "number_of_instances" : NumberLong(3), "record_limit" : NumberLong(20000), "role_list" : [ NumberLong(1), NumberLong(2), NumberLong(3) ], "sheet_details" : [], "sheet_name" : "PosAndProductPrices", "short_name" : "POSANDPRODUCTPRICES", "state" : { "template_request" : "POSAndProductPricesDownload_run.sh", "upload_process" : "POSAndProductPricesUpload_run.sh" }, "status" : NumberLong(1), "template_type" : "Pos And Product Prices" } } )

use snoc

db.feature_mast.insert({ "_id" : NumberLong(110006), "feature_code" : "POSAndProductPrices", "feature_desc" : "POS and Product Price", "level" : NumberLong(2), "is_leaf" : true, "parent_id" : NumberLong(530), "url" : "", "crtd_dttm" : ISODate("2019-11-15T10:05:41.509Z") })
