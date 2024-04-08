importScripts('https://www.gstatic.com/firebasejs/10.10.0/firebase-app-compat.js')
importScripts('https://www.gstatic.com/firebasejs/10..0/firebase-messaging-compat.js')

const app = firebase.initializeApp({
  apiKey: "AIzaSyBa0nUo74uA2w6EMf5Y_iKzBiLwQZUdnJw",
  authDomain: "vue-notification-4a729.firebaseapp.com",
  projectId: "vue-notification-4a729",
  storageBucket: "vue-notification-4a729.appspot.com",
  messagingSenderId: "372119211975",
  appId: "1:372119211975:web:ed232e2519b9e99fd953e2",
  measurementId: "G-NFHCEVQGY5"
});

const messaging = firebase.messaging()

messaging.onBackgroundMessage(payload => {
  const title = payload.notification.title
  const notification = {
    body: payload.notification.body,
    image: payload.notification.image,
  }

  self.registration.showNotification(title, notification);
})