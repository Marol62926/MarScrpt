var body = $response.body;
var obj = JSON.parse(body);

const path1 = "/app/user/memberInfo",
const path2 = "/app/user/myInfo",
const path3 = "/app/item/iapFuzhu",

if ($request.url.indexOf(path1) != -1){
  obj.DATA.ISEXPIRED = 0
}
if ($request.url.indexOf(path2) != -1){
  obj.DATA.MEMEBER = "付费会员",
  obj.DATA.EXPIREDATE = 20290422,
  obj.DATA.ISEXPIRED = 0,
  obj.DATA.RESRDAY = 300
}
if ($request.url.indexOf(path3) != -1){
  obj.DATA.MEMEBER = "付费会员",
  obj.DATA.EXPIREDATE = "20290422"
}

obj.DATA.ISEXPIRED = 0

body = JSON.stringify(obj); 
$done(body); 
