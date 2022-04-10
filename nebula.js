##/*
#圈X
#[rewrite_local]
#NEbula解锁vip, 星座运势
#https://zh-api.nebulahoroscope.com/api/v7/users/*/premium url script-response-body https://raw.githubusercontent.com/Marol62926/MarScrpt/main/nebula.js
#[mitm]
#hostname = zh-api.nebulahoroscope.com
#*/

var body = $response.body;
var obj = JSON.parse(body);

obj = {
  "data": {
    "premium": true,
    "is_lifetime": true,
    "retry_period": true,
    "trial": false,
    "sandbox": true,
    "web": true,
    "purchase_name": null,
    "source": null,
    "expired_at": null,
    "is_need_show_winback": true
  },
  "error": [],
  "result": true
}


body = JSON.stringify(obj); 
$done(body); 
