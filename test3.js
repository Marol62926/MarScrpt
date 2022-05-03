var body = $response.body;
var obj = JSON.parse(body);

obj = {
  "ok": 1,
  "archive_info": {
    "ok": 1,
    "archive_limit": 100,
    "archive_reset_seconds": 86400,
    "download_limit": 100,
    "download_expire_seconds": 604800,
    "next_reset_epoch": 1651647600,
    "num_remaining": 98
  }
}

body = JSON.stringify(obj); 
$done(body); 
