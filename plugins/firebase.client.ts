import { initializeApp, getApps } from 'firebase/app'
import { getMessaging, onMessage, type Messaging } from 'firebase/messaging'

declare module '#app' {
  interface NuxtApp {
    $messaging: Messaging
  }
}

declare module 'vue' {
  interface ComponentCustomProperties {
    $messaging: Messaging
  }
}

export default defineNuxtPlugin(() => {
  const app = getApps()[0] ?? initializeApp({
    apiKey: "AIzaSyBa0nUo74uA2w6EMf5Y_iKzBiLwQZUdnJw",
    authDomain: "vue-notification-4a729.firebaseapp.com",
    projectId: "vue-notification-4a729",
    storageBucket: "vue-notification-4a729.appspot.com",
    messagingSenderId: "372119211975",
    appId: "1:372119211975:web:ed232e2519b9e99fd953e2",
    measurementId: "G-NFHCEVQGY5"
  })
  
  const messaging = getMessaging(app)
  
  onMessage(messaging, (payload) => {
    console.log(JSON.stringify(payload, null, 2))
  })
  
  return {
    provide: {
      messaging,
    }
  }
});
