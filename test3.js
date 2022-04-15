var body = $response.body;
var obj = JSON.parse(body);

obj = {
  "id": "62585840b150440001941068",
  "sid": "AYE631660",
  "email": "",
  "nickname": "Lee Marol",
  "sex": 0,
  "birthday": 0,
  "email_verified": false,
  "nation_code": "",
  "phone_number": "",
  "avatar": "",
  "created_at": 1649956928,
  "updated_at": 1649988156,
  "vip": {
    "expired_at": 1650592956,
    "created_at": 1649988156,
    "updated_at": 1649988156,
    "is_lifetime_member": false,
    "is_valid": true
  },
  "scene_pass": {
    "expired_at": 0,
    "created_at": 0,
    "updated_at": 0,
    "is_lifetime_member": false,
    "is_valid": false
  },
  "reg_by_guest": false,
  "app_store_info": {
    "trial_started_at": 1649988156,
    "trial_expired_at": 1650592952,
    "auto_subscription_expired_at": 1650592952,
    "subscription_type": 1,
    "updated_at": 1649988156,
    "google_play_subscription_expired_at": 0
  },
  "app_store_scene_pass_subscription": {
    "auto_subscription_expired_at": 0,
    "subscription_type": 0,
    "updated_at": 0,
    "google_play_subscription_expired_at": 0
  },
  "google_play_info": {
    "auto_subscription_expired_at": 0,
    "subscription_type": 0,
    "updated_at": 0,
    "google_play_subscription_expired_at": 0
  },
  "google_play_scene_pass_subscription": {
    "auto_subscription_expired_at": 0,
    "subscription_type": 0,
    "updated_at": 0,
    "google_play_subscription_expired_at": 0
  },
  "huawei_info": {
    "auto_subscription_expired_at": 0,
    "subscription_type": 0,
    "updated_at": 0,
    "google_play_subscription_expired_at": 0
  },
  "huawei_scene_pass_subscription": {
    "auto_subscription_expired_at": 0,
    "subscription_type": 0,
    "updated_at": 0,
    "google_play_subscription_expired_at": 0
  },
  "alipay_info": {
    "auto_subscription_expired_at": 0,
    "subscription_type": 0,
    "updated_at": 0,
    "google_play_subscription_expired_at": 0
  },
  "alipay_scene_pass_subscription": {
    "auto_subscription_expired_at": 0,
    "subscription_type": 0,
    "updated_at": 0,
    "google_play_subscription_expired_at": 0
  },
  "inviter": "",
  "Push": {},
  "is_paying_premium_user": false,
  "has_favourite_scenes": true,
  "focus_tags": [],
  "favourite_daily_pics": [],
  "favourite_meditations": [],
  "favourite_sleep_stories": [],
  "is_pwd_set": false,
  "premium_type": 2,
  "wechat": {
    "access_token": "",
    "tide_sleep_mp": {
      "openid": ""
    },
    "tide_breath_mp": {
      "openid": ""
    },
    "tide_meditation_mp": {
      "openid": ""
    },
    "openid": "",
    "unionid": ""
  },
  "weibo": {
    "access_token": "",
    "uid": ""
  },
  "facebook": {
    "uid": "",
    "access_token": "",
    "limited": false
  },
  "qq": {
    "access_token": "",
    "openid": "",
    "unionid": "",
    "tide_sleep_mp": {
      "openid": ""
    },
    "tide_breath_mp": {
      "openid": ""
    },
    "tide_meditation_mp": {
      "openid": ""
    }
  },
  "google": {
    "token": "",
    "subject": ""
  },
  "huawei": {
    "access_token": "",
    "union_id": ""
  },
  "oppo": {
    "token": "",
    "ssoid": "",
    "email": "",
    "username": "",
    "mobile_number": ""
  },
  "apple_id": {
    "sub": "001879.038906222f4a42cb974805f9cb48346a.1722",
    "email": "fukr81@163.com",
    "email_verified": "true",
    "iat": 0,
    "iss": "",
    "exp": 0,
    "auth_time": 0
  }
}

body = JSON.stringify(obj); 
$done(body); 
