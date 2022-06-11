var body = $response.body; 
var obj = JSON.parse(body); 

obj = {
  "status": "active",
  "service_level": 1,
  "auto_renew_status": true,
}

body = JSON.stringify(obj);
$done({body});
