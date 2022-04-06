var body = $response.body;
var obj = JSON.parse(body); 

var obj = {
  "firstName" : "Marol",
  "creationDate" : "2022-04-06T12:11:05.000+00:00",
  "isPhiProtected" : false,
  "hsId" : "HSUSER_XWR1ZZZ0K2KG941Q4",
  "email" : "fukr81@163.com",
  "countryCode" : "US",
  "connections" : [
   
  ],
  "privileges" : [
    "STANDARD_CONTENT",
    "SUBSCRIBER",
    "V1_CONTENT"
  ],
  "stateCode" : null,
  "lastName" : "Lee"
};

body = JSON.stringify(obj);
$done({body});
