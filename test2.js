var body = $response.body;
var obj = JSON.parse(body);

obj = '"])}while(1);</x>//{"A":[{"A?":"B","A":"27","B":"YEAR","C":1,"D":{"A":[{"A":"com.canva.canvaeditor.china.subscription.canvaPro_yearly","B":1}]}},{"A?":"B","A":"27","B":"MONTH","C":1,"D":{"A":[{"A":"com.canva.canvaeditor.china.subscription.canvaPro_monthly","B":1}]}}]}
  

body = JSON.stringify(obj); 
$done(body); 
