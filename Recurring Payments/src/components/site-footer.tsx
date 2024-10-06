import * as React from "react";

// import { siteConfig } from "@/app/config/site";
import { cn } from "../utils/cn";
// import { Icons } from "./icons";
import { ModeToggle } from "./mode-toggle";
// import Link from "next/link";
import { Search } from "./search";

export function SiteFooter({ className }: React.HTMLAttributes<HTMLElement>) {
  return (
    <footer className={cn(className)}>
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <Search />
          <p className="text-center text-sm leading-loose md:text-left">
            Unlock Seamless Recurring Payments with Ease
          </p>
        </div>
        <ModeToggle />
      </div>
    </footer>
  );
}
