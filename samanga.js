var body = $response.body; 
var obj = JSON.parse(body); 

obj = {
    "isVip": 1,
}


body = JSON.stringify(obj);
$done(body);
