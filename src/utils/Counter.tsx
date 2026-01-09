'use client';

import { useCountUpOnView } from "@/hooks/useCountUpOnView";
import CountUp from "react-countup";

type CounterProps = {
  end: number;
  duration?: number;
  start?: number;
  suffix?: string;
  prefix?: string;
  className?: string;
};

export default function Counter({
  end,
  duration = 2,
  start = 0,
  suffix = "",
  prefix = "",
  className = "",
}: CounterProps) {
  const { ref, inView } = useCountUpOnView();
  const decimals= end % 1 !== 0 ? end.toString().split('.')[1].length : 0;

  return (
    <span ref={ref} className={className}>
      {inView ? (
        <CountUp
          start={start}
          end={end}
          decimals={decimals}
          duration={duration}
          suffix={suffix}
          prefix={prefix}
        />
      ) : (
        start
      )}
    </span>
  );
}