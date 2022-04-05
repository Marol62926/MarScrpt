var body = $response.body; // 声明一个变量body并以响应消息体赋值
var obj = JSON.parse(body); // JSON.parse()将json形式的body转变成对象处理

obj = {
  "Message" : "",
  "Result" : 0,
  "Data" : {
    "TaskUrl" : "",
    "Ticket" : {
      "RecMain" : 0,
      "RoleCard" : 1,
      "Audio" : 0,
      "FreeTicket" : 0,
      "RecMm" : 0,
      "HongBao" : 1,
      "Comic" : 0
    },
    "WelfareList" : [

    ],
    
    "ShowTask" : 0,
    "TaskMessage" : "",
    "IsVisitor" : 0,
    "Member" : {
      "IsAuto" : 1,
      "NextFeeTime" : 1712328390000,
      "IsMember" : 1,
      "ExpireTime" : 1712328390000,
      "MemberType" : 1
    },

  }
}





body = JSON.stringify(obj); // 重新打包回json字符串
$done(body); // 结束修改
