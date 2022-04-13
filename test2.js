var body = $response.body; 
var obj = JSON.parse(body); 

obj = {
  "status": "success",
  "data": {
    "balance": 10000,
    "is_vip": 1,
    "is_av_vip": 1,
    "cover_frame_url": "",
    "vip_expire_time": 1870766006,
    "av_vip_expire_time": 1870766006,
    "month_card_expire_time": 1870766006,
    "signin": true,
    "signin_rice": 1,
    "is_anonymous": 0,
    "facebook_id": null,
    "nickname": ,
    "image_url": "",
    "bg_image_url": "",
    "intro": "",
    "return_mili": 0,
    "level": 5,
    "gender": -1,
    "birthday": "",
    "open_id": "",
    "weibo_id": null,
    "qq": null,
    "google_id": null,
    "email": null,
    "email_activated_at": null,
    "alerts": {
      "coupon": 1,
      "sign_in": 1,
      "birthday": 1
    },
    "readcoupon": 0,
    "showfun_info": {
      "image_url": "",
      "name": "用戶",
      "gender": 0,
      "intro": null,
      "birthday": null
    }
  }
}



body = JSON.stringify(obj);
$done(body);

