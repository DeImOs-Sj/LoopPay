import RecurrpayDark from "/recurrPay.png";
// import RecurrpayLight from "../../../../public/recurrPayBlack.svg";

export function Search() {
  // const { theme } = useTheme();

  return (
    <div className={`h-12 w-auto rounded-sm`}>
      <img
        src={RecurrpayDark as string}
        alt="Logo"
        className="mx-auto h-9 w-auto pt-2"
      />
    </div>
  );
}
