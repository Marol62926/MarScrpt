var body = $response.body;
var obj = JSON.parse(body);

obj = {
  "random" : 9453,
  "remainCount" : 6666,
  "payingRemainTime" : 11116,
  "day" : 91,
  "remainTime" : 9930,
  "signature" : "80983bb9278bc8a7780a288b63fe5fe40994e945d0de99a4183dcef0fa17109d",
  "isAutoRenewable" : 1,
  "permanent" : 1,
  "expired" : 0,
  "historyAutoRenewable" : 1,
  "autoRenewableChannel" : 6,
  "isPaying" : 0,
  "autoRenewableTime" : 6,
  "totalFreeReadDay" : 6666,
  "expiredTime" : 1872518379,
  "timestamp" : 1651904842,
  "canUseDiscount" : 0,
  "savedMoney" : 9927433,
  "autoRenewablePrice" : 991900,
  "remainCoupon" : 6666,
  "startTime" : 1651904966,
}

  
body = JSON.stringify(obj); 
$done(body); 
