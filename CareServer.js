var body = $response.body;
var obj = JSON.parse(body);

obj.subscriber = {
    "non_subscriptions" : {

    },
    "first_seen" : "2024-06-25T14:02:35Z",
    "original_application_version" : "1.0",
    "other_purchases" : {

    },
    "management_url" : "https://apps.apple.com/account/subscriptions",
    "subscriptions" : {
      "ShellBoxKit.Lifetime" : {
        "original_purchase_date" : "2024-06-25T14:41:51Z",
        "expires_date" : "2024-07-09T14:41:50Z",
        "is_sandbox" : false,
        "refunded_at" : null,
        "store_transaction_id" : "480001974440080",
        "unsubscribe_detected_at" : "2024-06-25T14:42:40Z",
        "grace_period_expires_date" : null,
        "period_type" : "trial",
        "purchase_date" : "2024-06-25T14:41:50Z",
        "billing_issues_detected_at" : null,
        "ownership_type" : "PURCHASED",
        "store" : "app_store",
        "auto_resume_date" : null
      }
    },
    "entitlements" : {
      "ssh_pro" : {
        "grace_period_expires_date" : null,
        "purchase_date" : "2024-06-25T14:41:50Z",
        "product_identifier" : "ShellBoxKit.Lifetime",
        "expires_date" : "2024-07-09T14:41:50Z"
      }
    },
    "original_purchase_date" : "2013-08-01T07:00:00Z",
    "original_app_user_id" : "$RCAnonymousID:81af15d1c080425fadefaf2a1625cfa3",
    "last_seen" : "2024-06-25T14:41:11Z"
  }
      
body = JSON.stringify(obj);
$done({body});
