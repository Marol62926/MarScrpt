var body = $response.body; // 声明一个变量body并以响应消息体赋值
var obj = JSON.parse(body); // JSON.parse()将json形式的body转变成对象处理

obj = {
  "receipt": {
    "receipt_type": "Production",
    "adam_id": 787619884,
    "app_item_id": 787619884,
    "bundle_id": "com.links.quickresumefree",
    "application_version": "5.0",
    "download_id": 501298057579102953,
    "version_external_identifier": 847213917,
    "receipt_creation_date": "2022-04-08 17:08:57 Etc/GMT",
    "receipt_creation_date_ms": "1649437737000",
    "receipt_creation_date_pst": "2022-04-08 10:08:57 America/Los_Angeles",
    "request_date": "2022-04-08 17:17:14 Etc/GMT",
    "request_date_ms": "1649438234762",
    "request_date_pst": "2022-04-08 10:17:14 America/Los_Angeles",
    "original_purchase_date": "2022-04-08 16:47:03 Etc/GMT",
    "original_purchase_date_ms": "1649436423000",
    "original_purchase_date_pst": "2022-04-08 09:47:03 America/Los_Angeles",
    "original_application_version": "5.0",
    "in_app": [{
      "quantity": "1",
      "product_id": "subscription.links.resume.6month",
      "transaction_id": "190001261374185",
      "original_transaction_id": "190001261374185",
      "purchase_date": "2022-04-08 17:04:18 Etc/GMT",
      "purchase_date_ms": "1649437458000",
      "purchase_date_pst": "2022-04-08 10:04:18 America/Los_Angeles",
      "original_purchase_date": "2022-04-08 17:04:19 Etc/GMT",
      "original_purchase_date_ms": "1649437459000",
      "original_purchase_date_pst": "2022-04-08 10:04:19 America/Los_Angeles",
      "expires_date": "2099-09-09 17:07:45 Etc/GMT",
      "expires_date_ms": "4092647115000",
      "expires_date_pst": "2099-09-09 09:07:45 America/Los_Angeles",
      "web_order_line_item_id": "190000545824985",
      "is_trial_period": "false",
      "is_in_intro_offer_period": "false",
      "in_app_ownership_type": "PURCHASED"
    }]
  },
  "latest_receipt_info": [{
    "quantity": "1",
    "product_id": "subscription.links.resume.6month",
    "transaction_id": "190001261374185",
    "original_transaction_id": "190001261374185",
    "purchase_date": "2022-04-08 17:04:18 Etc/GMT",
    "purchase_date_ms": "1649437458000",
    "purchase_date_pst": "2022-04-08 10:04:18 America/Los_Angeles",
    "original_purchase_date": "2022-04-08 17:04:19 Etc/GMT",
    "original_purchase_date_ms": "1649437459000",
    "original_purchase_date_pst": "2022-04-08 10:04:19 America/Los_Angeles",
    "expires_date": "2099-09-09 17:07:45 Etc/GMT",
    "expires_date_ms": "4092647115000",
    "expires_date_pst": "2099-09-09 09:07:45 America/Los_Angeles",
    "web_order_line_item_id": "190000545824985",
    "is_trial_period": "false",
    "is_in_intro_offer_period": "false",
    "in_app_ownership_type": "PURCHASED",
    "subscription_group_identifier": "20926462"
  }],
  "latest_receipt": "",
  "pending_renewal_info": [{
    "auto_renew_product_id": "subscription.links.resume.6month",
    "product_id": "subscription.links.resume.6month",
    "original_transaction_id": "190001261374185",
    "auto_renew_status": "1"
  }],
  "status": 0
}

body = JSON.stringify(obj); // 重新打包回json字符串
$done(body); // 结束修改
