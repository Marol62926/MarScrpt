var body = $response.body;
var obj = JSON.parse(body);

obj.digital_subscriptions = [{
    "billing_type": "apple_monthly",
    "cost_in_cents": 0,
    "country_code": "US",
    "currency_code": "USD",
    "expires_at": 1872318099,
    "id": "a5fab492f79c4989bb5e17da2f1b5820",
    "is_active": true,
    "name": "Peloton App Membership",
    "original_purchase_date": 1651394037,
    "owner": {
      "block_explicit": false,
      "block_prenatal": false,
      "disable_explicit_warning": false,
      "created_at": 1651393905,
      "id": "a07fbd74dcc44bd3989a98f6624ca45c",
      "image_url": "https://res.cloudinary.com/peloton-cycle/image/upload/l_default_user_images:chars:v,f_jpg/default_user_images/backgrounds/3",
      "is_effort_score_enabled": true,
      "is_profile_private": false,
      "is_provisional": false,
      "last_workout_at": null,
      "location": "ne",
      "total_followers": 0,
      "total_following": 0,
      "total_non_pedaling_metric_workouts": 0,
      "total_pedaling_metric_workouts": 0,
      "total_workouts": 0,
      "username": "",
      "workout_counts": [{}]
    },
    "shared_user_set": [],
    "status": "active_normal",
    "status_text": "Active",
    "stream_limit": 3,
    "total_active_streams": 0,
    "user_id": "a07fbd74dcc44bd3989a98f6624ca45c",
    "is_trial": false,
    "user": {
      "block_explicit": false,
      "block_prenatal": false,
      "disable_explicit_warning": false,
      "created_at": 1651393905,
      "id": "",
      "image_url": "https://res.cloudinary.com/peloton-cycle/image/upload/l_default_user_images:chars:v,f_jpg/default_user_images/backgrounds/3",
      "is_effort_score_enabled": true,
      "is_profile_private": false,
      "is_provisional": false,
      "last_workout_at": null,
      "location": "ne",
      "total_followers": 0,
      "total_following": 0,
      "total_non_pedaling_metric_workouts": 0,
      "total_pedaling_metric_workouts": 0,
      "total_workouts": 0,
      "username": "",
      "workout_counts": [{}]
    }
  }],


body = JSON.stringify(obj); 
$done(body); 
