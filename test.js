var body = $response.body;
var obj = JSON.parse(body);

obj = {
  "environment": "Production",
  "receipt": {
    "receipt_type": "Production",
    "adam_id": 543577420,
    "app_item_id": 543577420,
    "bundle_id": "com.YunFang.PhotoGrid",
    "application_version": "8.2.93.2",
    "download_id": 501353373307439972,
    "version_external_identifier": 848502809,
    "receipt_creation_date": "2022-04-28 08:10:55 Etc/GMT",
    "receipt_creation_date_ms": "1651133455000",
    "receipt_creation_date_pst": "2022-04-28 01:10:55 America/Los_Angeles",
    "request_date": "2022-04-28 08:11:32 Etc/GMT",
    "request_date_ms": "1651133492095",
    "request_date_pst": "2022-04-28 01:11:32 America/Los_Angeles",
    "original_purchase_date": "2022-04-28 05:41:44 Etc/GMT",
    "original_purchase_date_ms": "1651124504000",
    "original_purchase_date_pst": "2022-04-27 22:41:44 America/Los_Angeles",
    "original_application_version": "8.2.93.2",
    "in_app": [{
      "quantity": "1",
      "product_id": "photogrid_plus_annual_2999",
      "transaction_id": "190001277294404",
      "original_transaction_id": "190001277294404",
      "purchase_date": "2022-04-28 08:10:54 Etc/GMT",
      "purchase_date_ms": "1651133454000",
      "purchase_date_pst": "2022-04-28 01:10:54 America/Los_Angeles",
      "original_purchase_date": "2022-04-28 08:10:54 Etc/GMT",
      "original_purchase_date_ms": "1651133454000",
      "original_purchase_date_pst": "2022-04-28 01:10:54 America/Los_Angeles",
      "expires_date": "2029-04-26 17:54:33 Etc/GMT",
      "expires_date_ms": "1871891673000",
      "expires_date_pst": "2029-04-26 10:54:33 America/Los_Angeles",
      "web_order_line_item_id": "190000554374995",
      "is_trial_period": "true",
      "is_in_intro_offer_period": "false",
      "in_app_ownership_type": "PURCHASED"
    }]
  },
  "latest_receipt_info": [{
    "quantity": "1",
    "product_id": "photogrid_plus_annual_2999",
    "transaction_id": "190001277294404",
    "original_transaction_id": "190001277294404",
    "purchase_date": "2022-04-28 08:10:54 Etc/GMT",
    "purchase_date_ms": "1651133454000",
    "purchase_date_pst": "2022-04-28 01:10:54 America/Los_Angeles",
    "original_purchase_date": "2022-04-28 08:10:54 Etc/GMT",
    "original_purchase_date_ms": "1651133454000",
    "original_purchase_date_pst": "2022-04-28 01:10:54 America/Los_Angeles",
    "expires_date": "2029-04-26 17:54:33 Etc/GMT",
    "expires_date_ms": "1871891673000",
    "expires_date_pst": "2029-04-26 10:54:33 America/Los_Angeles",
    "web_order_line_item_id": "190000554374995",
    "is_trial_period": "true",
    "is_in_intro_offer_period": "false",
    "in_app_ownership_type": "PURCHASED",
    "subscription_group_identifier": "20410716"
  }],
  "latest_receipt": "",
  "pending_renewal_info": [{
    "auto_renew_product_id": "photogrid_plus_annual_2999",
    "product_id": "photogrid_plus_annual_2999",
    "original_transaction_id": "190001277294404",
    "auto_renew_status": "1"
  }],
  "status": 0
}

body = JSON.stringify(obj); 
$done(body); 
