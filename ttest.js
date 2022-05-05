var body = $response.body;
var obj = JSON.parse(body);

obj.mobileProfile.profileStatus = "PROFILE_AVAILABLE",
obj.mobileProfile.legacyProfile = "{\"licenseId\":\"TEMP_LICENSE_PROD\",\"licenseType\":3,\"licenseVersion\":\"1.0\",\"effectiveEndTimestamp\":1651847307970,\"graceTime\":0,\"licensedFeatures\":[],\"enigmaData\":{\"productId\":598,\"serialKey\":\"719594172484074650698776\",\"clearSerialKey\":\"90970938077827684226\",\"locale\":\"ALL\",\"associatedLocales\":\"ALL\",\"platform\":0,\"isk\":5984027,\"customerId\":0,\"deliveryMethod\":3,\"pc\":true,\"rb\":true}}",
obj.mobileProfile.relationshipProfile = "[{\"profileGenerationTimestamp\":1651760928176,\"licenseId\":\"TEMP_LICENSE_PROD\",\"licenseExpiryTimestamp\":1651847307970,\"appEntitlementStatus\":\"SUBSCRIPTION\",\"activationType\":\"NAMED_USER\",\"billingStatus\":\"NORMAL\",\"usedForLegacyProfile\":true,\"licenseExpiryWarningControl\":{\"warningStartTimestamp\":1651242507970,\"warningInterval\":0}}]",
  
body = JSON.stringify(obj); 
$done(body); 
