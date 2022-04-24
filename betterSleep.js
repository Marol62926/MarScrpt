var body = $response.body; 
var obj = JSON.parse(body); 

obj = {
  "environment": "Production",
  "receipt": {
    "receipt_type": "Production",
    "adam_id": 1450809061,
    "app_item_id": 1450809061,
    "bundle_id": "com.ilbsoft.irelax",
    "application_version": "1.0",
    "download_id": 501340822250381797,
    "version_external_identifier": 848524543,
    "receipt_creation_date": "2022-04-23 19:41:33 Etc/GMT",
    "receipt_creation_date_ms": "1650742893000",
    "receipt_creation_date_pst": "2022-04-23 12:41:33 America/Los_Angeles",
    "request_date": "2022-04-23 19:44:06 Etc/GMT",
    "request_date_ms": "1650743046169",
    "request_date_pst": "2022-04-23 12:44:06 America/Los_Angeles",
    "original_purchase_date": "2022-04-23 19:18:17 Etc/GMT",
    "original_purchase_date_ms": "1650741497000",
    "original_purchase_date_pst": "2022-04-23 12:18:17 America/Los_Angeles",
    "original_application_version": "1.0",
    "in_app": [{
      "quantity": "1",
      "product_id": "",
      "transaction_id": "190001273718793",
      "original_transaction_id": "190001273718793",
      "purchase_date": "2022-04-23 19:41:28 Etc/GMT",
      "purchase_date_ms": "1650742888000",
      "purchase_date_pst": "2022-04-23 12:41:28 America/Los_Angeles",
      "original_purchase_date": "2022-04-23 19:41:29 Etc/GMT",
      "original_purchase_date_ms": "1650742889000",
      "original_purchase_date_pst": "2022-04-23 12:41:29 America/Los_Angeles",
      "expires_date": "2029-04-26 17:54:33 Etc/GMT",
      "expires_date_ms": "1871891673000",
      "expires_date_pst": "2029-04-26 10:54:33 America/Los_Angeles",
      "web_order_line_item_id": "190000552382574",
      "is_trial_period": "true",
      "is_in_intro_offer_period": "false",
      "in_app_ownership_type": "PURCHASED"
    }]
  },
  "latest_receipt_info": [{
    "quantity": "1",
    "product_id": "",
    "transaction_id": "190001273718793",
    "original_transaction_id": "190001273718793",
    "purchase_date": "2022-04-23 19:41:28 Etc/GMT",
    "purchase_date_ms": "1650742888000",
    "purchase_date_pst": "2022-04-23 12:41:28 America/Los_Angeles",
    "original_purchase_date": "2022-04-23 19:41:29 Etc/GMT",
    "original_purchase_date_ms": "1650742889000",
    "original_purchase_date_pst": "2022-04-23 12:41:29 America/Los_Angeles",
    "expires_date": "2029-04-26 17:54:33 Etc/GMT",
    "expires_date_ms": "1871891673000",
    "expires_date_pst": "2029-04-26 10:54:33 America/Los_Angeles",
    "web_order_line_item_id": "190000552382574",
    "is_trial_period": "true",
    "is_in_intro_offer_period": "false",
    "in_app_ownership_type": "PURCHASED",
    "subscription_group_identifier": "20520905"
  }],
  "latest_receipt": "",
  "pending_renewal_info": [{
    "auto_renew_product_id": "",
    "product_id": "",
    "original_transaction_id": "190001273718793",
    "auto_renew_status": "1"
  }],
  "status": 0
}


body = JSON.stringify(obj);
$done(body);
