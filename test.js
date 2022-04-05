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
    "UserId" : 211494661,
    "MemeList" : [
      {
        "MemeId" : "459731625757114387",
        "MemeName" : "师兄专属表情",
        "Logo" : "https://bossaudioandcomic-1252317822.image.myqcloud.com/activity/document/5348aef52425db987a580e1a6d0a94da.jpg"
      }
    ],
    "Frames" : {
      "ActionUrl" : "QDReader://app/ProfilePicFrameList?query={\"frameId\":0,\"tabId\":3}",
      "List" : [
        {
          "FrameId" : 155,
          "FrameName" : "一夜暴富",
          "FrameUrl" : "https://bossaudioandcomic-1252317822.file.myqcloud.com/activity/document/ec90c12d53eb83874fa99051fb6a10c3.png"
        },
        {
          "FrameId" : 152,
          "FrameName" : "盈盈清风",
          "FrameUrl" : "https://bossaudioandcomic-1252317822.file.myqcloud.com/activity/document/9d0c49baf26ed3351c24e239fcc3db06.png"
        },
        {
          "FrameId" : 175,
          "FrameName" : "财神驾到",
          "FrameUrl" : "https://bossaudioandcomic-1252317822.file.myqcloud.com/activity/document/9825456a85d68319cf2ef10f1ef6123a.png"
        }
      ]
    },
    "NickName" : "Marol",
    "FreeBooks" : {
      "ActionUrl" : "QDReader://app/BookLibraryWithFilter?query={\"siteId\": 11,\"filter\": \"paidmode=4\"}",
      "List" : [
        {
          "BookName" : "从前有座灵剑山",
          "BookId" : 3347574,
          "OriginPrice" : "129.7"
        },
        {
          "BookName" : "夜天子",
          "BookId" : 3234652,
          "OriginPrice" : "152.2"
        },
        {
          "BookName" : "星神兵王",
          "BookId" : 1003561044,
          "OriginPrice" : "219.4"
        },
        {
          "BookName" : "玄门医圣",
          "BookId" : 3167600,
          "OriginPrice" : "113.0"
        },
        {
          "BookName" : "锦衣当权",
          "BookId" : 3210598,
          "OriginPrice" : "101.3"
        },
        {
          "BookName" : "超警美利坚",
          "BookId" : 3571131,
          "OriginPrice" : "41.8"
        }
      ]
    },
    "ShowTask" : 0,
    "TaskMessage" : "",
    "IsVisitor" : 0,
    "Member" : {
      "IsAuto" : 0,
      "ExpireTimeMonth" : 1712328390000,
      "NextFeeTime" : 0,
      "NextPayFee" : -1,
      "ChannelId" : 0,
      "IsMember" : 1,
      "ExpireTime" : 1712328390000,
      "ExpireTimeYear" : 0,
      "MemberType" : 1
    },
    "Tips" : "现在开通，预计全年可省2400元",
    "ToolTip" : "以会员免费书库量以及各种票券福利推算"
  }
}






body = JSON.stringify(obj); // 重新打包回json字符串
$done(body); // 结束修改
