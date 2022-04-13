var body = $response.body; 
var obj = JSON.parse(body); 

obj = {
  "subscription_apple" : {
    "subscription_exp" : 1650095874,
    "product_id" : "yt"
  },
  "subscription_google" : null,
  "user_token" : "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJkZXZpY2VfaWQiOiI4OTI4Njc1OS0yQkM5LTRBMDEtQkMwQi1DQzUwQzQxOTY2QTkiLCJleHAiOjE2NDk5MjMyOTcsInN1YnNjcmlwdGlvbiI6eyJzdWJzY3JpcHRpb25fZXhwIjoxNjUwMDk1ODc0LCJjdXN0b21lcl9pZCI6ImlzNjYyNjU1NCIsImluX2FwcF9pZCI6InByb195ZWFyX3Byb21vX2FwcHN0b3JlIiwicHJvZHVjdF9pZCI6Inl0In19.YeDhZFIfFxcIzH-WyqFTpES02XLbLO6r_YYVQFAFBMBvUpZkniwdjp620MC9o_LR6I1-C4gdt-h8Y1A0S6CIOQ",
  "user_token_lifetime" : 86400,
  "user" : null
}

body = JSON.stringify(obj);
$done(body);

