var body = $response.body;
var obj = JSON.parse(body);

obj = {
  "status" : "ACTIVE",
  "canGetTrial" : false,
  "startDate" : "2022-05-08T13:33:03.015+0000",
  "subscription" : {
    "type" : "PREMIUM_PLUS",
    "offlineGracePeriod" : 30
  },
  "premiumAccess" : true,
  "paymentType" : "ADYEN_CREDIT_CARD",
  "paymentOverdue" : false,
  "highestSoundQuality" : "HI_RES",
  "validUntil" : "2022-06-07T13:33:01.686+0000"
}

  
body = JSON.stringify(obj); 
$done(body); 
