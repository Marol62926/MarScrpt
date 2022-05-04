var body = $response.body;
var obj = JSON.parse(body);

obj = '"])}while(1);</x>//{"A":{"id":"27","name":"Canva Pro","descriptor":"CANVA_FOR_WORK","description":"August 2021 prices","featureBundle":"PAID","trialPeriodDays":14,"trialsPerBrand":2,"subscriberType":"BRAND","planProductConfig":{"A?":"A","A":"PAID"},"legacy":false,"userLocked":false,"free":false,"graceEnabled":true,"flexibleBillingEnabled":false,"rollupBillingEnabled":false}}

body = JSON.stringify(obj); 
$done(body); 
