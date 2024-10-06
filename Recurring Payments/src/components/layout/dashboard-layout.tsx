import { dashboardConfig } from "../../config/organization-dashboard";
import { MainNav } from "../main-nav";
import { DashboardNav } from "../nav";
import { SiteFooter } from "../site-footer";
import { UserAccountNav } from "../user-account-nav";
import { Icons } from "../icons";
import DashboardSkeleton from "../dashboard-skeleton";
import { cn } from "../../utils/cn";
import { useState } from "react";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectItem,
} from "../ui/select";
import { useNavigate } from "react-router-dom";
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
  const [selectedValue, setSelectedValue] = useState("create payroll");
  const navigate = useNavigate();

  const handleValueChange = (value: string) => {
    setSelectedValue(value);
    if (value === "create payroll") {
      navigate("/organization-payroll");
    } else if (value === "option2") {
      navigate("/add-users");
    }
  };

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
          {type !== "none" && type !== "empty" && (
            <div className="te mt-[2rem] flex flex-col items-start gap-2 text-white">
              <Select value={selectedValue} onValueChange={handleValueChange}>
                <SelectTrigger className="custom-select-trigger w-[180px] bg-black text-white">
                  <div className="flex items-center gap-2">
                    <Icons.add className="h-4 w-4 text-white" />
                    <SelectValue
                      className="text-white"
                      placeholder="Select an option"
                    />
                  </div>
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="create payroll">
                      <div className="flex items-center gap-2">
                        Create Payroll
                      </div>
                    </SelectItem>
                    <SelectItem value="option2">
                      <div className="flex items-center gap-2">
                        Add Employee
                      </div>
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          )}
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
