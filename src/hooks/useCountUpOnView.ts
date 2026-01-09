'use client';

import { useInView } from "react-intersection-observer";

type UseCountUpOnViewProps = {
  triggerOnce?: boolean;
  threshold?: number;
};

export function useCountUpOnView({
  triggerOnce = false,
  threshold = 0.3,
}: UseCountUpOnViewProps = {}) {
  const { ref, inView } = useInView({
    triggerOnce,
    threshold,
  });

  return { ref, inView };
}