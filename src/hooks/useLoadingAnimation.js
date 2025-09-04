import { useState, useEffect, useMemo } from "react";

export function useLoadingAnimation(loading) {
  const circleColors = useMemo(() => ["#3b82f6", "#285069ff"], []);
  const [circleColor, setCircleColor] = useState(circleColors[0]);

  useEffect(() => {
    if (loading) {
      let idx = 0;
      const interval = setInterval(() => {
        idx = (idx + 1) % circleColors.length;
        setCircleColor(circleColors[idx]);
      }, 1000);
      return () => clearInterval(interval);
    } else {
      setCircleColor(circleColors[0]);
    }
  }, [loading, circleColors]);

  return circleColor;
}
