var body = $response.body;
var obj = JSON.parse(body);

obj.mobileProfile.profileStatus = "PROFILE_AVAILABLE",
obj.mobileProfile.legacyProfile = "{\"licenseId\":\"B93D68DC4A03CDE0B90A\",\"licenseType\":3,\"licenseVersion\":\"1.0\",\"effectiveEndTimestamp\":1652597999000,\"graceTime\":8553600000,\"licensedFeatures\":[],\"enigmaData\":{\"productId\":598,\"serialKey\":\"909707769301275563002882\",\"clearSerialKey\":\"15984055698707407487\",\"locale\":\"ALL\",\"associatedLocales\":\"ALL\",\"platform\":0,\"isk\":5984027,\"customerId\":0,\"deliveryMethod\":3,\"pc\":true,\"rb\":true}}",
obj.mobileProfile.relationshipProfile = "[{\"profileGenerationTimestamp\":1651750147083,\"licenseId\":\"B93D68DC4A03CDE0B90A\",\"licenseExpiryTimestamp\":1661151599000,\"appEntitlementStatus\":\"SUBSCRIPTION\",\"activationType\":\"NAMED_USER\",\"billingStatus\":\"NORMAL\",\"usedForLegacyProfile\":true,\"licenseExpiryWarningControl\":{\"warningStartTimestamp\":1660546799000,\"warningInterval\":0}}]",
  
body = JSON.stringify(obj); 
$done(body); 
