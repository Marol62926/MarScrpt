var body = $response.body; // 声明一个变量body并以响应消息体赋值
var obj = JSON.parse(body); // JSON.parse()将json形式的body转变成对象处理

obj = {
  "id" : 84887444
  "limits" : {
    "wordpdf" : {
      "mb" : 4000,
      "files" : 10
    },
    "rotateimage" : {
      "mb" : 4000,
      "files" : 120
    },
    "imagepdf" : {
      "mb" : 4000,
      "files" : 80
    },
    "pagenumber" : {
      "mb" : 4000,
      "files" : 10
    },
    "unlock" : {
      "mb" : 4000,
      "files" : 10
    },
    "pdfa" : {
      "mb" : 4000,
      "files" : 10
    },
    "resizeimage" : {
      "mb" : 4000,
      "files" : 120
    },
    "watermarkimage" : {
      "mb" : 4000,
      "files" : 120
    },
    "memeimage" : {
      "mb" : 4000,
      "files" : 1
    },
    "powerpointpdf" : {
      "mb" : 4000,
      "files" : 10
    },
    "compressimage" : {
      "mb" : 4000,
      "files" : 120
    },
    "split" : {
      "mb" : 4000,
      "files" : 1
    },
    "merge" : {
      "mb" : 4000,
      "files" : 500
    },
    "excelpdf" : {
      "mb" : 4000,
      "files" : 10
    },
    "compress" : {
      "mb" : 4000,
      "files" : 10
    },
    "pdfexcel" : {
      "mb" : 4000,
      "files" : 10
    },
    "pdfjpg" : {
      "mb" : 4000,
      "files" : 10
    },
    "repair" : {
      "mb" : 4000,
      "files" : 10
    },
    "organize" : {
      "mb" : 4000,
      "files" : 20
    },
    "cropimage" : {
      "mb" : 4000,
      "files" : 1
    },
    "rotate" : {
      "mb" : 4000,
      "files" : 80
    },
    "converttojpg" : {
      "mb" : 4000,
      "files" : 120
    },
    "convertfromjpg" : {
      "mb" : 4000,
      "files" : 120
    },
    "editimage" : {
      "mb" : 50,
      "files" : 1
    },
    "editpdf" : {
      "mb" : 100,
      "files" : 1
    },
    "sign" : {
      "mb" : 50,
      "files" : 5
    },
    "watermark" : {
      "mb" : 4000,
      "files" : 10
    },
    "pdfword" : {
      "mb" : 4000,
      "files" : 10
    },
    "pdfoffice" : {
      "mb" : 4000,
      "files" : 10
    },
    "officepdf" : {
      "mb" : 4000,
      "files" : 10
    },
    "pdfpowerpoint" : {
      "mb" : 4000,
      "files" : 10
    },
    "protect" : {
      "mb" : 4000,
      "files" : 80
    }
  },
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
    "token" : "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJzZXJ2aWNlLmlsb3ZlcGRmLmNvbSIsImF1ZCI6IiIsImlhdCI6MTY0OTE3NjkxMCwibmJmIjoxNjQ5MTc2OTEwLCJqdGkiOjg0ODg3NDQ0fQ.G4r8ZIxzHGOPjuiZbqcqH4HbgBPJwv2cQsU5jKNeZlA",
  "certificates_left" : 0,
  "sus_rbt" : false,
  "loginkey" : "lstu4aGbwsRpcOD4oYfLCCxmJMGX-TZa",
  "email" : "fukr81@163.com",
  "name" : "Marol Lee",
  "country" : "US"
}




body = JSON.stringify(obj); // 重新打包回json字符串
$done(body); // 结束修改
