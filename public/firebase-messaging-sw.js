// Import the firebase app / messaging packages
importScripts('https://www.gstatic.com/firebasejs/10.10.0/firebase-app-compat.js')
importScripts('https://www.gstatic.com/firebasejs/10.10.0/firebase-messaging-compat.js')

// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
const app = firebase.initializeApp({
  apiKey: "AIzaSyBa0nUo74uA2w6EMf5Y_iKzBiLwQZUdnJw",
  authDomain: "vue-notification-4a729.firebaseapp.com",
  projectId: "vue-notification-4a729",
  storageBucket: "vue-notification-4a729.appspot.com",
  messagingSenderId: "372119211975",
  appId: "1:372119211975:web:ed232e2519b9e99fd953e2",
  measurementId: "G-NFHCEVQGY5"
});

// Initialize messaging
const messaging = firebase.messaging()

// Listen to bg messages
messaging.onBackgroundMessage(payload => {
  console.log("Received a bg message: ", payload);


  const title = payload.notification.title

  // Show notification when message received
  self.registration.showNotification(title);
})