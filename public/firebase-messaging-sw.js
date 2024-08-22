// Disable ESLint warnings for global variables
// eslint-disable-next-line no-undef
importScripts("https://www.gstatic.com/firebasejs/8.8.0/firebase-app.js");
// eslint-disable-next-line no-undef
importScripts("https://www.gstatic.com/firebasejs/8.8.0/firebase-messaging.js");

// Firebase configuration object
const firebaseConfig = {
  apiKey: "AIzaSyATtG9OYEXUFyiu0IuXNKsF_VkOrO2ucsk",
  authDomain: "aaron-portfolio-96729.firebaseapp.com",
  projectId: "aaron-portfolio-96729",
  storageBucket: "aaron-portfolio-96729.appspot.com",
  messagingSenderId: "558703618419",
  appId: "1:558703618419:web:b91ea1028c5fab3a6f3d06",
  measurementId: "G-ZVTJFKQQ0L",
};

// Initialize Firebase in the service worker
// eslint-disable-next-line no-undef
firebase.initializeApp(firebaseConfig);

// Get an instance of Firebase Messaging
// eslint-disable-next-line no-undef
const messaging = firebase.messaging();

// Handle background messages
messaging.onBackgroundMessage((payload) => {
  console.log(
    "[firebase-messaging-sw.js] Received background message ",
    payload
  );
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: "./logo.png",
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
