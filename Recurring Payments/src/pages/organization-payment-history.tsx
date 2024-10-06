import DashboardLayout from "@/components/layout/dashboard-layout";

import { DataTable } from "@/components/dataTable";
const page = () => {
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
        <DataTable />
      </DashboardLayout>
    </>
  );
};

export default page;
