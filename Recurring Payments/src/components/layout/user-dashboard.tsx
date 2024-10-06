import { userConfig } from "../../config/user-dashboard";
import { MainNav } from "../main-nav";
import { DashboardNav } from "../nav";
import { SiteFooter } from "../site-footer";
import { UserAccountNav } from "../user-account-nav";
import DashboardSkeleton from "../dashboard-skeleton";
import { cn } from "../../utils/cn";

interface DashboardLayoutProps {
  type: "user" | "admin" | "empty" | "none";
  loading: boolean;
  heading: string;
  text: string;
  buttonLabel: string;
  children?: React.ReactNode;
}

export default function DashboardLayout({
  type,
  children,
  loading,
  text,
  buttonLabel,
  heading,
}: DashboardLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col space-y-6">
      <header className="sticky top-0 z-40 border-b bg-background">
        <div className="container flex h-16 items-center justify-between py-4">
          <MainNav items={userConfig.mainNav} />

          <UserAccountNav
            user={{
              name: "wallet.accountId",
              image: null,
              email: "wallet.accountId",
            }}
          />
        </div>
      </header>

      <div
        className={cn(
          "container grid flex-1 gap-12",
          type !== "empty" ? "md:grid-cols-[200px_1fr]" : ""
        )}
      >
        <aside
          className={cn(
            "hidden w-[200px] flex-col md:flex",
            type === "empty" ? "w-[0px]" : ""
          )}
        >
          <DashboardNav
            items={
              type === "none" || type === "empty"
                ? []
                : type === "user"
                  ? userConfig.userSidebarNav
                  : userConfig.adminSidebarNav
            }
          />
        </aside>
        <main className="flex w-full flex-1 flex-col overflow-hidden">
          {loading ? (
            <DashboardSkeleton
              text={text}
              buttonLabel={buttonLabel}
              heading={heading}
            />
          ) : (
            children
          )}
        </main>
      </div>
      <SiteFooter className="border-t" />
    </div>
  );
}
