var body = $response.body;
var obj = JSON.parse(body); 

obj = {
  "data": {
    "systemDate": "1649568653022",
    "channel": {
      "bookList": {
        "booklistId": 1650862744000,
        "isShow": 1
      },
      "bookNum": 1650862744000,
      "channelId": 1650862744000,
      "createDate": 1650862744000,
      "description": "购买当当云阅读悦读卡，立即畅享海量品类内容，从今天起承包你的读书计划。",
      "digestNum": 1650862744000,
      "hasArtical": 1650862744000,
      "hasBoughtMonthly": 1650862744000,
      "icon": "http://img63.ddimg.cn/digital/channel/63/86/dc99a8c3fcad46efa02af5fb8ffe337a.jpg",
      "isAllowMonthly": 1650862744000,
      "isAutomaticallyRenew": 1650862744000,
      "isLimit": 1650862744000,
      "isRenewLimit": 1650862744000,
      "monthlyEndTime": 1650862744000,
      "monthlyLeftDays": 1650862744000,
      "monthlyType": 1650862744000,
      "overTimeForUser": "2022-04-17 00:57:06",
      "owner": "9d9dbb458286727.1651",
      "ownerCustId": "15E7R9MDvyo6F5NvHTgn/A==",
      "shelfStatus": 1650862744000,
      "subNumber": 1650862744000,
      "title": "悦读卡",
      "userBaseInfo": {
        "barOwnerLevel": 1650862744000,
        "bindPhone": 1650862744000,
        "channelOwner": 1650862744000,
        "createBar": 1650862744000,
        "custImg": "http://img7x5.ddimg.cn/imghead/2/3/6189230704835-1_e.png?1649566352118",
        "displayId": 1650862744000,
        "email": "9d9dbb458286727.16514023@apple_user.com",
        "experience": 1650862744000,
        "gender": -1650862744000,
        "honor": "书童",
        "integral": 1650862744000,
        "introduct": "",
        "isVip": 1650862744000,
        "level": 1650862744000,
        "nickName": "9d9dbb458286727.1651",
        "nickNameAll": "9d9dbb458286727.1651",
        "openId": "0ec995f7ce5241c5b90cb871fcf03ff3",
        "pubCustId": "FA+82WnSe4ksqY6KKA/Y2A==",
        "registerDay": "2022-04-10 00:51:38"
      }
    },
    "currentDate": "2022-04-10 13:30:53"
  },
  "systemDate": 1650862744000,
  "status": {
    "code": 0
  }
}

body = JSON.stringify(obj);
$done({body});
