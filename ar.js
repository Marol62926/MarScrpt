var body = $response.body;
var obj = JSON.parse(body); 

var obj = ｛
  "user" : {
      "account_type":"2"
    }
};
body = JSON.stringify(obj);
$done({body});
