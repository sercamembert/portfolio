"use client";
import Head from "next/head";

import { usePathname } from "next/navigation";

export default function CanonicalURL() {
  const pathname = usePathname();

  return (
    <Head>
      <link rel="canonical" href={pathname} />
    </Head>
  );
}
