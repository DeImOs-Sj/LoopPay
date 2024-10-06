import { useConnect, useConnectUI, useWallet } from "@fuels/react";
import { TestContract } from "../swap-api/TestContract";
import { isLocal, contractId } from "../lib";

import { Address, BN } from "fuels";
import React, { useEffect, useState } from "react";
import { Icons } from "@/components/icons";
import { useToast } from "@/hooks/use-toast";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { CalendarIcon } from "@radix-ui/react-icons";
import { format, set } from "date-fns";
import { cn } from "@/utils/cn";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
// import Head from "next/head";
import DashboardLayout from "@/components/layout/dashboard-layout";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { getOrganizationUsers, type OrgUser } from "@/apis/organization";
import { UserSelectDropdown } from "../components/user/user-select";
import axiosInstance from "../utils/apis";

const OrganizationPayroll = () => {
  const [contract, setContract] = useState<TestContract>();
  console.log("contract", contractId);
  const [isLoading, setIsLoading] = useState(false);

  const { connect } = useConnectUI();
  const { wallet, refetch } = useWallet();

  const { toast } = useToast();

  const [date, setDate] = React.useState<Date>();
  const [payrollName, setPayrollName] = useState("");
  const [paymentType, setPaymentType] = useState<"RECURRING" | "ONE_TIME">(
    "RECURRING"
  );
  const [userAddress, setUserAddress] = useState("");
  const [userInputs, setUserInputs] = useState<
    {
      id: number | null;
      amount: string;
      token: string;
    }[]
  >([{ id: null, amount: "", token: "ETH" }]);
  const [orgUsers, setOrgUsers] = useState<OrgUser[]>([]);
  const [amount, setAmount] = useState();
  console.log("inputs", userInputs);

  useEffect(() => {
    if (wallet) {
      const testContract = new TestContract(contractId, wallet);
      setContract(testContract);
    }
  }, [wallet]);

  const handleAddClick = () => {
    setUserInputs([
      ...userInputs,
      {
        id: null,
        amount: "",
        token: "ETH",
      },
    ]);
  };

  async function transferFunds() {
    console.log("hello world");
    console.log("wallet", wallet);
    console.log("contract", contract);
    console.log("address", amount);
    // if (!wallet || !contract || !transferAmount || !address) return;
    const BASE_ASSET_ID =
      "0xf8f8b6283d7fa5b672b530cbb84fcccb4ff8dc40f8176ef4544ddb1f1952ad07";
    try {
      console.log("hello world2");
      const a = Address.fromString(
        "0xaa23536ca3014e3e297a7180701ed0e937aa8695d59b123c3ff6382d305d06c2"
      );
      await contract?.functions
        .transfer(
          {
            bits: "0xaa23536ca3014e3e297a7180701ed0e937aa8695d59b123c3ff6382d305d06c2",
          },
          { bits: BASE_ASSET_ID },
          111
        )
        .callParams({
          forward: [new BN(amount), BASE_ASSET_ID],
          gasLimit: new BN(1000000),
        })
        .call();

      console.log(`Transferred ${amount} units successfully`);
    } catch (error) {
      console.error("Error transferring funds:", error);
    }

    setIsLoading(false);
  }

  async function RecurringPayment() {
    console.log("hello world");
    console.log("wallet", wallet);
    console.log("contract", contract);
    console.log("address", amount);
    // if (!wallet || !contract || !transferAmount || !address) return;
    const BASE_ASSET_ID =
      "0xf8f8b6283d7fa5b672b530cbb84fcccb4ff8dc40f8176ef4544ddb1f1952ad07";
    try {
      console.log("hello world2");
      Address.fromString(
        "0xaa23536ca3014e3e297a7180701ed0e937aa8695d59b123c3ff6382d305d06c2"
      );
      await contract?.functions
        .setup_recurring_payment(
          {
            bits: "0xaa23536ca3014e3e297a7180701ed0e937aa8695d59b123c3ff6382d305d06c2",
          },
          111,
          5000
        )
        .callParams({
          forward: [new BN(amount), BASE_ASSET_ID],
          gasLimit: new BN(1000000),
        })
        .call();

      console.log(`Transferred ${amount} units successfully`);
    } catch (error) {
      console.error("Error transferring funds:", error);
    }

    setIsLoading(false);
  }

  const handleInputChange = (
    index: number,
    key: string,
    value: number | null
  ) => {
    setUserInputs(
      userInputs.map((userInput, i) =>
        i === index ? { ...userInput, [key]: value } : userInput
      )
    );
  };
  console.log("inputs", amount);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getOrganizationUsers();

        setUserAddress(data[0].stellarAccountId);
        setOrgUsers(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    void fetchData();
  }, []);

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
        loading={false}
      >
        <div className="flex gap-[11px]">
          <Input
            className="m-[30px] w-[24rem]"
            placeholder="Enter payroll name"
            value={payrollName}
            onChange={(e) => setPayrollName(e.target.value)}
          />

          <div className="mt-[5px]">
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  className={cn(
                    "m-[26px] w-[240px] justify-start text-left font-normal",

                    !date && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date ? (
                    format(date, "PPP")
                  ) : (
                    <span>Pick a date for paying</span>
                  )}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  initialFocus
                  fromDate={new Date()}
                />
              </PopoverContent>
            </Popover>
          </div>
          <div className="pt-[36px]">
            {/* TODO: Fix type */}
            <RadioGroup
              defaultValue="one-time"
              className="flex flex-row"
              // onValueChange={setPaymentType}
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="RECURRING" id="r3" />
                <Label htmlFor="r3">Recurring Pay</Label>
              </div>

              <div className="flex items-center space-x-2">
                <RadioGroupItem value="ONE_TIME" id="r2" />
                <Label htmlFor="r2">One Time</Label>
              </div>
            </RadioGroup>
          </div>
        </div>
        {userInputs.map((input, index) => (
          <div key={index} className="m-6 flex gap-5">
            <UserSelectDropdown
              users={orgUsers}
              value={input.id}
              setValue={(val) => handleInputChange(index, "id", val)}
            />

            <Input
              className="w-[30rem]"
              placeholder="Enter Amount Payable"
              type="number"
              value={amount}
              // onChange={(e) => setAmount(Number(e.target.value))}
            />

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline">Token to Transfer</Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>Tokens</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuRadioGroup
                  value={input.token}
                  onValueChange={(value) =>
                    handleInputChange(index, "token", value)
                  }
                >
                  <DropdownMenuRadioItem value="ETH">ETH</DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="XLM">XLM</DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="USDC">
                    USDC
                  </DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="USDT">
                    USDT
                  </DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
              </DropdownMenuContent>
            </DropdownMenu>
            <Button onClick={transferFunds}>
              <Icons.add />
            </Button>
          </div>
        ))}
        <div className="flex justify-center gap-6">
          <Button onClick={RecurringPayment}>Create One Time Payroll</Button>
          <Button onClick={transferFunds}>Create Recurring Payroll</Button>
        </div>
      </DashboardLayout>
    </>
  );
};

export default OrganizationPayroll;
