var obj = JSON.parse($response.body);

obj = {
  "request_date": "2022-07-02T18:57:05Z",
  "request_date_ms": 1656788225040,
  "subscriber": {
    "entitlements": {},
    "first_seen": "2022-07-02T18:54:54Z",
    "last_seen": "2022-07-02T18:54:54Z",
    "management_url": null,
    "non_subscriptions": {
      "premium.trial": [{
        "id": "5e2fbee24f",
        "is_sandbox": false,
        "original_purchase_date": "2022-07-02T18:56:34Z",
        "purchase_date": "2022-07-02T18:56:34Z",
        "store": "app_store"
      }]
    },
    "original_app_user_id": "$RCAnonymousID:28339e9c1b844bd987dae59ebf28f888",
    "original_application_version": "307",
    "original_purchase_date": "2022-07-02T18:40:40Z",
    "other_purchases": {
      "premium.trial": {
        "purchase_date": "2022-07-02T18:56:34Z"
      }
    },
    "subscriptions": {}
  }
}

$done({body: JSON.stringify(obj)});
