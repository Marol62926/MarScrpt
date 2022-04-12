##/*
#圈X
#[rewrite_local]
#ColorWidget解锁vip
#https://api.revenuecat.com/v1/receipts url script-response-body https://raw.githubusercontent.com/Marol62926/MarScrpt/main/colorwidget.js
#[mitm]
#hostname= api.revenuecat.com
#*/


let obj = JSON.parse($response.body);
  
obj.subscriber.subscriptions ={
      "com.skyview.monthly":{
              "billing_issues_detected_at":null,
              "expires_date":"2029-05-26T05:05:04Z",
              "is_sandbox":false,
              "original_purchase_date":"2022-04-09T05:05:04Z",
              "period_type":"trial",
              "purchase_date":"2022-04-09T05:05:04Z",
              "store":"app_store",
              "unsubscribe_detected_at":null
      }
  }

$done({body: JSON.stringify(obj)});
