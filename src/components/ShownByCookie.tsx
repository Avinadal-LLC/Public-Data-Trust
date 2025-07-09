import React from "react";

export default function ShownByCookie({
  cookieName,
  cookieValue,
  children,
}: {
  cookieName: string;
  cookieValue?: string;
  children: React.ReactNode;
}) {
  const found = document.cookie
    .split("; ")
    .find((row) => row.startsWith(cookieName + "="));
  const value = found?.split("=")[1];

  // If cookieValue is provided, check for exact match; otherwise, just check existence
  const shouldRender = cookieValue ? value === cookieValue : !!value;

  return shouldRender ? <>{children}</> : null;
}