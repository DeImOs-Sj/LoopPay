import DashboardLayout from "@/components/layout/user-dashboard";
import { OrganizationTable } from "@/components/userorgTable";

const Page = () => {
  return (
    <>
      <h2>
        <title>User Profile</title>
      </h2>

      <DashboardLayout
        type="user"
        heading="Visa Applications"
        text="Find all your visa application here"
        buttonLabel="New Visa Application"
      >
        <OrganizationTable />
      </DashboardLayout>
    </>
  );
};

export default Page;
