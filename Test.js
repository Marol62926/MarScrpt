var body = $response.body; 
var obj = JSON.parse(body); 

obj = {
  "environment": "Production",
  "receipt": {
    "receipt_type": "Production",
    "adam_id": 1091675654,
    "app_item_id": 1091675654,
    "bundle_id": "com.shapr3d.shapr",
    "application_version": "3021",
    "download_id": 501314973695494431,
    "version_external_identifier": 848133062,
    "receipt_creation_date": "2022-04-15 07:42:12 Etc/GMT",
    "receipt_creation_date_ms": "1650008532000",
    "receipt_creation_date_pst": "2022-04-15 00:42:12 America/Los_Angeles",
    "request_date": "2022-04-15 07:42:21 Etc/GMT",
    "request_date_ms": "1650008541639",
    "request_date_pst": "2022-04-15 00:42:21 America/Los_Angeles",
    "original_purchase_date": "2022-04-14 16:10:52 Etc/GMT",
    "original_purchase_date_ms": "1649952652000",
    "original_purchase_date_pst": "2022-04-14 09:10:52 America/Los_Angeles",
    "original_application_version": "3021",
    "in_app": [{
      "quantity": "1",
      "product_id": "com.shapr3d.shapr.iap.lite2.renewing.yearly",
      "transaction_id": "480001132112544",
      "original_transaction_id": "480001132112544",
      "purchase_date": "2022-04-15 07:41:32 Etc/GMT",
      "purchase_date_ms": "1650008492000",
      "purchase_date_pst": "2022-04-15 00:41:32 America/Los_Angeles",
      "original_purchase_date": "2022-04-15 07:41:33 Etc/GMT",
      "original_purchase_date_ms": "1650008493000",
      "original_purchase_date_pst": "2022-04-15 00:41:33 America/Los_Angeles",
      "expires_date": "2022-04-29 07:41:32 Etc/GMT",
      "expires_date_ms": "1651218092000",
      "expires_date_pst": "2022-04-29 00:41:32 America/Los_Angeles",
      "web_order_line_item_id": "480000514720721",
      "is_trial_period": "true",
      "is_in_intro_offer_period": "false",
      "in_app_ownership_type": "PURCHASED"
    }]
  },
  "latest_receipt_info": [{
    "quantity": "1",
    "product_id": "com.shapr3d.shapr.iap.lite2.renewing.yearly",
    "transaction_id": "480001132112544",
    "original_transaction_id": "480001132112544",
    "purchase_date": "2022-04-15 07:41:32 Etc/GMT",
    "purchase_date_ms": "1650008492000",
    "purchase_date_pst": "2022-04-15 00:41:32 America/Los_Angeles",
    "original_purchase_date": "2022-04-15 07:41:33 Etc/GMT",
    "original_purchase_date_ms": "1650008493000",
    "original_purchase_date_pst": "2022-04-15 00:41:33 America/Los_Angeles",
    "expires_date": "2022-04-29 07:41:32 Etc/GMT",
    "expires_date_ms": "1651218092000",
    "expires_date_pst": "2022-04-29 00:41:32 America/Los_Angeles",
    "web_order_line_item_id": "480000514720721",
    "is_trial_period": "true",
    "is_in_intro_offer_period": "false",
    "in_app_ownership_type": "PURCHASED",
    "subscription_group_identifier": "20334342"
  }],
  "latest_receipt": "",
  "pending_renewal_info": [{
    "auto_renew_product_id": "com.shapr3d.shapr.iap.lite2.renewing.yearly",
    "product_id": "com.shapr3d.shapr.iap.lite2.renewing.yearly",
    "original_transaction_id": "480001132112544",
    "auto_renew_status": "1"
  }],
  "status": 0
}


body = JSON.stringify(obj);
$done(body);

