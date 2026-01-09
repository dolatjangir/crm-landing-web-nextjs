"use client";

import { useRouter } from "next/navigation";

type NavigateOptions = {
  scroll?: boolean;
  replace?: boolean;
};

export function useNavigate() {
  const router = useRouter();

  return (href: string, options?: NavigateOptions) => {
    if (options?.replace) {
      router.replace(href, { scroll: options?.scroll ?? true });
    } else {
      router.push(href, { scroll: options?.scroll ?? true });
    }
  };
}
