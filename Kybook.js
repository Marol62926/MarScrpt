var body = $response.body;
var obj = JSON.parse(body);

status : "true",
subscription:[
  {expires: 1661973290000, skid: "yar.premium.yearly", purchased: 1630437290000}
];

body = JSON.stringify(obj);
$done({body});
