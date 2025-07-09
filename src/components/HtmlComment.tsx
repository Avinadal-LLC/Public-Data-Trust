import React from "react";

export default function HtmlComment({ children }: { children: React.ReactNode }) {
  // Convert children to string
  const comment = Array.isArray(children)
    ? children.join("")
    : children?.toString() ?? "";

  return (
    <span className="pdtThisPlaceSucks">{comment}</span>
  );
}