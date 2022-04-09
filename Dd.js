var body = $response.body;
var obj = JSON.parse(body); 

obj = {
  "data": {
   
      "bookNum": 0,
      "channelId": 18980,
      "createDate": 1559030126000,
      "description": "购买当当云阅读悦读卡，立即畅享海量品类内容，从今天起承包你的读书计划。",
      "digestNum": 0,
      "hasArtical": 0,
      "hasBoughtMonthly": 1,
      "icon": "http://img63.ddimg.cn/digital/channel/63/86/dc99a8c3fcad46efa02af5fb8ffe337a.jpg",
      "isAllowMonthly": 1,
      "isAutomaticallyRenew": 1,
      "isLimit": 0,
      "isRenewLimit": 0,
      "monthlyEndTime": 1681061108000,
      "monthlyLeftDays": 365,
      "monthlyType": 4,
      "overTimeForUser": "2022-04-17 00:57:06",
      "owner": "9d9dbb458286727.1651",
      "ownerCustId": "15E7R9MDvyo6F5NvHTgn/A==",
      "shelfStatus": 1,
      "subNumber": 204696,
      "title": "悦读卡",
      "userBaseInfo": {
        "barOwnerLevel": 0,
        "bindPhone": false,
        "channelOwner": 0,
        "createBar": false,
        "custImg": "http://img7x5.ddimg.cn/imghead/2/3/6189230704835-1_e.png?1649523098140",
        "displayId": 6189230704835,
        "experience": 1,
        "gender": -1,
        "honor": "书童",
        "integral": 0,
        "introduct": "",
        "isVip": 1,
        "level": 0,
        "nickName": "9d9dbb458286727.1651",
        "nickNameAll": "9d9dbb458286727.1651",
        "openId": "0ec995f7ce5241c5b90cb871fcf03ff3",
        "pubCustId": "FA+82WnSe4ksqY6KKA/Y2A==",
        "registerDay": "2022-04-10 00:51:38"
      }
    },
    
  },
  "status": {
    "code": 0
  }
}

body = JSON.stringify(obj);
$done({body});
