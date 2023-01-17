var body = $response.body;
var obj = JSON.parse(body);

obj = {
  "message" : "校验成功",
  "data" : {
    "isVip" : "1",
    "userId" : "76e71610-9641-11ed-9d42-21fd0449b63b",
    "expiresDateMs" : "1863333334000"
  },
  "code" : 200
}



body = JSON.stringify(obj); 
$done({body});
