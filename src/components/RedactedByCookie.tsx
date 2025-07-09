import React, { useEffect, useState } from "react";

export default function HiddenByCookie({
  cookieName,
  cookieValue,
  children,
}: {
  cookieName: string;
  cookieValue?: string;
  children: React.ReactNode;
}) {
 const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    const found = document.cookie
      .split("; ")
      .find((row) => row.startsWith(cookieName + "="));
    const value = found?.split("=")[1];
    setShouldRender(cookieValue ? value === cookieValue : !!value);
  }, [cookieName, cookieValue]);

  return shouldRender ? <span className="redacted">{children}</span> : <>{children}</>;
}