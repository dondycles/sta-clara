"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Nav() {
  const pathname = usePathname();
  const pages = [
    { name: "1", href: "/" },
    { name: "2", href: "/act-2" },
    { name: "3", href: "/act-3" },
    { name: "4", href: "/act-4" },
    { name: "5", href: "/act-5" },
    { name: "6", href: "/act-6" },
    { name: "8", href: "/act-8" },
  ];
  return (
    <nav className="fixed z-10 bottom-4 left-4 right-4 h-16 bg-black rounded-md text-background flex flex-row gap-4 justify-center items-center">
      {pages.map((page) => {
        return (
          <Link key={page.name} href={page.href}>
            <button
              className={`${
                pathname === page.href &&
                "text-foreground bg-background px-4 rounded-md"
              }`}
            >
              {page.name}
            </button>
          </Link>
        );
      })}
    </nav>
  );
}
