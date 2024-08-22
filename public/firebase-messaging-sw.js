importScripts("https://www.gstatic.com/firebasejs/8.8.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.8.0/firebase-messaging.js");

const firebaseConfig = {
  apiKey: "AIzaSyATtG9OYEXUFyiu0IuXNKsF_VkOrO2ucsk",
  authDomain: "aaron-portfolio-96729.firebaseapp.com",
  projectId: "aaron-portfolio-96729",
  storageBucket: "aaron-portfolio-96729.appspot.com",
  messagingSenderId: "558703618419",
  appId: "1:558703618419:web:b91ea1028c5fab3a6f3d06",
  measurementId: "G-ZVTJFKQQ0L",
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  // Only show a notification if the app is not in focus
  if (
    !self.clients
      .matchAll({ type: "window", includeUncontrolled: true })
      .then((clients) => clients.some((client) => client.focused))
  ) {
    const notificationTitle =
      payload.data?.title || "New message from your website";
    const notificationOptions = {
      body: payload.data?.body || "Check your email for the details",
      icon: "./logo.png",
    };

    self.registration.showNotification(notificationTitle, notificationOptions);
  }
});
