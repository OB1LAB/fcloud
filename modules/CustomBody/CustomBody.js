"use client";
import React from "react";
import localFont from "next/font/local";

const elliotFont = localFont({ src: "../../public/fonts/elliot.woff2" });

export default function CustomBody({ children }) {
  return (
    <body className={elliotFont.className}>
      <main>{children}</main>
    </body>
  );
}
