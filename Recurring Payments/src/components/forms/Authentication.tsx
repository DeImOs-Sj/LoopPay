import React from "react";
import ReccurPay from "../../assets/RecurrPay";
import Logo from "../../assets/Logo";

function Authentication() {
  return (
    <div className="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
      <div className="absolute inset-0 bg-zinc-900" />
      <div className="relative z-20 flex items-center text-lg font-medium">
        <Logo className="mr-2 h-6 w-6" />
      </div>
      <ReccurPay className="fixed left-[4rem] top-[5rem] mr-2 h-[40rem] w-[40rem]" />

      <div className="relative z-20 mt-auto">
        <blockquote className="space-y-2">
          <p className="text-lg">
            Enhance your employee experience with seamless wallet-based login
            and payment options.
          </p>
          <footer className="text-sm">For your Recurring Payments</footer>
        </blockquote>
      </div>
    </div>
  );
}

export default Authentication;
