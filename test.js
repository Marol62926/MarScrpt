var body = $response.body; 
var obj = JSON.parse(body); 

obj = {
  "environment": "Production",
  "receipt": {
    "receipt_type": "Production",
    "adam_id": 1320373866,
    "app_item_id": 1320373866,
    "bundle_id": "com.vpn.proxyapp",
    "application_version": "2.45.1",
    "download_id": 501342259445453403,
    "version_external_identifier": 846992957,
    "receipt_creation_date": "2022-04-24 08:15:32 Etc/GMT",
    "receipt_creation_date_ms": "1650788132000",
    "receipt_creation_date_pst": "2022-04-24 01:15:32 America/Los_Angeles",
    "request_date": "2022-04-24 08:15:45 Etc/GMT",
    "request_date_ms": "1650788145958",
    "request_date_pst": "2022-04-24 01:15:45 America/Los_Angeles",
    "original_purchase_date": "2022-04-24 07:29:19 Etc/GMT",
    "original_purchase_date_ms": "1650785359000",
    "original_purchase_date_pst": "2022-04-24 00:29:19 America/Los_Angeles",
    "original_application_version": "2.45.1",
    "in_app": [{
      "quantity": "1",
      "product_id": "com.vpn.proxyapp.OneYear",
      "transaction_id": "190001274108330",
      "original_transaction_id": "190001274108330",
      "purchase_date": "2022-04-24 08:14:38 Etc/GMT",
      "purchase_date_ms": "1650788078000",
      "purchase_date_pst": "2022-04-24 01:14:38 America/Los_Angeles",
      "original_purchase_date": "2022-04-24 08:14:39 Etc/GMT",
      "original_purchase_date_ms": "1650788079000",
      "original_purchase_date_pst": "2022-04-24 01:14:39 America/Los_Angeles",
      "expires_date": "2029-09-09 17:07:45 Etc/GMT",
      "expires_date_ms": "4092647115000",
      "expires_date_pst": "2029-09-09 09:07:45 America/Los_Angeles",
      "web_order_line_item_id": "190000552588211",
      "is_trial_period": "true",
      "is_in_intro_offer_period": "false",
      "in_app_ownership_type": "PURCHASED"
    }]
  },
  "latest_receipt_info": [{
    "quantity": "1",
    "product_id": "com.vpn.proxyapp.OneYear",
    "transaction_id": "190001274108330",
    "original_transaction_id": "190001274108330",
    "purchase_date": "2022-04-24 08:14:38 Etc/GMT",
    "purchase_date_ms": "1650788078000",
    "purchase_date_pst": "2022-04-24 01:14:38 America/Los_Angeles",
    "original_purchase_date": "2022-04-24 08:14:39 Etc/GMT",
    "original_purchase_date_ms": "1650788079000",
    "original_purchase_date_pst": "2022-04-24 01:14:39 America/Los_Angeles",
    "expires_date": "2029-09-09 17:07:45 Etc/GMT",
    "expires_date_ms": "4092647115000",
    "expires_date_pst": "2029-09-09 09:07:45 America/Los_Angeles",
    "web_order_line_item_id": "190000552588211",
    "is_trial_period": "true",
    "is_in_intro_offer_period": "false",
    "in_app_ownership_type": "PURCHASED",
    "subscription_group_identifier": "20425657"
  }],
  "latest_receipt": "",
  "pending_renewal_info": [{
    "auto_renew_product_id": "com.vpn.proxyapp.OneYear",
    "product_id": "com.vpn.proxyapp.OneYear",
    "original_transaction_id": "190001274108330",
    "auto_renew_status": "1"
  }],
  "status": 0
}


body = JSON.stringify(obj);
$done(body);
