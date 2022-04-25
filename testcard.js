var body = $response.body;
var obj = JSON.parse(body);

obj = [{
  "id": "con_S1wg71z2bWnVtm",
  "referenceId": "",
  "memberAccount": "",
  "contractType": "SUBSCRIPTION",
  "contractStatus": "TRIAL",
  "productType": "UNFOLD",
  "originalPurchaseDate": 1650872760,
  "endsOn": 1871798227,
  "estimatedGracePeriodEndsOn": 1871798227,
  "autoRenew": true,
  "productId": "prod_SwGgr9yFhw0QGu",
  "compedAccount": false,
  "tier": "NA"
}]

body = JSON.stringify(obj); 
$done(body); 
