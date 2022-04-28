var body = $response.body;
var obj = JSON.parse(body);

obj.items.subscription = {
        "subscriptionProviderIdentifer" : "plan_EtfoszqUYRUMWu",
        "paymentPortal" : "Stripe",
        "previousPaymentPortal" : "Stripe",
        "pendingSubscription" : null,
        "id" : 54853953,
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

body = JSON.stringify(obj); 
$done(body); 
