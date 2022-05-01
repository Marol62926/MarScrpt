var body = $response.body;
var obj = JSON.parse(body);

obj.result.isPremiumUser = true,


body = JSON.stringify(obj); 
$done(body); 
