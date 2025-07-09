import { useEffect } from "react";

export default function SetCookie({
  cookieName,
  cookieValue,
  days = 7,
}: {
  cookieName: string;
  cookieValue: string;
  days?: number;
}) {
  useEffect(() => {
    const expires = new Date(Date.now() + days * 864e5).toUTCString();
    document.cookie =
      cookieName +
      "=" +
      encodeURIComponent(cookieValue) +
      "; expires=" +
      expires +
      "; path=/";
  }, [cookieName, cookieValue, days]);
  return null;
}