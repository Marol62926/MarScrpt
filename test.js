var body = $response.body;
var obj = JSON.parse(body);

obj = {
  "items" : [
    {
      "location" : "us",
      "locked" : false,
      "apps" : {
        "dashboard" : {
          "options" : {

          }
        }
      },
      "active" : true,
      "lastLogin" : "04-28-2022 06:39:18",
      "subscription" : {
        "subscriptionProviderIdentifer" : "plan_EtfoszqUYRUMWu",
        "paymentPortal" : "Stripe",
        "previousPaymentPortal" : "Stripe",
        "pendingSubscription" : null,
        "id" : ,
        "subscriptionRegion" : "US",
        "isTrialEligible" : false,
        "isTrialPeriod" : false,
        "subscriberSinceDate" : "2021-10-24T18:05:00Z",
        "planId" : "plan_EtfoszqUYRUMWu",
        "paypalSubscriptionId" : null,
        "subscriptionProduct" : {
          "createdDatetime" : "2019-04-16T14:38:48.941478Z",
          "id" : 2,
          "mostPopular" : false,
          "title" : "Premium",
          "modifiedDatetime" : "2021-04-26T18:46:14.283854Z",
          "tier" : 30,
          "description" : "Subscription Premium",
          "features" : [
            {
              "id" : 1,
              "regions" : [
                "all_terr"
              ],
              "title" : "Ad-free access to entire Funimation library",
              "description" : "{\"web\": \"Ad-free access to entire Funimation library when and where available\",\"firetv\": \"Ad-Free access to entire Funimation library when and where available\",\"xbox one\":\"Ad-Free access to entire Funimation library when and where available\",\"roku\":\"Ad-Free access to entire Funimation library when and where available\"}"
            },
            {
              "id" : 2,
              "regions" : [
                "all_terr"
              ],
              "title" : "Subs and Dubs",
              "description" : "Access to both Subbed and Dubbed content"
            },
            {
              "id" : 3,
              "regions" : [
                "all_terr"
              ],
              "value" : "2",
              "description" : "Stream on 2 screens at the same time",
              "title" : "Simultaneous Streams"
            }
          ],
          "streamLimit" : 2
        },
        "customerId" : "cus_KT7IlhuqX7BJiO",
        "lastSuccessfulBillingDate" : "2021-11-07",
        "expireDate" : null,
        "subscriptionId" : "339",
        "trialStartDate" : "2021-10-24T18:05:00Z",
        "subscriptionFeFrequency" : "annual",
        "cancellationRequestedDate" : null,
        "lastPlanId" : 339,
        "stripeSubscriptionId" : "sub_1JoB44CyHzXoTOHE3dhRpj0z",
        "subscriptionProductTitle" : "Premium",
        "trialPeriodEnd" : "2021-11-07T18:04:56Z",
        "paypalCustomerId" : null,
        "status" : "Active",
        "active" : true,
        "subscriptionPrice" : "59.99",
        "plan" : "Premium",
        "pendingSubscriptionTitle" : null,
        "subscriptionFrequency" : "annual",
        "expireDateZ" : null,
        "failedRetryAttempts" : 0,
        "renewDateZ" : "2029-11-07T18:04:56Z",
        "pendingSubscriptionFeFrequency" : null,
        "renewDate" : "2029-11-07 @ 18:04:56",
        "taxPercent" : "0",
        "stripeCustomerId" : "cus_KT7IlhuqX7BJiO",
        "subscriptionTierPlanId" : "339",
        "subscriptionTier" : 30,
        "purchaseDate" : "2021-10-24 @ 18:05:00",
        "title" : "Premium",
        "purchaseDateZ" : "2021-10-24T18:05:00Z",
        "subscriptionRegionPrice" : null,
        "subscriptionDescription" : "US_Premium_Annual"
      },
      "addons" : [

      ],
      "lastLoginLocal" : "2022-04-28 06:39:18 UTC +0000",
      "displayName" : "62926",
      "notifications" : {

      },
      "background" : null,
      "defaultLanguage" : "en",
      "entitlements" : [

      ],
      "verified" : true,
      "adminAccess" : false,
      "id" : 50466641,
      "state" : "active",
      "email" : "62926@62926.com",
      "groups" : {
        "role" : {
          "exclusive" : true,
          "id" : 4,
          "key" : "role",
          "name" : "Consumers"
        },
        "groups" : [

        ]
      },
      "userPreferences" : {
        "showUserState" : "1",
        "showConnection" : "1"
      },
      "cards" : [

      ],
      "firstName" : "",
      "profileData" : {
        "qualityPreference" : "auto",
        "region" : "US",
        "enableSubtitles" : "true",
        "isTrialPeriod" : "false",
        "paymentPortal" : "Stripe",
        "restrictMatureContent" : "false",
        "autoPlay" : "true",
        "lastPasswordUpdate" : "1644609562",
        "audioPreference" : "japanese"
      },
      "avatar" : "https://derf9v1xhwwx1.cloudfront.net/image/upload/q_60/cste/64dc3a8e-e63e-403d-b5a6-1708a70e65af.jpeg",
      "lastName" : "",
      "thirdPartyCookies" : [

      ],
      "dateJoined" : "10-24-2021 18:01:02"
    }
  ]
}

body = JSON.stringify(obj); 
$done(body); 
