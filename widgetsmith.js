# QuanX
# @Marol62926
# [rewrite_local]
# Widgetsmith解锁Premium
# https://api.revenuecat.com/v1/subscribers/* url script-response-body https://raw.githubusercontent.com/Marol62926/MarScrpt/main/testcat.js
# ^https:\/\/buy\.itunes\.apple\.com\/verifyReceipt url script-response-body https://raw.githubusercontent.com/Marol62926/MarScrpt/main/testcat.js
# [mitm]
# hostname= api.revenuecat.com,buy.itunes.apple.com

var body = $response.body;
var obj = JSON.parse(body);

obj.subscriber.entitlements = {
      "Premium":{
              "expires_date":"2029-05-26T05:05:04Z",
              "product_identifier":"PremiumMonthly",
              "purchase_date":"2022-04-09T05:05:04Z"
      }
  },
  
obj.subscriber.subscriptions ={
      "PremiumMonthly":{
              "billing_issues_detected_at":null,
              "expires_date":"2029-05-26T05:05:04Z",
              "is_sandbox":false,
              "original_purchase_date":"2022-04-09T05:05:04Z",
              "period_type":"trial",
              "purchase_date":"2023-04-09T05:05:04Z",
              "store":"app_store",
              "unsubscribe_detected_at":null
      }
  }

body = JSON.stringify(obj); 
$done(body); 
