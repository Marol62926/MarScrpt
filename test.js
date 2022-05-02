var body = $response.body;
var obj = JSON.parse(body);

obj.response.patron_info = {
      "patron_subscription_status": 1,
      "patron_subscription_expires_at": "2029-05-16T11:17:15Z",
      "patron_subscription_platform": "ios",
      "patron_subscription_created_at": "2022-05-02T11:17:29Z",
      "patron_subscription_ios_free_trial_used": false,
      "patron_subscription_android_free_trial_used": false,
      "patron_subscription_stripe_free_trial_used": false,
      "patron_subscription_cancelled_at_period_end": false
    },

body = JSON.stringify(obj); 
$done(body); 
