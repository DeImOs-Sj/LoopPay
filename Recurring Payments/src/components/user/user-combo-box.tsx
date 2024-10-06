"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/app/utils/cn";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { type OrgUser } from "@/apis/organization";
import { CommandList } from "cmdk";

export function UserCombobox({
  users,
  value,
  setValue,
}: {
  users: OrgUser[];
  value: number | null;
  setValue: (value: number | null) => void;
}) {
  const [open, setOpen] = React.useState(false);
  // const [value, setValue] = React.useState<number>();

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between"
        >
          {value
            ? users.find((item) => item.id === value)?.name
            : "Select user..."}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>

      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search framework..." />
          <CommandEmpty>No user selected.</CommandEmpty>
          <CommandList>
            {/* <CommandGroup> */}
            {users.map((item) => (
              <CommandItem
                key={item.id}
                value={value?.toString()}
                onSelect={(currentValue) => {
                  console.log(currentValue);
                  setValue(
                    currentValue === value?.toString()
                      ? null
                      : parseInt(currentValue),
                  );
                }}
              >
                <Check
                  className={cn(
                    "mr-2 h-4 w-4",
                    value === item.id ? "opacity-100" : "opacity-0",
                  )}
                />
                {item.name}
              </CommandItem>
            ))}
            {/* </CommandGroup> */}
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
