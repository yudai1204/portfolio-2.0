import { useEffect, useState } from "react";

export const useSvhSupport = () => {
  const [isSupport, setIsSupport] = useState(true);

  useEffect(() => {
    const result = CSS.supports("height", "100svh");
    setIsSupport(result);
  }, []);

  return isSupport;
};
