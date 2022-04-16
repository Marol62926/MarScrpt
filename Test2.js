var body = $response.body; 
var obj = JSON.parse(body); 

obj = {
  "ret": "0",
  "errmsg": "success",
  "systime": "1650118135051",
  "response": "{\"flag\":true,\"start_time\":1650118095,\"end_time\":1650722926,\"is_first_subscribe\":false,\"is_cancel_subscribe\":false,\"uid\":\"1939975201371198\",\"subscribe_uid\":\"did3558456317451965\",\"subscribe_type\":\"auto\",\"authkey\":\"5f9c0a7e29dbe11fee3db2aa7175bfbe\",\"product_id\":\"beauty_china_subscription_year\",\"subscribe_cycle\":12,\"cycle_unit\":\"MONTH\"}",
  "sign": "IFgik92TH8qozGggWCuHUBnGabFybuiElX0VQv3Y/e0atEOQ/9F7t/ZYcHbzfBA9vf8owewwDIiS5b8ko2SyS57gpmDlfiAgQrLz5DtgrLOVDoT3QPyVSYMlQ2XAKqLsaW0XWKOBW+XbFxZhqXlT8MooQkQEpUo2ra8qZJc1U4s=",
  "data": {
    "flag": true,
    "start_time": 1650118095,
    "end_time": 1650722926,
    "is_first_subscribe": false,
    "is_cancel_subscribe": false,
    "uid": "1939975201371198",
    "subscribe_uid": "did3558456317451965",
    "subscribe_type": "auto",
    "authkey": "5f9c0a7e29dbe11fee3db2aa7175bfbe",
    "product_id": "beauty_china_subscription_year",
    "subscribe_cycle": 12,
    "cycle_unit": "MONTH"
  }
}

body = JSON.stringify(obj);
$done(body);

