var body = $response.body;
var obj = JSON.parse(body);

obj = {
  "user_id": 17922985,
  "subscription_id": 2323657,
  "is_active": true,
  "is_lifetime": false,
  "expires_at": "2022-05-09 16:52:39",
  "extra_days": 0,
  "promo_codes": {
    "active_promo_codes": [],
    "used_promo_codes": []
  },
  "active_package": {
    "package_id": 3467494,
    "status": "in-use",
    "plan": {
      "name": "Yearly",
      "description": "New Yearly Plan with 14-day Free Trial - (IOS) - (Tests on FT prices)",
      "published": true,
      "plan_id": 1005,
      "duration_months": 1,
      "is_lifetime": false,
      "weight": 12,
      "gateway_identifiers": [{
        "id": "com.omgicanmeditate.yearly5",
        "gateway_name": "itunes",
        "current": true
      }],
      "featured": false,
      "auto_renew": true,
      "discriminator_type": "Plan"
    },
    "gift_plan": null,
    "plan_name": "Yearly",
    "price": null,
    "promo_code": null,
    "promo_code_title": null,
    "billing_platform": "itunes",
    "is_paying_platform": true,
    "expires_at": "2022-05-09 16:52:39",
    "renewal_date": "2022-05-09 16:52:39",
    "is_lifetime": false,
    "is_in_free_trial_period": true,
    "is_auto_renewable": true,
    "is_auto_renew_stopped": false,
    "recurring_payment_can_be_stop": false
  },
  "on_hold_packages": [],
  "cancelled_packages": []
}

body = JSON.stringify(obj); 
$done(body); 
