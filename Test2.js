var body = $response.body; 
var obj = JSON.parse(body); 

obj = {
  "subscription_apple" : {
    "subscription_exp" : 1650095874,
    "product_id" : "yt"
  },
  "subscription_google" : null,
  "user_token_lifetime" : 86400,
  "user" : null
}

body = JSON.stringify(obj);
$done(body);

