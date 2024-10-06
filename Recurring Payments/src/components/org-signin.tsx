import React, { useState } from "react";

import { cn } from "@/utils/cn";
// import { Icons } from "@/app/components/icons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
// import { useRouter } from "next/navigation";
import { useNavigate } from "react-router-dom";
import { SignInRequest, SignInResponse } from "@/utils/authapi";
// import Link from "next/navigation";
import axios from "axios";

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export function UserAuthForm({ className, ...props }: UserAuthFormProps) {
  const [formData, setFormData] = useState<SignInRequest>({
    authType: "ORG_SIGNIN",
    email: "",
    password: "",
    x: "random",
    y: "random",
  });

  const navigate = useNavigate();

  const API_URL = "http://localhost:8000";

  const signup = async (data: SignInRequest) => {
    try {
      const response = await axios.post(`${API_URL}/auth/org/signin`, data);
      console.log("Signup response:", response.data);
      const test = localStorage.setItem("token", response.data.access_token);
      console.log("org_token", test);

      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error("Signup error:", error.response?.data || error.message);
      } else {
        console.error("Unexpected error:", error);
      }
      throw error;
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await signup(formData);
      console.log("Signup successful:", response);
      navigate("/organization-dashboard");
    } catch (error) {
      console.error("Signup failed:", error);
    }
  };

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <form onSubmit={handleSubmit}>
        <div className="grid gap-6">
          <div className="grid gap-4">
            <Label className="text-black" htmlFor="email">
              Email
            </Label>
            <Input
              id="email"
              name="email"
              placeholder="name@example.com"
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="grid gap-4">
            <Label className="text-black" htmlFor="password">
              Password
            </Label>
            <Input
              id="password"
              name="password"
              placeholder="Enter your Password"
              type="password"
              autoCapitalize="none"
              autoComplete="current-password"
              autoCorrect="off"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <a
            href="/organization-signup  "
            className="text-sm text-muted-foreground hover:text-sky-600"
          >
            Sign up instead?
          </a>
          <Button className="w-full">Sign In</Button>
        </div>
      </form>
    </div>
  );
}
