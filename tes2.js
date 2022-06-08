var body = $response.body;
var obj = JSON.parse(body);

obj = {
  "success": true
}

body = JSON.stringify(obj);
$done({body});
