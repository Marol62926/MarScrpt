var body = $response.body; // 声明一个变量body并以响应消息体赋值
var obj = JSON.parse(body); // JSON.parse()将json形式的body转变成对象处理

obj = {
  "Message" : "",
  "Result" : 0,
  "Data" : {
    "Member" : {
      "CardId" : "member",
      "IsAuto" : 0,
      "Title" : "开通畅享卡",
      "NextFeeTime" : 1712328390000,
      "ProfitList" : [
        {
          "Title" : "免费书库",
          "Icon" : "https://bossaudioandcomic-1252317822.image.myqcloud.com/activity/document/640485d1778d1ee37781d1d7396483b5.png"
        },
        {
          "Title" : "票券福利",
          "Icon" : "https://bossaudioandcomic-1252317822.image.myqcloud.com/activity/document/697457769c6eee3e3e66ac76321c82a8.png"
        },
        {
          "Title" : "签到特权",
          "Icon" : "https://bossaudioandcomic-1252317822.image.myqcloud.com/activity/document/f0158f33ea23607aa563c08e557f9e60.png"
        },
        {
          "Title" : "专属任务",
          "Icon" : "https://bossaudioandcomic-1252317822.image.myqcloud.com/activity/document/3f4d1e89b1ad097ef3ee251523c6d157.png"
        },
        {
          "Title" : "头像挂件",
          "Icon" : "https://bossaudioandcomic-1252317822.image.myqcloud.com/activity/document/567be68ba2f1d9781704447f7828216a.png"
        },
        {
          "Title" : "阅读页主题",
          "Icon" : "https://bossaudioandcomic-1252317822.image.myqcloud.com/activity/document/8487edfdac4906b856166b8101bb273a.png"
        },
        {
          "Title" : "专属表情包",
          "Icon" : "https://bossaudioandcomic-1252317822.image.myqcloud.com/activity/document/3aa88a89dc335a3f26626b611eada083.png"
        },
        {
          "Title" : "专属徽章",
          "Icon" : "https://bossaudioandcomic-1252317822.image.myqcloud.com/activity/document/81f323940b11e2697653f6d1a160c385.png"
        }
      ],
      "SubTitle" : "享定制徽章等10项福利",
      "IsMember" : 1,
      "ActionUrl" : "QDReader://h5.if.qidian.com/statics/member/index.html",
      "ExpireTime" : 1712328390000,
      "IconUrl" : "https://qidian.qpic.cn/qidian_common/349573/b607187c713dc16bb9b2f09d1119843c/0",
      "MemberType" : 1
    },
    
      
    "RechargeAd" : {
      "Id" : 0
    },
  }
}




body = JSON.stringify(obj); // 重新打包回json字符串
$done(body); // 结束修改
