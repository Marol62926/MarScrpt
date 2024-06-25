var body = $response.body;
var obj = JSON.parse(body);

obj.subscriber.entitlements = {
      "ssh_pro" : {
        "grace_period_expires_date" : null,
        "purchase_date" : "2024-04-25T14:41:50Z",
        "product_identifier" : "ShellBoxKit.Year",
        "expires_date" : "2034-07-09T14:41:50Z"
      }
    },
  
obj.subscriber.subscriptions = {
      "ShellBoxKit.Year" : {
        "original_purchase_date" : "2024-05-25T14:41:51Z",
        "expires_date" : "2034-07-09T14:41:50Z",
        "is_sandbox" : false,
        "refunded_at" : null,
        "store_transaction_id" : "480001974440210",
        "unsubscribe_detected_at" : "2024-04-25T14:42:40Z",
        "grace_period_expires_date" : null,
        "period_type" : "normal",
        "purchase_date" : "2024-04-25T14:41:50Z",
        "billing_issues_detected_at" : null,
        "ownership_type" : "PURCHASED",
        "store" : "app_store",
        "auto_resume_date" : null
      }
    },

body = JSON.stringify(obj);
$done({body});
