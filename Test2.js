var body = $response.body;
var obj = JSON.parse(body);

obj.mobileProfile.profileStatus = "PROFILE_AVAILABLE",
obj.mobileProfile.legacyProfile = "{\"licenseId\":\"\",\"licenseType\":3,\"licenseVersion\":\"1.0\",\"effectiveEndTimestamp\":1652597999000,\"graceTime\":8553600000,\"licensedFeatures\":[],\"enigmaData\":{\"productId\":598,\"serialKey\":\"\",\"clearSerialKey\":\"\",\"locale\":\"ALL\",\"associatedLocales\":\"ALL\",\"platform\":0,\"isk\":5984027,\"customerId\":0,\"deliveryMethod\":3,\"pc\":true,\"rb\":true}}",
obj.mobileProfile.relationshipProfile = "[{\"profileGenerationTimestamp\":1651745145759,\"licenseId\":\"\",\"licenseExpiryTimestamp\":1661151599000,\"appEntitlementStatus\":\"SUBSCRIPTION\",\"activationType\":\"NAMED_USER\",\"billingStatus\":\"NORMAL\",\"usedForLegacyProfile\":true,\"licenseExpiryWarningControl\":{\"warningStartTimestamp\":1660546799000,\"warningInterval\":0}}]",
obj.mobileProfile.appLicenseMode": "PREMIUM",
  
body = JSON.stringify(obj); 
$done(body); 
