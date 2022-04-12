

var body = $response.body; 
var obj = JSON.parse(body); 

obj ={
  "profile": {
    "end_of_premium": 1650350602,
    "_end_of_premium": "2022-04-19 06:43:22",
    "is_premium": true,
  },
  "error": null
}



body = JSON.stringify(obj);
$done(body);
