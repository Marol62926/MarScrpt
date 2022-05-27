var body = $response.body;
var obj = JSON.parse(body);

obj.result.membership_info = {
      "status" : "trial",
      "resume_date" : null,
      "credit_cache_bust" : "de2f49c49b1668579591311e951bfcff",
      "bill_date" : 1654885689,
      "pays_additional_tax" : true,
      "has_pmp_access" : true,
      "end_date" : null,
      "bill_method" : "apple",
      "next_bill_price" : {
        "value" : 8.9900000000000002,
        "currency" : "USD"
      }
    },

body = JSON.stringify(obj); 
$done(body); 
