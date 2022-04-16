var body = $response.body;
var obj = JSON.parse(body);

obj.DATA.MEMEBER = "付费会员",
obj.DATA.EXPIREDATE = 20290422,
obj.DATA.ISEXPIRED = 0,
obj.DATA.RESRDAY = 300

body = JSON.stringify(obj); 
$done(body); 
