var body = $response.body; 
var obj = JSON.parse(body); 

obj.data.is_vip = 1,
obj.data.is_av_vip = 1,
obj.data.vip_expire_time = 1870766006,
obj.data.av_vip_expire_time = 1870766006,


body = JSON.stringify(obj);
$done(body);

