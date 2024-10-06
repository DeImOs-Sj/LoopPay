"use client";

import * as React from "react";
import { useState } from "react";
import type { SignupData } from "@/types/signup";
import { cn } from "@/utils/cn";
import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
// import { useRouter } from "next/navigation";
import { useNavigate } from "react-router-dom";

import axios from "axios";

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export function UserAuthForm({ className, ...props }: UserAuthFormProps) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [formData, setFormData] = useState<SignupData>({
    authType: "ORG_SIGNUP",
    email: "org@gmail.com",
    password: "1234",
    name: "InterStellar",
    avatar: "x",
    website: "x",
    x: "abcd",
    y: "abcd",
  });
  console.log("data", formData);
  const navigate = useNavigate();

  const API_URL = "http://localhost:8000";

  const signup = async (data: SignupData) => {
    try {
      const response = await axios.post(`${API_URL}/auth/org/signup`, data);
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
    setIsLoading(true);
    try {
      const response = await signup(formData);
      console.log("Signup successful:", response);
      navigate("/organization-dashboard");
    } catch (error) {
      console.error("Signup failed:", error);
      // Handle signup error, e.g., show an error message
    } finally {
      setIsLoading(false);
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
              disabled={isLoading}
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
              disabled={isLoading}
              required
            />
          </div>
          <div className="grid gap-4">
            <Label className="text-black" htmlFor="avatar">
              Organization Name
            </Label>
            <Input
              id="name"
              name="name"
              placeholder="Link to your name"
              type="text"
              autoCapitalize="none"
              autoComplete="url"
              autoCorrect="off"
              value={formData.name}
              onChange={handleChange}
              disabled={isLoading}
              required
            />
          </div>
          <div className="grid gap-4">
            <Label className="text-black" htmlFor="avatar">
              Organization Logo
            </Label>
            <Input
              id="avatar"
              name="avatar"
              placeholder="Link to your logo"
              type="text"
              autoCapitalize="none"
              autoComplete="url"
              autoCorrect="off"
              value={formData.avatar}
              onChange={handleChange}
              disabled={isLoading}
              required
            />
          </div>
          <div className="grid gap-4">
            <Label className="text-black" htmlFor="website">
              Organization Website
            </Label>
            <Input
              id="website"
              name="website"
              placeholder="Enter your link"
              type="text"
              autoCapitalize="none"
              autoComplete="url"
              autoCorrect="off"
              value={formData.website}
              onChange={handleChange}
              disabled={isLoading}
              required
            />
          </div>
          <a
            href="/organization-signin"
            className="text-sm text-muted-foreground hover:text-sky-600"
          >
            Sign in instead?
          </a>

          <Button type="submit" disabled={isLoading}>
            {isLoading && (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            )}
            Sign Up
          </Button>
        </div>
      </form>
    </div>
  );
}
