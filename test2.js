var body = $response.body;
var obj = JSON.parse(body);

obj.data.isPremium = true,
obj.data.showSubscriptionProducts = false,
obj.data.userType = "premium yearly"

body = JSON.stringify(obj); 
$done(body); 
