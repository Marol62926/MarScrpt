var body = $response.body;
var obj = JSON.parse(body);

obj.expires = 1661973290000;
obj.skid = yar.premium.yearly;
obj.purchased = 1630437290000;
body = JSON.stringify(obj);
$done({body});
