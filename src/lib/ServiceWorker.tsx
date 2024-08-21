"use client";

import React, { useEffect } from "react";

const ServiceWorker = ({ children }: { children?: React.ReactNode }) => {
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker
        .register("/firebase-messaging-sw.js")
        .then(function (registration) {
          console.log(
            "Service Worker registered with scope:",
            registration.scope
          );
        })
        .catch(function (err) {
          console.error("Service Worker registration failed:", err);
        });
    }
  }, []);

  return <div>{children}</div>;
};

export default ServiceWorker;
