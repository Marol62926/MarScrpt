var body = $response.body;
var obj = JSON.parse(body);

obj.data = {
    "expiresDateMs": "1872518379000",
    "autoRenewStatus": "1",
    "isTrialed": "0",
    "skuId": "subscription_yearly"
  }

body = JSON.stringify(obj); 
$done(body); 
