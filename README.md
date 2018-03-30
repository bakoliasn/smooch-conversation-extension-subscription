## Explanation

  This service listens for appUser messages from Smooch and responds with a button triggering a webview. The webview acts as a multi-page form, which when submitted makes a call to the backend of this service containing the data submitted by the user. The backend then calls Smooch to echo the selection into the conversation as an appUser message.


## Service Subscription
![Service Subscription Preview](https://smooch.io/static_assets/images/shared/service-subscription-preview.jpg)

## Prerequisites

  These examples are built with node.js and npm.

## SETUP

  1. run `git clone this_repo`
  2. run `npm install`
  3. expose the port you're running this service on to the web (e.g. using a service like ngrok.io)
  4. create a .env file with the credentials necessary to run this service using the .env.example as a guide
  5. run `npm start` to run the server
  6. configure a webhook for All basic triggers at 'https://app.smooch.io/apps/APP_ID/webhooks' to point towards the ngrok/other link exposing the port being used at the route '/api/webhooks'

## Try it out!

  1. open your browser to localhost:8000 or whichever port you specified in the .env file
  2. click the "Add Messenger" button
  3. check out the intents.json file to see what text can be used to trigger a conversation-extension button

To learn more about conversation extensions see the [Guide](https://docs.smooch.io/guide/conversation-extensions/), where you can also follow along with an example written in React.
