import { MainNav } from "@/components/user-nav";
import Landing from "@/components/landing_text";
import { Button } from "@/components/ui/button";
import Globe from "@/components/Globe";

export default function HomePage() {
  return (
    <div>
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>
      <div className="flex flex-col">
        <div className="border-b">
          <div className="flex h-16 items-center px-4">
            <MainNav className="mx-6" />
          </div>
        </div>
        <div className="tems-center relative flex justify-center">
          <div className="mx-auto flex flex-col gap-10 p-6 text-center md:flex-row md:space-x-6 md:text-left">
            <div className="max-w-2xl">
              {/* <h1 className="mb-4 mt-40 text-6xl font-bold"></h1> */}
              <Landing />
              <p className="mb-6 text-lg">
                Easiest way to manage payroll and recurring subscriptions and
                seamlessly do cross border payments with the poweer of Fuel.
              </p>
              <Button className="bg-[#062056]">Get Started</Button>
            </div>
            <div className="flex h-[600px] w-[600px] justify-center md:mt-0 md:justify-start">
              <Globe />
            </div>
          </div>
        </div>
        {/* Create the brand names. All should be in gray in a single line */}
        {/* <div className="m-5 my-10 flex justify-around">
          <img
            src="/brand6.jpeg"
            alt="Brand1"
            width={150}
            height={150}
            className=""
          />
          <img src="/brand5.svg" alt="Brand2" width={150} height={150} />
          <img src="/brand12.jpg" alt="Brand3" width={150} height={150} />
          <img src="/brand7.svg" alt="Brand4" width={150} height={150} />
          <img src="/brand4.png" alt="Brand5" width={150} height={150} />
        </div> */}
      </div>
      <div className="my-10 mt-20 text-center">
        <div className="flex flex-col items-center">
          <h1 className="mb-4 text-5xl font-bold">What we are doing?</h1>
          <p className="mb-10 max-w-[800px] text-center text-lg text-gray-700">
            Helping the organisations with payrolls and recurring payments.
          </p>
        </div>
        <div className="flex justify-center gap-10 align-middle">
          <div className="flex w-1/4 flex-col gap-4 rounded-2xl border border-gray-200 p-6 shadow-lg transition duration-300 ease-in-out hover:shadow-2xl">
            {/* <img
              src="/iceloid.svg"
              width={100}
              height={100}
              alt="ice loid"
              className="self-center"
            /> */}
            <h1 className="mb-2 text-3xl font-bold">
              Automating Recurring Payments
            </h1>
            <p className="text-lg text-gray-700">
              Streamlining payroll, grants, and contractor payments.Eliminating
              manual processes and reducing human error
            </p>
            <Button
              variant="outline"
              className="hover:bg-[#062056] hover:text-white"
            >
              Get In Touch
            </Button>
          </div>
          <div className="flex w-1/4 flex-col gap-4 rounded-2xl border border-gray-200 p-6 shadow-lg transition duration-300 ease-in-out hover:shadow-2xl">
            {/* <img
              src="/stellar.png"
              width={100}
              height={100}
              alt="ice loid"
              className="self-center"
            /> */}
            <h1 className="mb-2 text-3xl font-bold">
              Leveraging Fuel Blockchain
            </h1>
            <p className="text-lg text-gray-700">
              Ensuring secure and transparent transactions. Enabling multi-token
              support and built-in currency conversion
            </p>
            <Button
              variant="outline"
              className="hover:bg-[#062056] hover:text-white"
            >
              Get In Touch
            </Button>
          </div>
          <div className="flex w-1/4 flex-col gap-4 rounded-2xl border border-gray-200 p-6 shadow-lg transition duration-300 ease-in-out hover:shadow-2xl">
            {/* <img
              src="/simplify.svg"
              width={100}
              height={100}
              alt="ice loid"
              className="self-center"
            /> */}
            <h1 className="mb-2 text-3xl font-bold">
              Simplifying Financial Management
            </h1>
            <p className="text-lg text-gray-700">
              Providing smart notifications for timely payments. Offering
              scalable solutions from small teams to large enterprises
            </p>
            <Button
              variant="outline"
              className="hover:bg-[#062056] hover:text-white"
            >
              Get In Touch
            </Button>
          </div>
        </div>
      </div>
      <div className="mt-20 flex items-end justify-center bg-slate-200 py-20">
        {/* <img src="/dash.png" alt="Dash" width={300} height={300} /> */}
        <div className="w-1/3">
          <h1 className="text-3xl">
            Finding it tough to manage your employees payroll while paying them
            on crypto?
          </h1>
          {/* <p className="text-lg">
            Are you also hiring for an underpaid and overworked employee to
            manage your payrolls?
          </p> */}
        </div>
      </div>
    </div>
  );
}
