var body = $response.body;
var obj = {
  "account_type":"2"
};
body = JSON.stringify(obj);
$done({body});
