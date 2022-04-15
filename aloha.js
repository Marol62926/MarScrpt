var body = $response.body;
var obj = JSON.parse(body);

obj.is_premium = true,
obj.end_of_premium = 1883639265,
obj._end_of_premium = "2029-09-09 17:07:45"


body = JSON.stringify(obj); 
$done(body); 
