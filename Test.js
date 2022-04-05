var body = $response.body; // 声明一个变量body并以响应消息体赋值
var obj = JSON.parse(body); // JSON.parse()将json形式的body转变成对象处理

obj = {
  "message" : "ok",
  "data" : {
    "oauth_providers" : [
      "apple"
    ],
    "nickname_notice" : {
      "alter_nickname" : 0,
      "msg_nickname" : "",
      "raw_nickname" : ""
    },
    "youzan" : {
      "user_id" : "f60d675f-cd08-4252-bce9-10b6ef9fd8fb"
    },
    "oauth_list" : [
      {
        "nickname" : "LeeMarol",
        "oauth_provider" : "apple"
      }
    ],
    "user" : {
      "id" : 1273363628,
      "avatar_url_jpg" : "https://tn1-f2.kkmh.com/default_avatar_image.jpg-w180",
      "head_charm_url" : "",
      "avatar_url" : "https://tn1-f2.kkmh.com/default_avatar_image.jpg-w180",
      "pub_feed" : 0,
      "user_role" : 0,
      "vip_type" : 1,
      "user_role_mark" : 0,
      "reg_type" : "apple",
      "vip_icon" : "",
      "nickname" : "LeeMarol",
      "grade" : 0,
      "head_charm_id" : 0
    }
  },
  "code" : 200
}


}



body = JSON.stringify(obj); // 重新打包回json字符串
$done(body); // 结束修改
