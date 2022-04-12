#QuanX @Marol62926
#[rewrite_local]
#Aloha 解锁 Premium VPN(Mainland无法使用)
#https://api.alohaprofile.com/v1/profile_info url script-response-body https://raw.githubusercontent.com/Marol62926/MarScrpt/main/aloha.js
#[mitm]
#hostname= api.alohaprofile.com

var body = $response.body; 
var obj = JSON.parse(body); 

obj ={
  "profile": {
    "end_of_premium": 1650350602,
    "_end_of_premium": "2022-04-19 06:43:22",
    "is_premium": true,
  },
  "error": null
}



body = JSON.stringify(obj);
$done(body);
