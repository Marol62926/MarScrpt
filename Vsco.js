var body = $response.body;
var obj = JSON.parse(body);

obj = {
      "isvip": 1,
      "vipStatus": 1,
      "vipEndDate": "2029-01-01",
      "vipEndDateTime": "2029-01-01 10:19:38",
      "vipDays": 365,
      "level": 5,
}

body = JSON.stringify(obj); 
$done(body); 
