import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { ChevronsUpDown, Check } from "lucide-react";
import { TestContract } from "../../swap-api/TestContract";
import { contractId } from "../../lib";
import { useConnectUI, useWallet } from "@fuels/react";
import { BN } from "fuels";

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "../ui/command";

import { cn } from "../../utils/cn";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

// import {
//   StellarWalletsKit,
//   WalletNetwork,
//   type ISupportedWallet,
//   XBULL_ID,
//   xBullModule,
//   FreighterModule,
//   AlbedoModule,
// } from "@creit.tech/stellar-wallets-kit";
// import * as StellarSdk from "@stellar/stellar-sdk";
import axios from "axios";
import axiosInstance from "../../utils/apis";

const FundModal = () => {
  const { connect } = useConnectUI();

  const [contract, setContract] = useState<TestContract>();
  const [isLoading, setIsLoading] = useState(false);
  const [amount, setAmount] = useState<string>(""); // Keep it as string initially
  const [userInputs, setUserInputs] = useState({
    email: "",
    amount: "",
    token: "ETH",
  });

  const { wallet, refetch } = useWallet();
  console.log("Wallet:", wallet);
  console.log("Refetch:", contract);

  useEffect(() => {
    if (wallet) {
      const testContract = new TestContract(contractId, wallet);
      setContract(testContract);
    }
  }, [wallet]);

  async function depositFunds() {
    const ethID =
      "0xf8f8b6283d7fa5b672b530cbb84fcccb4ff8dc40f8176ef4544ddb1f1952ad07";
    if (!wallet || !contract || !amount) return;
    // const usd = (amount / 2800) * 1000000;

    setIsLoading(true);
    try {
      await contract.functions
        .deposit_funds()
        .callParams({
          forward: [(amount / 2800) * 1000000, ethID], // Specify the amount and asset to send
          gasLimit: new BN(1000000), // Gas limit (adjust if needed)
        })
        .call();
      console.log(`Deposited ${amount} units successfully`);
    } catch (error) {
      console.error("Error depositing funds:", error);
    }

    setIsLoading(false);
  }

  console.log("User inputs:", userInputs);
  const currencies = [
    { label: "ETH", value: "ETH" },
    { label: "XLM", value: "XLM" },
    { label: "USDC", value: "USDC" },
    { label: "USDT", value: "USDT" },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInputs((prev) => ({ ...prev, [name]: value }));
  };

  const selectedCurrency = currencies.find(
    (currency) => currency.value === userInputs.token
  );
  console.log("Selected currency:", currencies);

  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button>Add Funds</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Deposit Funds</DialogTitle>
            <DialogDescription>Deposit Funds to your account</DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="items-center justify-between gap-4">
              <Label htmlFor="amount" className="text-right">
                Amount
              </Label>
              <div className="flex gap-4">
                <Input
                  id="amount"
                  name="amount"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className=""
                />
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      role="combobox"
                      className={cn(
                        "w-[100px] justify-between",
                        !userInputs.token && "text-muted-foreground"
                      )}
                    >
                      {selectedCurrency
                        ? selectedCurrency.label
                        : "Select Currency"}
                      <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-[200px] p-0">
                    <Command label="Command Menu">
                      <CommandInput placeholder="Search currency..." />
                      <CommandEmpty>No Currency Found</CommandEmpty>
                      <CommandGroup>
                        {currencies.length > 0 ? (
                          currencies.map((currency) => (
                            <CommandItem
                              key={currency.value}
                              value={currency.value}
                              onSelect={() => {
                                setUserInputs((prev) => ({
                                  ...prev,
                                  token: currency.value,
                                }));
                              }}
                            >
                              <Check
                                className={cn(
                                  "mr-2 h-4 w-4",
                                  currency.value === userInputs.token
                                    ? "opacity-100"
                                    : "opacity-0"
                                )}
                              />
                              {currency.label}
                            </CommandItem>
                          ))
                        ) : (
                          <CommandEmpty>No currencies available</CommandEmpty>
                        )}
                      </CommandGroup>
                    </Command>
                  </PopoverContent>
                </Popover>
              </div>
            </div>
          </div>
          <div className="flex justify-between">
            <Button type="button" className="mt-4 " onClick={() => connect()}>
              Connect Wallet
            </Button>
            <Button type="button" className="mt-4 " onClick={depositFunds}>
              Deposit Funds
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default FundModal;
