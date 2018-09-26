'use strict'
import { Config } from "@common";
const stripe_url = 'https://api.stripe.com/v1/'
const secret_key = 'pk_live_ac1yc371g7RSz4BmFsnfkXPI'

class SiteAPI {
  addPayment(paymentDetails, callback) {

    var cardDetails = {
      "card[number]": paymentDetails.number,
      "card[exp_month]": paymentDetails.exp_month,
      "card[exp_year]": paymentDetails.exp_year,
      "card[cvc]": paymentDetails.cvc
    };

    var formBody = [];
    for (var property in cardDetails) {
      var encodedKey = encodeURIComponent(property);
      var encodedValue = encodeURIComponent(cardDetails[property]);
      formBody.push(encodedKey + "=" + encodedValue);
    }
    formBody = formBody.join("&");

    return fetch(stripe_url + 'tokens', {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'Bearer ' + secret_key
      },
      body: formBody
    })
      .then((response) => {
        if (response.status === 200 || response.status === 201) {
          return response.json()
        } else {
          return response.json().then(Promise.reject.bind(Promise));
        }
      })
      .then((json) => {
        callback(true, json, null);
      })
      .catch(error => callback(false, null, error));

  };
  getDirections(placeDetails, callback) {
    return fetch(`https://maps.googleapis.com/maps/api/directions/json?origin=${placeDetails.pickLocation}&destination=${placeDetails.dropLocation}&mode=${'Driving'}&key=${Config.apiKey}`)
      .then((response) => {
        // console.log(response.json())
        if (response.status === 200 || response.status === 201) {
          return response.json()
        } else {
          return response.json().then(Promise.reject.bind(Promise));
        }
      })
      .then((json) => {
        callback(true, json, null);
      })
      .catch(error => callback(false, null, error));

  };

}
export default new SiteAPI();