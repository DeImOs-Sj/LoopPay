"use client";

import React, { useState } from "react";
import DashboardLayout from "@/components/layout/dashboard-layout";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axiosInstance from "@/utils/apis";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { addUserToOrg } from "@/apis/organization";
import { AxiosError } from "axios";

type UserExistsResponse = {
  id: number;
  email: string;
  stellarAccountId: string;
  createdAt: Date;
  updatedAt: Date;
  Profile: {
    name: string;
    avatar: string | null;
  };
};

const Page: React.FC = () => {
  const [userEmail, setUserEmail] = useState("");
  const [userExistsData, setUserExistsData] =
    useState<UserExistsResponse | null>(null);

  const handleCheckClick = async () => {
    try {
      const response = await axiosInstance.get(
        `${process.env.NEXT_PUBLIC_SERVER}/user/email/${userEmail}`
      );

      const data = response.data as UserExistsResponse;
      setUserExistsData(data);
    } catch (e) {
      const error = e as AxiosError;

      setUserExistsData(null);

      toast.error("User not found");
      console.error(error.response?.data?.message ?? "User not found");
    }
  };

  const handleAddUserClick = async () => {
    try {
      await addUserToOrg({ userEmail });

      toast.success("User added successfully");
    } catch (error) {
      toast.error("Error adding user");
      console.error("Add user error:", error);
    }
  };
  return (
    <>
      <h2>
        <title>User Profile</title>
      </h2>
      <ToastContainer />
      <DashboardLayout
        type="user"
        heading="Visa Applications"
        text="Find all your visa application here"
        buttonLabel="New Visa Application"
        loading={false}
      >
        <div className="m-6 flex flex-col gap-5">
          <div className="flex gap-5">
            <Input
              placeholder="Enter user email"
              value={userEmail}
              onChange={(e) => setUserEmail(e.target.value)}
            />

            <Button onClick={() => handleCheckClick()}>Check</Button>
          </div>

          <div>
            {userExistsData && (
              <Card>
                <CardHeader>
                  <CardTitle>User Details</CardTitle>
                  <CardDescription>
                    This user exists in the system
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col gap-3">
                    <h6 className="text-xl font-semibold">
                      <CardDescription>
                        Email: {userExistsData.email}
                      </CardDescription>
                    </h6>

                    <h6 className="text-xl font-semibold">
                      <CardDescription>
                        Name: {userExistsData.Profile.name}
                      </CardDescription>
                    </h6>

                    <Button onClick={() => handleAddUserClick()}>
                      Add User
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </DashboardLayout>
    </>
  );
};

export default Page;
