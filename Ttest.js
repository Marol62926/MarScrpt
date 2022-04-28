var body = $response.body;
var obj = JSON.parse(body);

obj = {
  "environment": "Production",
  "receipt": {
    "receipt_type": "Production",
    "adam_id": 1082956994,
    "app_item_id": 1082956994,
    "bundle_id": "gemini.Filmmaker-Pro",
    "application_version": "3.0",
    "download_id": 501353369895110969,
    "version_external_identifier": 847783499,
    "receipt_creation_date": "2022-04-28 07:42:44 Etc/GMT",
    "receipt_creation_date_ms": "1651131764000",
    "receipt_creation_date_pst": "2022-04-28 00:42:44 America/Los_Angeles",
    "request_date": "2022-04-28 07:44:58 Etc/GMT",
    "request_date_ms": "1651131898269",
    "request_date_pst": "2022-04-28 00:44:58 America/Los_Angeles",
    "original_purchase_date": "2022-04-28 05:40:12 Etc/GMT",
    "original_purchase_date_ms": "1651124412000",
    "original_purchase_date_pst": "2022-04-27 22:40:12 America/Los_Angeles",
    "original_application_version": "3.0",
    "in_app": [{
      "quantity": "1",
      "product_id": "FilmmakerProIAP24",
      "transaction_id": "190001277277603",
      "original_transaction_id": "190001277277603",
      "purchase_date": "2022-04-28 07:41:03 Etc/GMT",
      "purchase_date_ms": "1651131663000",
      "purchase_date_pst": "2022-04-28 00:41:03 America/Los_Angeles",
      "original_purchase_date": "2022-04-28 07:41:04 Etc/GMT",
      "original_purchase_date_ms": "1651131664000",
      "original_purchase_date_pst": "2022-04-28 00:41:04 America/Los_Angeles",
      "expires_date": "2022-05-05 07:41:03 Etc/GMT",
      "expires_date_ms": "1651736463000",
      "expires_date_pst": "2022-05-05 00:41:03 America/Los_Angeles",
      "web_order_line_item_id": "190000554363019",
      "is_trial_period": "true",
      "is_in_intro_offer_period": "false",
      "in_app_ownership_type": "PURCHASED"
    }]
  },
  "latest_receipt_info": [{
    "quantity": "1",
    "product_id": "FilmmakerProIAP24",
    "transaction_id": "190001277277603",
    "original_transaction_id": "190001277277603",
    "purchase_date": "2022-04-28 07:41:03 Etc/GMT",
    "purchase_date_ms": "1651131663000",
    "purchase_date_pst": "2022-04-28 00:41:03 America/Los_Angeles",
    "original_purchase_date": "2022-04-28 07:41:04 Etc/GMT",
    "original_purchase_date_ms": "1651131664000",
    "original_purchase_date_pst": "2022-04-28 00:41:04 America/Los_Angeles",
    "expires_date": "2022-05-05 07:41:03 Etc/GMT",
    "expires_date_ms": "1651736463000",
    "expires_date_pst": "2022-05-05 00:41:03 America/Los_Angeles",
    "web_order_line_item_id": "190000554363019",
    "is_trial_period": "true",
    "is_in_intro_offer_period": "false",
    "in_app_ownership_type": "PURCHASED",
    "subscription_group_identifier": "20393278"
  }],
  "latest_receipt": "",
  "pending_renewal_info": [{
    "auto_renew_product_id": "FilmmakerProIAP24",
    "product_id": "FilmmakerProIAP24",
    "original_transaction_id": "190001277277603",
    "auto_renew_status": "1"
  }],
  "status": 0
}


body = JSON.stringify(obj); 
$done(body); 
