// create custom hooks
import React, { useState, useCallback, useEffect } from "react";
export default function useCopyToClipboard() {
  const [isCopied, setIsCopied] = useState(false);

  const copy = useCallback((text) => {
    if (typeof text !== "string") {
      return;
    }
    navigator.clipboard // promise becouse me using then
      .writeText(text)
      .then(() => {
        // if const == true and this realy text
        setIsCopied(true);
      })
      .catch((err) => {
        // if const != true and this fake text
        console.error("Unable to copy text: ", err);
      });
  }, []);

  useEffect(() => {
    if (isCopied) {
      const timer = setTimeout(() => {
        setIsCopied(false);
      }, 3000);
      return () => {
        clearTimeout(timer);
      };
    }
  }, [isCopied]);

  return { isCopied, copy };
}
