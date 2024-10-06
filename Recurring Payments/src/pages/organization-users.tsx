import React from "react";
import DashboardLayout from "@/components/layout/dashboard-layout";
import { OrgUserTable } from "@/components/organization/user-table";
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
        <OrgUserTable />
      </DashboardLayout>
    </>
  );
};

export default page;
