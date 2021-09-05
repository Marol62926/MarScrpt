var body = $response.body;
var obj = JSON.parse(body);

obj.subscription.expires = 1661973290000;
obj.subscription.skid = yar.premium.yearly;
obj.subscription.purchased = 1630437290000;
body = JSON.stringify(obj);
$done({body});
