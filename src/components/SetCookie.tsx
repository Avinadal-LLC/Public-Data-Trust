export default function SetCookie({cookieName, cookieValue, days = 7}: {cookieName: string; cookieValue: string; days?: number;}) {
    const found = document.cookie
    .split("; ")
    .find((row) => row.startsWith(cookieName + "="));
    if (!found)
      {  
        const expires = new Date(Date.now() + days * 864e5).toUTCString();
        document.cookie = cookieName + '=' + encodeURIComponent(cookieValue) + '; expires=' + expires + '; path=/';
      };
  return null;
}