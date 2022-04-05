var body = $response.body; // 声明一个变量body并以响应消息体赋值
var obj = JSON.parse(body); // JSON.parse()将json形式的body转变成对象处理

obj = {
  {
  "isFree" : false,
  "time" : 0,
  "isNewUser" : false,
  "voucherSum" : 0,
  "superMonthlyExpire" : 1675608390000,
  "vipId" : "1",
  "newUserWelfareText" : "",
  "isSVIPUser" : true,
  "isNewUserVip" : true,
  "balance" : 0,
  "ok" : true,
  "beanVoucherCount" : 0,
  "isMonthly" : false,
  "vipStatus" : 1,
  "isAppstoreAutoMonthly" : false,
  "voucherBalance" : 0,
  "freeTime" : 1675608390000,
  "monthly" : 0,
  "beanVoucherBalance" : 0,
  "expiresDay" : 1675608390000,
  "iosBalance" : 0,
  "voucherCount" : 0
}

}



body = JSON.stringify(obj); // 重新打包回json字符串
$done(body); // 结束修改
