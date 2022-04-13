var body = $response.body;
var obj = JSON.parse(body);

obj.subscriber.entitlements = {
      "membership":{
              "expires_date":"2029-05-26T05:05:04Z",
              "product_identifier":"vsco_global_2999_annual",
              "purchase_date":"2022-04-09T05:05:04Z"
      }
  },
  
obj.subscriber.subscriptions ={
      "vsco_global_2999_annual":{
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
