import { useEffect, useState } from "react";

export default function Timer() {
  const [timer, setTimer] = useState(50);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [timer, ]);

  useEffect(() => {
    setTimer(50);
  }, []);
  return timer;
}