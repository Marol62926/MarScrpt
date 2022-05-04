var body = $response.body;
var obj = JSON.parse(body);

obj = '"])}while(1);</x>//{"subscriptions":[{"id":"8921051","plan":"27","owningBrand":"BAE9G_WiuIc","creatingBrand":"BAE9G_WiuIc","creatingUser":"UAE9GyJ34Ds","status":"TRIALING","pastDue":false,"isDisputed":false,"quantity":1,"fixedQuantity":5,"paymentConfig":{"A?":"C","C":"YEAR","D":1},"productConfig":{"A?":"A"},"createdDate":1651641693000,"featureAccessDate":1651641693000,"currentPeriodStartDate":1651641693000,"currentPeriodEndDate":1652851288000,"trialPeriodEndDate":1652851288000,"cancelAtPeriodEnd":false,"periodEndAction":"C","provider":"APPLE","planDetails":{"id":"27","name":"Canva Pro","descriptor":"CANVA_FOR_WORK","description":"August 2021 prices","featureBundle":"PAID","trialPeriodDays":14,"trialsPerBrand":2,"subscriberType":"BRAND","planProductConfig":{"A?":"A","A":"PAID"},"legacy":false,"userLocked":false,"free":false,"graceEnabled":true,"flexibleBillingEnabled":false,"rollupBillingEnabled":false},"liveQuantity":1,"externalId":"190001282552259","managementUrl":"https://apps.apple.com/account/subscriptions"}]}

body = JSON.stringify(obj); 
$done(body); 
