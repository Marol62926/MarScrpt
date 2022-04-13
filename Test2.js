var body = $response.body; 
var obj = JSON.parse(body); 

obj = {
  "status": "success",
  "timestamp": 1649841369,
  "data": {
    "is_vip": 1,
    "is_av_vip": 1,
    "vip_expire_time": 1870766006,
    "av_vip_expire_time": 1870766006,
    "month_card_expire_time": 1870766006,
    "level": 5,
  }
}


body = JSON.stringify(obj);
$done(body);

