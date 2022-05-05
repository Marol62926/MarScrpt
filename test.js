var body = $response.body;
var obj = JSON.parse(body);

obj.mobileProfile.profileStatus = "PROFILE_AVAILABLE",
obj.mobileProfile.legacyProfile = "{\"licenseId\":\"TEMP_LICENSE_PROD\",\"licenseType\":3,\"licenseVersion\":\"91.0\",\"effectiveEndTimestamp\":1651851743360,\"graceTime\":0,\"licensedFeatures\":[],\"enigmaData\":{\"productId\":118,\"serialKey\":\"719594172484074650698776\",\"clearSerialKey\":\"90970938077827684226\",\"locale\":\"ALL\",\"associatedLocales\":\"ALL\",\"platform\":0,\"isk\":1184999,\"customerId\":0,\"deliveryMethod\":3,\"pc\":false,\"rb\":false}}",
obj.mobileProfile.relationshipProfile = "[{\"profileGenerationTimestamp\":1651765366490,\"licenseId\":\"TEMP_LICENSE_PROD\",\"licenseExpiryTimestamp\":1651851743360,\"appEntitlementStatus\":\"SUBSCRIPTION\",\"activationType\":\"NAMED_USER\",\"billingStatus\":\"NORMAL\",\"usedForLegacyProfile\":true,\"licenseExpiryWarningControl\":{\"warningStartTimestamp\":1651246943360,\"warningInterval\":0}}]",
  
body = JSON.stringify(obj); 
$done(body); 
