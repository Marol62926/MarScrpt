var body = $response.body;
var obj = JSON.parse(body);

obj = {
  "meta": {
    "limit": 100,
    "next": null,
    "offset": 0,
    "previous": null,
    "total_count": 2
  },
  "objects": [{
    "appstore_inapp_id": "Bazaart_Premium_Monthly_v9",
    "auto_renew_status": true,
    "date_joined": "28 四月 2022",
    "device": ,
    "expiration": "2022-05-05T07:16:28+00:00",
    "google_token": null,
    "id": ,
    "is_active": true,
    "is_cancelled": false,
    "is_in_intro_offer_period": false,
    "is_trial_period": true,
    "is_valid": true,
    "notes": null,
    "original_transaction_id": "",
    "price": null,
    "purchase_date": "2022-04-28T07:16:29+00:00",
    "resource_uri": "/api/v5/purchase/2941970/",
    "store": 210,
    "user": null
  }, {
    "appstore_inapp_id": "co.bazaart.app",
    "auto_renew_status": false,
    "date_joined": "2022-04-28T05:39:07+00:00",
    "device": null,
    "expiration": null,
    "google_token": null,
    "id": 0,
    "is_active": true,
    "is_cancelled": false,
    "is_in_intro_offer_period": false,
    "is_trial_period": false,
    "is_valid": true,
    "notes": null,
    "original_transaction_id": null,
    "price": null,
    "purchase_date": "2022-04-28T05:39:07+00:00",
    "resource_uri": "/api/v5/purchase/0/",
    "store": null,
    "user": null
  }]
}


body = JSON.stringify(obj); 
$done(body); 
