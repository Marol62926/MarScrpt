var body = $response.body; // 声明一个变量body并以响应消息体赋值
var obj = JSON.parse(body); // JSON.parse()将json形式的body转变成对象处理

obj = 
{
  "Message" : "",
  "Result" : 0,
  "Data" : {
    "TaskUrl" : "",
    "HeadIcon" : "https://me.qidian.com/Images/UserImages/100x100/201.jpg",
    "Ticket" : {
      "RecMain" : 1,
      "RoleCard" : 1,
      "Audio" : 0,
      "FreeTicket" : 0,
      "RecMm" : 1,
      "HongBao" : 2,
      "Comic" : 0
    },
    "WelfareList" : [

    ],
    "MemeList" : [
      {
        
        "MemeName" : "师兄专属表情",
        "Logo" : "https://bossaudioandcomic-1252317822.image.myqcloud.com/activity/document/5348aef52425db987a580e1a6d0a94da.jpg"
      }
    ],
    
    "ShowTask" : 0,
    "TaskMessage" : "",
    "IsVisitor" : 0,
    "Member" : {
      "IsAuto" : 0,
      "ExpireTimeMonth" : 1675608390000,
      "NextFeeTime" : 0,
      "NextPayFee" : -1,
      "ChannelId" : 0,
      "IsMember" : 1,
      "ExpireTime" : 1675608390000,
      "ExpireTimeYear" : 0,
      "MemberType" : 1
    },
   
  }
}






body = JSON.stringify(obj); // 重新打包回json字符串
$done(body); // 结束修改
