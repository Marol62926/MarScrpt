var body = $response.body;
var obj = JSON.parse(body);

obj = {
  "ok": 1,
  "valid": 1,
  "valid_from": 1651564385,
  "valid_to": 1652169184
}

body = JSON.stringify(obj); 
$done(body); 
