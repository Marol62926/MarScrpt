var body = $response.body;
var obj = JSON.parse(body);

obj.user_info.is_vip = 1,
obj.user_info.is_svip = 1,
obj.user_info.is_plus_buy = 1,

body = JSON.stringify(obj); 
$done(body); 
