import { dashboardConfig } from "../config/organization-dashboard";
import { MainNav } from "../components/main-nav";
import { DashboardNav } from "@/components/nav";
import { SiteFooter } from "@/components/site-footer";
import { UserAccountNav } from "@/components/user-account-nav";
import DashboardSkeleton from "../components/dashboard-skeleton";
import { cn } from "../utils/cn";
import { api } from "../utils/api";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Corrected import
import { useToast } from "@/hooks/use-toast";

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
  const { toast } = useToast();

  const navigate = useNavigate();
  const { data, isSuccess } = api.user.isUserCreated.useQuery();

  useEffect(() => {
    // Check if the user profile is created, if not navigate to profile page
    if (isSuccess && !data?.isProfileCreated) {
      navigate("/dashboard/user/profile", { replace: true });

      toast({
        title: "Profile not created",
        type: "foreground",
      });
    }
  }, [isSuccess, data, navigate, toast]);

  return (
    <div className="flex min-h-screen flex-col space-y-6">
      <header className="sticky top-0 z-40 border-b bg-background">
        <div className="container flex h-16 items-center justify-between py-4">
          <MainNav items={dashboardConfig.mainNav} />

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
                  ? dashboardConfig.userSidebarNav
                  : dashboardConfig.adminSidebarNav
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
