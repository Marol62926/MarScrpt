var body = $response.body;
var obj = JSON.parse(body);

obj.vip_type = 2,

body = JSON.stringify(obj); 
$done(body); 
