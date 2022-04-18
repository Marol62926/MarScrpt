var body = $response.body;
var obj = JSON.parse(body);

obj = {
  "errno": 0,
  "request_id": 3778874984,
  "vip_type": "svip",
  "has_privilege": "1",
  "current_valid_end_time": 1681790452,
  "next_valid_start_time": 0,
  "total_obtain_times": 0,
  "detail": [{
    "type": 1,
    "total_times": 3,
    "valid_times": 3
  }, {
    "type": 2,
    "total_times": 5,
    "valid_times": 5
  }],
  "has_obtain_times": "0",
  "current_valid_times": 3
}

body = JSON.stringify(obj); 
$done(body); 
