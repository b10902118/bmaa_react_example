"use client";
import { useEffect } from "react";

export default function DynamicCssLoader() {
  useEffect(() => {
    fetch("./merged.css")
      .then((res) => res.text())
      .then((css) => {
        try {
          const style = document.createElement("style");
          style.textContent = css;
          document.head.appendChild(style);
        } catch (e) {
          console.error("Failed to inject CSS:", e);
        }
      });
  }, []);

  return null;
}
