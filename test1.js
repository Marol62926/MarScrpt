var body = $response.body;
var obj = JSON.parse(body);

obj = {
  "status" : {
    "message" : "OK",
    "code" : 0
  },
  "result" : {
    "id" : 576620529,
    "state" : "trialing",
    "limited_validity" : null,
    "next_payment_due" : 1654885689,
    "last_paid_date" : null,
    "total_price" : {
      "value" : 8.9900000000000002,
      "currency" : "USD"
    },
    "created_at" : 1653676089,
    "can_be_canceled" : false,
    "description" : "Monthly recurring membership",
    "type" : "apple",
    "title" : "Month Pass",
    "purchase_valid_to" : null,
    "can_be_renewed" : false,
    "subscription" : true,
    "subscription_free_trial_days" : 14,
    "product_handle" : "com.scribd.premium.monthly.unlimited.14_day_trial",
    "subscription_duration" : "1.month"
  }
}
  
body = JSON.stringify(obj); 
$done(body); 
