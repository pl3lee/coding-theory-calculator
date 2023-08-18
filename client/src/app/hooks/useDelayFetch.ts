import { useEffect, useState } from "react"
export const useDelayFetch = (dependencies: any[], submit: () => void) => {
  const [timeoutId, setTimeoutId] = useState<null | NodeJS.Timeout>(null);
  useEffect(() => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    const id = setTimeout(() => {
     submit()
    }, 1000); // delay in milliseconds
    setTimeoutId(id);
  }, dependencies);
}