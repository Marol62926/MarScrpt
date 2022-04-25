var body = $response.body;
var obj = JSON.parse(body);

obj.subscriber.entitlements = {
      "co.bergen.Darkroom.entitlement.allToolsAndFilters": {
        "expires_date": "2029-05-02T12:48:25Z",
        "grace_period_expires_date": null,
        "product_identifier": "co.bergen.Darkroom.product.year.everything",
        "purchase_date": "2022-04-25T12:48:25Z"
      },
      "co.bergen.Darkroom.entitlement.selectiveAdjustments": {
        "expires_date": "2029-05-02T12:48:25Z",
        "grace_period_expires_date": null,
        "product_identifier": "co.bergen.Darkroom.product.year.everything",
        "purchase_date": "2022-04-25T12:48:25Z"
      }
    },
  
obj.subscriber.subscriptions ={
      "co.bergen.Darkroom.product.year.everything":{
              "billing_issues_detected_at": null,
              "expires_date": "2029-05-02T12:48:25Z",
              "grace_period_expires_date": null,
              "is_sandbox": false,
              "original_purchase_date": "2022-04-25T12:48:26Z",
              "ownership_type": "PURCHASED",
              "period_type": "trial",
              "purchase_date": "2022-04-25T12:48:25Z",
              "store": "app_store",
              "unsubscribe_detected_at": null
      }
  }

body = JSON.stringify(obj); 
$done(body); 
