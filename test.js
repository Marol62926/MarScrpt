var body = $response.body;
var obj = JSON.parse(body);

obj.data = {
  "valid": "True",
  "expiresDate": "1/1/2029 12:00:00 AM",
  "original_transaction_id": "586838987",
  "consumed_product": "pretapplereceiptvalidation.azurewebsites.Subscriptions.yearly",
  "renew_status": "",
  "trial_eligible": "True",
  "is_billing_retry": "True",
  "expiration_intent": "0",
  "offer_eligible": "True",
  "original_purchase_date_ms": "1650909667000"
}

body = JSON.stringify(obj); 
$done(body); 
