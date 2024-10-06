import React from "react";
import DashboardLayout from "@/components/layout/user-dashboard";
import { UserPaymentHistory } from "@/components/user-payment-history";

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
        <UserPaymentHistory />
      </DashboardLayout>
    </>
  );
};

export default page;
