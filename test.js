var body = $response.body; 
var obj = JSON.parse(body); 

obj = {
  "environment": "Production",
  "receipt": {
    "receipt_type": "Production",
    "adam_id": 448278467,
    "app_item_id": 448278467,
    "bundle_id": "com.musixmatch.lyrics",
    "application_version": "2022040702",
    "download_id": 39076991191605,
    "version_external_identifier": 848135025,
    "receipt_creation_date": "2022-04-24 11:14:56 Etc/GMT",
    "receipt_creation_date_ms": "1650798896000",
    "receipt_creation_date_pst": "2022-04-24 04:14:56 America/Los_Angeles",
    "request_date": "2022-04-24 11:16:34 Etc/GMT",
    "request_date_ms": "1650798994611",
    "request_date_pst": "2022-04-24 04:16:34 America/Los_Angeles",
    "original_purchase_date": "2020-06-03 09:07:13 Etc/GMT",
    "original_purchase_date_ms": "1591175233000",
    "original_purchase_date_pst": "2020-06-03 02:07:13 America/Los_Angeles",
    "original_application_version": "2020050701",
    "in_app": [{
      "quantity": "1",
      "product_id": "com.musixmatch.offers.removeads.autorenewable.oneyear.1506772022",
      "transaction_id": "190001274199245",
      "original_transaction_id": "190001274199245",
      "purchase_date": "2022-04-24 11:14:54 Etc/GMT",
      "purchase_date_ms": "1650798894000",
      "purchase_date_pst": "2022-04-24 04:14:54 America/Los_Angeles",
      "original_purchase_date": "2022-04-24 11:14:55 Etc/GMT",
      "original_purchase_date_ms": "1650798895000",
      "original_purchase_date_pst": "2022-04-24 04:14:55 America/Los_Angeles",
      "expires_date": "2029-04-26 17:54:33 Etc/GMT",
      "expires_date_ms": "1871891673000",
      "expires_date_pst": "2029-04-26 10:54:33 America/Los_Angeles",
      "web_order_line_item_id": "190000552646936",
      "is_trial_period": "true",
      "is_in_intro_offer_period": "false",
      "in_app_ownership_type": "PURCHASED"
    }]
  },
  "latest_receipt_info": [{
    "quantity": "1",
    "product_id": "com.musixmatch.offers.removeads.autorenewable.oneyear.1506772022",
    "transaction_id": "190001274199245",
    "original_transaction_id": "190001274199245",
    "purchase_date": "2022-04-24 11:14:54 Etc/GMT",
    "purchase_date_ms": "1650798894000",
    "purchase_date_pst": "2022-04-24 04:14:54 America/Los_Angeles",
    "original_purchase_date": "2022-04-24 11:14:55 Etc/GMT",
    "original_purchase_date_ms": "1650798895000",
    "original_purchase_date_pst": "2022-04-24 04:14:55 America/Los_Angeles",
    "expires_date": "2029-04-26 17:54:33 Etc/GMT",
    "expires_date_ms": "1871891673000",
    "expires_date_pst": "2029-04-26 10:54:33 America/Los_Angeles",
    "web_order_line_item_id": "190000552646936",
    "is_trial_period": "true",
    "is_in_intro_offer_period": "false",
    "in_app_ownership_type": "PURCHASED",
    "subscription_group_identifier": "20384704"
  }],
  "latest_receipt": "",
  "pending_renewal_info": [{
    "auto_renew_product_id": "com.musixmatch.offers.removeads.autorenewable.oneyear.1506772022",
    "product_id": "com.musixmatch.offers.removeads.autorenewable.oneyear.1506772022",
    "original_transaction_id": "190001274199245",
    "auto_renew_status": "1"
  }],
  "status": 0
}


body = JSON.stringify(obj);
$done(body);
