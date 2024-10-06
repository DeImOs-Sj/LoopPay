"use client";

import * as React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { type OrgUser } from "@/apis/organization";

export function UserSelectDropdown({
  users,
  value,
  setValue,
}: {
  users: OrgUser[];
  value: number | null;
  setValue: (value: number | null) => void;
}) {
  return (
    <Select
      onValueChange={(val: string) => {
        setValue(val ? parseInt(val) : null);
      }}
    >
      <SelectTrigger className="w-[240px]">
        <SelectValue placeholder="Select User" />
      </SelectTrigger>
      <SelectContent>
        {users.map((item) => {
          return (
            <SelectItem key={item.id} value={item.id.toString()}>
              {item.name}
            </SelectItem>
          );
        })}
      </SelectContent>
    </Select>
  );
}
