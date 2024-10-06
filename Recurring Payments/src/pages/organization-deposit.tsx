import React from "react";
// import Head from "next/head";
import DashboardLayout from "@/components/layout/dashboard-layout";
import { DataTable } from "@/components/depositTable";
const page = () => {
  return (
    <>
      <h1>
        <title>User Profile</title>
      </h1>

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
