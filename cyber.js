var body = $response.body; // 声明一个变量body并以响应消息体赋值
var obj = JSON.parse(body); // JSON.parse()将json形式的body转变成对象处理

obj = {
  "partners_id" : 1,
  "activateddevices" : "1",
  "active" : 1,
  "language" : "EN",
  "subscription" : {
    "id" : 8346984,
    "enddate" : "2023-04-16 23:59:59",
    "startdate" : "2022-04-09 00:00:00",
    "days_left" : 364,
    "active" : 1,
    "product" : {
      "additional_runtime_first_interval" : 0,
      "cb_selectionid" : "",
      "plan" : {
        "features_ids" : [
          1,
          2,
          3,
          4,
          8,
          9,
          11,
          12,
          13,
          14,
          15,
          16,
          17,
          18,
          19,
          20
        ],
        "upgradable" : 0,
        "plan_type" : "paid",
        "id" : 57,
        "trialperiod_days" : 7,
        "promo" : 0,
        "internal_name" : "CyberGhost Premium 7 devices",
        "free" : 0,
        "max_devices" : 7,
        "features" : [
          {
            "id" : 1,
            "enabled" : 1,
            "internal_name" : "Ad-Blocker",
            "visible" : 1
          },
          {
            "id" : 2,
            "enabled" : 1,
            "internal_name" : "Anti-Malware",
            "visible" : 1
          },
          {
            "id" : 3,
            "enabled" : 1,
            "internal_name" : "Compressor",
            "visible" : 1
          },
          {
            "id" : 4,
            "enabled" : 1,
            "internal_name" : "Anti-Tracking",
            "visible" : 1
          },
          {
            "id" : 8,
            "enabled" : 1,
            "internal_name" : "HTTPSEverywhere",
            "visible" : 1
          },
          {
            "id" : 9,
            "enabled" : 1,
            "internal_name" : "Extra Speed",
            "visible" : 1
          },
          {
            "id" : 11,
            "enabled" : 1,
            "internal_name" : "PROFILE_WIFI",
            "visible" : 0
          },
          {
            "id" : 12,
            "enabled" : 1,
            "internal_name" : "PROFILE_STREAMING",
            "visible" : 0
          },
          {
            "id" : 13,
            "enabled" : 1,
            "internal_name" : "PROFILE_ANONYMOUS",
            "visible" : 0
          },
          {
            "id" : 14,
            "enabled" : 1,
            "internal_name" : "PROFLE_CENSOR",
            "visible" : 0
          },
          {
            "id" : 15,
            "enabled" : 1,
            "internal_name" : "PROFILE_COMPRESSION",
            "visible" : 0
          },
          {
            "id" : 16,
            "enabled" : 1,
            "internal_name" : "PROFILE_CUSTOM",
            "visible" : 0
          },
          {
            "id" : 17,
            "enabled" : 1,
            "internal_name" : "PROFILE_NETWORK",
            "visible" : 0
          },
          {
            "id" : 18,
            "enabled" : 1,
            "internal_name" : "PROFILE_DOWNLOAD",
            "visible" : 0
          },
          {
            "id" : 19,
            "enabled" : 1,
            "internal_name" : "PROFILE_ANONYMOUS_COUNTRYSELECTION",
            "visible" : 0
          },
          {
            "id" : 20,
            "enabled" : 1,
            "internal_name" : "Browser Protection",
            "visible" : 0
          }
        ]
      },
      "trialperiod_days" : 7,
      "apple_productid" : "yearly_recurring_49_99",
      "google_productid" : "",
      "internal_name" : "iOS Plan - Yearly Offer",
      "days" : 365,
      "displayname_localizations_id" : "244",
      "paddle_productid" : "",
      "vat_included" : true,
      "hasPaidTrial" : true,
      "displayname_localization" : {
        "strings" : {
          "ro" : "Abonament Anual",
          "es" : "Suscripción Anual",
          "tr" : null,
          "nb" : null,
          "fi" : null,
          "sv" : null,
          "cz" : null,
          "vn" : null,
          "fr" : "Souscription Annuelle",
          "hu" : null,
          "en" : "Yearly Subscription",
          "it" : "Abbonamento Annuale",
          "ar" : null,
          "ko" : null,
          "zn" : null,
          "no" : null,
          "gr" : null,
          "ru" : "Годовая подписка",
          "dk" : null,
          "in" : null,
          "pt" : null,
          "pl" : "Abonament Roczny",
          "kr" : null,
          "de" : "Jährliches Abo"
        },
        "default_string" : "Yearly Subscription",
        "languages" : [
          "en",
          "de",
          "fr",
          "it",
          "es",
          "pl",
          "ro",
          "ru",
          "pt",
          "kr",
          "tr",
          "ko",
          "kr",
          "sv",
          "zn",
          "no",
          "nb",
          "dk",
          "fi",
          "cz",
          "gr",
          "hu",
          "in",
          "vn",
          "nb",
          "ar"
        ]
      },
      "shouldChargeForCleverbridge" : 0,
      "type" : 0,
      "recurring" : 1,
      "id" : 40179,
      "plans_id" : 57,
      "enabled" : 1,
      "months" : 12,
      "cb_productid" : "",
      "visible" : 0,
      "receive_additional_runtime_for_upgrade" : true,
      "prices" : {
        "KRW" : 59000,
        "TRY" : 339.99000000000001,
        "EUR" : 44.990000000000002,
        "GBP" : 44.990000000000002,
        "INR" : 3799,
        "RUB" : 3890,
        "BRL" : 199.90000000000001,
        "JPY" : 4900,
        "PLN" : 244.99000000000001,
        "CHF" : 45,
        "AUD" : 79.989999999999995,
        "USD" : 49.990000000000002,
        "CAD" : 64.989999999999995
      }
    },
    "type" : "1",
    "apple_subscriptions_id" : "190001261949471",
    "last_billing" : {
      "id" : 48783225,
      "enddate" : "2022-04-16 23:59:59",
      "startdate" : "2022-04-09 00:00:00",
      "days_left" : 7,
      "inapp_transaction_id" : "190000546127209",
      "active" : 1,
      "product" : {
        "additional_runtime_first_interval" : 0,
        "cb_selectionid" : "",
        "plan" : {
          "upgradable" : 0,
          "id" : 57,
          "trialperiod_days" : 7,
          "promo" : 0,
          "internal_name" : "CyberGhost Premium 7 devices",
          "free" : 0,
          "max_devices" : 7,
          "plan_type" : "paid"
        },
        "trialperiod_days" : 7,
        "apple_productid" : "yearly_recurring_49_99",
        "google_productid" : "",
        "internal_name" : "iOS Plan - Yearly Offer",
        "days" : 0,
        "displayname_localizations_id" : "244",
        "paddle_productid" : "",
        "vat_included" : true,
        "hasPaidTrial" : true,
        "displayname_localization" : {
          "strings" : {
            "ro" : "Abonament Anual",
            "es" : "Suscripción Anual",
            "tr" : null,
            "nb" : null,
            "fi" : null,
            "sv" : null,
            "cz" : null,
            "vn" : null,
            "fr" : "Souscription Annuelle",
            "hu" : null,
            "en" : "Yearly Subscription",
            "it" : "Abbonamento Annuale",
            "ar" : null,
            "ko" : null,
            "zn" : null,
            "no" : null,
            "gr" : null,
            "ru" : "Годовая подписка",
            "dk" : null,
            "in" : null,
            "pt" : null,
            "pl" : "Abonament Roczny",
            "kr" : null,
            "de" : "Jährliches Abo"
          },
          "default_string" : "Yearly Subscription",
          "languages" : [
            "en",
            "de",
            "fr",
            "it",
            "es",
            "pl",
            "ro",
            "ru",
            "pt",
            "kr",
            "tr",
            "ko",
            "kr",
            "sv",
            "zn",
            "no",
            "nb",
            "dk",
            "fi",
            "cz",
            "gr",
            "hu",
            "in",
            "vn",
            "nb",
            "ar"
          ]
        },
        "shouldChargeForCleverbridge" : 0,
        "type" : 0,
        "recurring" : 1,
        "id" : 40179,
        "plans_id" : 57,
        "enabled" : 1,
        "months" : 12,
        "cb_productid" : "",
        "visible" : 0,
        "receive_additional_runtime_for_upgrade" : true,
        "prices" : {
          "KRW" : 59000,
          "TRY" : 339.99000000000001,
          "EUR" : 44.990000000000002,
          "GBP" : 44.990000000000002,
          "INR" : 3799,
          "RUB" : 3890,
          "BRL" : 199.90000000000001,
          "JPY" : 4900,
          "PLN" : 244.99000000000001,
          "CHF" : 45,
          "AUD" : 79.989999999999995,
          "USD" : 49.990000000000002,
          "CAD" : 64.989999999999995
        }
      },
      "payment_status" : "1",
      "subscriptions_id" : "8346984",
      "last_update" : "2022-04-09 10:43:21",
      "gracePeriodUntil" : "2022-04-20 23:59:59",
      "products_id" : "40179"
    },
    "payment_status" : "0",
    "last_update" : "2022-04-09 10:43:21",
    "created" : "2022-04-09 10:43:21",
  },
  "requiresPasswordChange" : false,
  "region" : "US",
  "creationdate" : "2022-04-09 10:43:21",
  "waspremium" : 0,
  "autocreated" : 0,
  "tokenObj" : {
    "features_ids" : [

    ]
  },
};

body = JSON.stringify(obj); // 重新打包回json字符串
$done(body); // 结束修改
