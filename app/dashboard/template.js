"use client";

import { useEffect } from "react";

export default function templete({ children }) {
  useEffect(() => {
    console.log("templete");
  }, []);

  return <div>{children}</div>;
}
