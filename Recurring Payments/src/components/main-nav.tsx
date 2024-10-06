import * as React from "react";
import type { MainNavItem } from "../types/index";
// import { siteConfig } from "../../src/config/site";
import { cn } from "../../src/utils/cn";
import { Icons } from "../components/icons";
import { MobileNav } from "./mobile-nav";
import { Search } from "./search";
import { Link } from "react-router-dom";

interface MainNavProps {
  items?: MainNavItem[];
  children?: React.ReactNode;
}

export function MainNav({ items, children }: MainNavProps) {
  // const segment = useSelectedLayoutSegment();
  const [showMobileMenu, setShowMobileMenu] = React.useState<boolean>(false);

  const ref = React.useRef<HTMLAnchorElement>(null);

  return (
    <div className="light flex gap-6 md:gap-10">
      <Link
        ref={ref}
        to={"/"}
        className={cn(
          "hidden items-center space-x-2 hover:text-foreground/80 md:flex"
        )}
      >
        <div>
          <Search />
        </div>
      </Link>

      <button
        className="flex items-center space-x-2 md:hidden"
        onClick={() => setShowMobileMenu(!showMobileMenu)}
      >
        {showMobileMenu ? <Icons.close /> : <Icons.logo />}
        <span className="font-bold">Menu</span>
      </button>
      {showMobileMenu && items && (
        <MobileNav items={items}>{children}</MobileNav>
      )}
    </div>
  );
}
