var body = $response.body; // 声明一个变量body并以响应消息体赋值
var obj = JSON.parse(body); // JSON.parse()将json形式的body转变成对象处理

obj = {
  "subscriptions" : [
    {
      "renewsAt" : "2023-03-28T20:58:25.000Z",
      "purchaserId" : null,
      "legacySubscriptionId" : "HSSUBS_B2CSUBSCRIBER",
      "tags" : [
        "CURRENT_SUB"
      ],
      "membership" : "PRIMARY",
      "platform" : "GOOGLE",
      "endsAt" : "2023-03-28T20:58:25.000Z",
      "renewalTerm" : "ANNUAL",
      "subscriptionState" : "PAYING",
      "plan" : {
        "subscriptionType" : "B2C",
        "affiliation" : null,
        "initialTermMonths" : 12,
        "name" : "Android Annual (14-day free trial)"
      },
      "voucher" : {
        "code" : "andiap12m_14dayfreetrial"
      },
      "startsAt" : "2021-04-14T18:58:27.000Z",
      "status" : "ACTIVE"
    }
  ]
};


body = JSON.stringify(obj); // 重新打包回json字符串
$done(body); // 结束修改
