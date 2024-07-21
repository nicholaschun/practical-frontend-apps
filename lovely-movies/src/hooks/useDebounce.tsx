import { useEffect, useState } from "react";

export const useDebounce = <T,>(value: T, delay: number = 500) => {

  const [debouncedVal, setDebouncedVal] = useState<T>(value)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedVal(value)
    }, delay);
    return () => clearTimeout(timeout)
  },[value, delay])

  return debouncedVal
};
