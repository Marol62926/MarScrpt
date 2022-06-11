var body = $response.body;
var obj = JSON.parse(body);

obj = {
  "id": "3BF9DBFF-1C25-4BDA-AA50-368D2C4D7CAB",
  "plan": "com.zerofasting.yearly_6999_7d_trial_2",
  "store": "APP_STORE",
  "type": "INITIAL_PURCHASE",
  "startDate": "2022-06-11T17:36:03Z",
  "expirationDate": "2029-06-18T17:36:03Z",
  "eventDate": "2022-06-11T17:36:08Z",
  "periodType": "TRIAL",
  "cancelReason": "",
  "environment": "PRODUCTION",
  "isActive": true,
  "stripeSubscription": "",
  "IsTrialConversion": false,
  "price": 0,
  "currency": "USD",
  "priceInPurchasedCurrency": 0,
  "takehomePercentage": 0.7,
  "transactionID": "190001314300675",
  "originalTransactionID": "190001314300675",
  "isFamilyShare": false
}


body = JSON.stringify(obj);
$done({body});
