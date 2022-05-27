var body = $response.body;
var obj = JSON.parse(body);

obj.data.is_premium = 1,
obj.data.type = "diamond",
obj.data.sku = "diamond_yearly",
obj.data.date": {
      "start": 1644652800,
      "last_renewed": 1644652800,
      "expires": 1874599191
    },
  
body = JSON.stringify(obj); 
$done(body); 
