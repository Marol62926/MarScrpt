# QuanX
# @Marol62926
# [rewrite_local]
# WidgetHub解锁vip
# ^https:\/\/wejet\.app\/API\/userInfo url script-response-body https://raw.githubusercontent.com/Marol62926/MarScrpt/main/widgethub.js
# [mitm]
# hostname= wejet.app

var body = $response.body;
var obj = JSON.parse(body); 

obj = {
  "isPremiumUser": true
}


body = JSON.stringify(obj);
$done({body});
