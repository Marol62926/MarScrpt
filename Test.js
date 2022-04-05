var body = $response.body; // 声明一个变量body并以响应消息体赋值
var obj = JSON.parse(body); // JSON.parse()将json形式的body转变成对象处理

obj = {
  "can_trial" : false,
  "current_subscription" : null,
  "team_role" : "owner",
  "active" : 1,
  "signatures_left" : 0,
  "premium" : true,
  "sms_left" : 0,
  "avatar" : "https://service.ilovepdf.com/avatar/ff8dc69cc87ef50992bcb3df4d58bd83/BComEyBNAj4ikDD-lzR07i7fsZJSlzSp?s=30",
  "mode" : 3,
  "certificates_left" : 0,
  "sus_rbt" : false,
}



body = JSON.stringify(obj); // 重新打包回json字符串
$done(body); // 结束修改
