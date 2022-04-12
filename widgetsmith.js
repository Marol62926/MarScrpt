var body = $response.body; 
var obj = JSON.parse(body); 

obj = {
  "subscriber": {
    "entitlements": {
      "Premium": {
        "expires_date":"2029-05-26T05:05:04Z",
        "grace_period_expires_date": null,
        "product_identifier": "PremiumMonthly",
        "purchase_date":"2022-04-09T05:05:04Z"
      }
    },
    "subscriptions": {
      "PremiumMonthly": {
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
