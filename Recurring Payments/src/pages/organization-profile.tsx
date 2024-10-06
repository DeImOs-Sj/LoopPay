import React, { useState } from "react";
import DashboardLayout from "@/components/layout/dashboard-layout";
import { OrganizationProfile } from "@/components/forms/organization-profile-form";

const Page = () => {
  const [date, setDate] = React.useState<Date>();

  const [userInputs, setUserInputs] = useState([
    { email: "", amount: "", token: "XLM" },
  ]);

  const handleAddClick = () => {
    setUserInputs([
      ...userInputs,
      {
        email: "",
        amount: "",
        token: "XLM",
      },
    ]);
  };

  const handleInputChange = (index: number, key: string, value: string) => {
    setUserInputs(
      userInputs.map((userInput, i) =>
        i === index ? { ...userInput, [key]: value } : userInput
      )
    );
  };

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
        <OrganizationProfile />
      </DashboardLayout>
    </>
  );
};

export default Page;
