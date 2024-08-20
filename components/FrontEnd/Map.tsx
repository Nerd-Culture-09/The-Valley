// components/Map.tsx
import React from "react";

export function Map() {
  return (
    <div className="h-80 w-full">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.3433572213834!2d-122.419418!3d37.774929!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085806efb9e2e7f%3A0x5d0907c0c7c0747c!2sThe%20Valley%20Guest%20House!5e0!3m2!1sen!2sus!4v1612512351712!5m2!1sen!2sus"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
      ></iframe>
    </div>
  );
}
