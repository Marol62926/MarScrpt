##/*
#圈X
#[rewrite_local]
#IMuseum解锁vip
#https://icity-imsm.2q10.com/api/v1/users/mark_paid url script-response-body https://raw.githubusercontent.com/Marol62926/MarScrpt/main/imuseum.js
#[mitm]
#hostname = icity-imsm.2q10.com
#*/

var body = $response.body;
var obj = JSON.parse(body);

obj = {
  "success": 1,
  "used_by_other": false,
  "transactions": [{
    "product_id": "com.chii.iMuseum.pro.monthly",
    "product_type": "imsm_pro_month",
    "expired": false,
    "expires_at": 1678979035,
    "used_by_other": false
  }],
  "products_info": {
    "imsm_pro_month": 1,
    "imsm_pro": 1
  },
  "unified_receipts_info": [{
    "product_id": "com.chii.iMuseum.pro.monthly",
    "product_type": "imsm_pro_month",
    "product_groups": ["imsm_pro"],
    "renewable": true,
    "expired": false,
    "expires_at": 1678979035,
    "updated_at": 1649516639,
    "purchase_date": 1649516635,
    "original_purchase_date": 1649516636
  }]
}



body = JSON.stringify(obj); 
$done(body); 
