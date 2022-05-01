var body = $response.body;
var obj = JSON.parse(body);

obj = {
  "originalPurchaseDate" : "2022-05-01T09:05:27.000Z",
  "expirationDate" : "2022-05-08T09:05:26.000Z",
  "isTrialPeriod" : true,
  "productId" : "premium2year"
}


body = JSON.stringify(obj); 
$done(body); 
