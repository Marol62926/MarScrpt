var body = $response.body;
var obj = JSON.parse(body);

obj.result.memberType = 12,
obj.result.StartTime = "2022-04-23 16:20:35",
obj.result.EndTime = "2029-04-23 16:20:35",
obj.result.isSuperVip = 3,
obj.result.superStartTime = "2022-04-23 16:20:35",
obj.result.superEndTime = "2029-04-23 16:20:35",
obj.result.oldSuperStartTime = "2022-04-23 16:20:35",
obj.result.oldSuperEndTime = "2029-04-23 16:20:35",
obj.result.pro_center_data = {
      "pro_type": 2,
      "pro_type_title": "金星會員",
      "pro_service_title": "",
      "pro_start_date": "",
      "pro_end_date": "2029-04-30",
      "day_left": "",
      "is_pro_center_red_dot": 0
    },
  

body = JSON.stringify(obj); 
$done(body); 
