"use client";

import React, { useEffect, useState } from "react";

const ServiceWorker = ({ children }: { children?: React.ReactNode }) => {
  const [isRegistered, setIsRegistered] = useState(false);

  useEffect(() => {
    if (!isRegistered && "serviceWorker" in navigator) {
      navigator.serviceWorker
        .getRegistration("/firebase-messaging-sw.js")
        .then((registration) => {
          if (!registration) {
            navigator.serviceWorker
              .register("/firebase-messaging-sw.js")
              .then(function (registration) {
                console.log(
                  "Service Worker registered with scope:",
                  registration.scope
                );
                setIsRegistered(true); // Mark as registered
              })
              .catch(function (err) {
                console.error("Service Worker registration failed:", err);
              });
          } else {
            console.log("Service Worker already registered:", registration);
            setIsRegistered(true); // Mark as already registered
          }
        });
    }
  }, [isRegistered]); // Depend on isRegistered to ensure it only runs once

  return <>{children}</>;
};

export default ServiceWorker;
