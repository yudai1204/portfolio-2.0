import { useEffect, useState } from "react";

export const useIsSafari = () => {
  const [isSafari, setIsSafari] = useState(false);
  useEffect(() => {
    const UA = navigator.userAgent.toLowerCase();
    setIsSafari(UA.includes("safari") && !UA.includes("chrome"));
  }, []);
  return isSafari;
};
