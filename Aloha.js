#QuanX
#@Marol62926
#[rewrite_local]
#Aloha 解锁 Premium VPN(Mainland无法使用)
#https://api.alohaprofile.com/v1/profile_info url script-response-body https://raw.githubusercontent.com/Marol62926/MarScrpt/main/aloha.js
#[mitm]
#hostname= api.alohaprofile.com

var body = $response.body; 
var obj = JSON.parse(body); 

obj ={
  "profile": {
    "id": 2148447,
    "email_verified": true,
    "end_of_premium": 1650350602,
    "_end_of_premium": "2022-04-19 06:43:22",
    "email": "fukr81@163.com",
    "is_premium": true,
    "token": "8424b57543447aa57f1ffc607742386c"
  },
  "error": null
}




body = JSON.stringify(obj);
$done(body);
