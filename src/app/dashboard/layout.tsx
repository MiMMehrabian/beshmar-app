"use client";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();
  const isAuthenticated =
    typeof window !== "undefined" && localStorage.getItem("auth") === "true";
  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/");
    }
  }, [isAuthenticated, router]);

  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className="bg-white dark:bg-boxdark-2 dark:text-bodydark">
      {children}
    </div>
  );
}
