var body = $response.body;
var obj = JSON.parse(body);

obj = {
  "status" : {
    "message" : "OK",
    "code" : 0
  },
  "result" : {
    "id" : 614490119,
    "resubscription_reason" : null,
    "membership_info" : {
      "status" : "trial",
      "resume_date" : null,
      "credit_cache_bust" : "de2f49c49b1668579591311e951bfcff",
      "bill_date" : 1654885689,
      "pays_additional_tax" : true,
      "has_pmp_access" : true,
      "end_date" : null,
      "bill_method" : "apple",
      "next_bill_price" : {
        "value" : 8.9900000000000002,
        "currency" : "USD"
      }
    },
    "is_referral_creditable" : false,
    "credit_next_accrual_date" : 1654885689,
    "is_paused" : false,
    "eligible_plans" : [

    ],
    "apple_user_id" : "001879.a66a3e9cb6c1428b893a0722bdaffaf5.1827",
    "subscription_promo_state" : "none",
    "referral_urls" : {
      "global" : "https://www.scribd.com/gi/a5unlz",
      "email" : "https://www.scribd.com/gie/a5unlz",
      "twitter" : "https://www.scribd.com/git/a5unlz",
      "facebook_status" : "https://www.scribd.com/gifbs/a5unlz",
      "facebook_friend" : "https://www.scribd.com/gifbf/a5unlz",
      "text" : "https://www.scribd.com/gitx/a5unlz"
    },
    "email" : "trvnnczgss@privaterelay.appleid.com",
    "convertible_plans" : [

    ],
    "reading_speed_wpm" : 0
  }
}


body = JSON.stringify(obj); 
$done(body); 
