# QuanX
# @Marol62926
# 注意事项:这个软件有点薛定谔，不成功就多重启几次，还是失败就重装
# [rewrite_local]
# Widgetsmith解锁Premium
# https://api.revenuecat.com/v1/receipts url script-response-body https://raw.githubusercontent.com/Marol62926/MarScrpt/main/widgetsmith.js
# [mitm]
# hostname= api.revenuecat.com,buy.itunes.apple.com

var body = $response.body; 
var obj = JSON.parse(body); 

obj = {
  "subscriber": {
    "entitlements": {
      "Premium": {
        "expires_date":"2029-05-26T05:05:04Z",
        "grace_period_expires_date": null,
        "product_identifier": "PremiumAnnualWidget",
        "purchase_date":"2022-04-09T05:05:04Z"
      }
    },
    "subscriptions": {
      "PremiumAnnualWidget": {
        "billing_issues_detected_at": null,
        "expires_date": "2029-05-26T05:05:04Z",
        "grace_period_expires_date": null,
        "is_sandbox": false,
        "original_purchase_date": "2022-04-12T12:54:03Z",
        "ownership_type": "PURCHASED",
        "period_type": "trial",
        "purchase_date": "2022-04-12T12:54:03Z",
        "store": "app_store",
        "unsubscribe_detected_at": null
      }
    }
  }
}


body = JSON.stringify(obj);
$done(body);
