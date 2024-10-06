import React from "react";
import OrgDashboard from "@/components/dashboard";
// import Head from "next/head";
import DashboardLayout from "@/components/layout/dashboard-layout";

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
        <OrgDashboard />
      </DashboardLayout>
    </>
  );
};

export default page;
