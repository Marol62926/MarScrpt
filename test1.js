var body = $response.body;
var obj = JSON.parse(body);

obj.subscription_info = {
    "is_auto_renew": "ios_newsstand",
    "valid_to": 1652169184
  },

body = JSON.stringify(obj); 
$done(body); 
