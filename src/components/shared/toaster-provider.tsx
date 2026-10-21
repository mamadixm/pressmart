"use client";

import { Toaster as SonnerToaster } from "sonner";
import "sonner/dist/styles.css";

export function ToasterProvider() {
  return (
    <SonnerToaster
      position="bottom-left"
      richColors
      closeButton
      dir="rtl"
      theme="light"
      toastOptions={{
        style: {
          fontFamily: "var(--font-vazir)",
        },
      }}
    />
  );
}