// import Link from "next/link";
import { Link } from "react-router-dom";
import { Search } from "./search";

import { cn } from "../utils/cn";
import { ModeToggle } from "./mode-toggle";

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <div
      className={cn("flex flex-1 items-center justify-between", className)}
      {...props}
    >
      <Search />
      <nav className="flex items-center space-x-4 lg:space-x-6">
        <Link
          to="#"
          className="text-sm font-medium transition-colors hover:text-primary"
        >
          Overview
        </Link>
        <Link
          to="/user-signup"
          className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
        >
          Customers
        </Link>
        <Link
          to="/organization-signup"
          className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
        >
          Organization
        </Link>
        <Link
          to="/user-signup"
          className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
        >
          Employee
        </Link>
        <ModeToggle />
      </nav>
    </div>
  );
}
