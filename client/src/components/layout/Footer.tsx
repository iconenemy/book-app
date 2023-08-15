import { TextField } from "../inputs";

const Footer = () => {
  return (
    <>
      <div className="py-8 px-6 flex justify-center border-y-2 border-[#ccc]">
        <div className="h-48 w-[370px] px-4 flex flex-col items-start">
          <div className="h-10 py-3 mb-1 flex items-center text-[12px] uppercase font-medium">
            sign up
          </div>
          <div className="text-start text-[12px] tracking-tight">
            Sign up below for updates about the world of Icon, including
            collection launches and early access to limited-edition products and
            collaborations.
          </div>
          <TextField type="text" placeholder="Email" className="text-xs"/>
        </div>
        <div className="h-48 w-[370px] px-4 flex flex-col items-start">
          <div className="h-10 py-3 mb-1 flex items-center text-[12px] uppercase font-medium">
            store location
          </div>
          <div className="h-10 py-3 mb-1 flex items-center text-[12px] uppercase font-medium">
            download our app
          </div>
          <div className="h-10 py-3 mb-1 flex items-center text-[12px] uppercase font-medium">
            book an appointment
          </div>
        </div>
        <div className="h-48 w-[370px] px-4 flex flex-col items-start">
          <div className="h-10 py-3 mb-1 flex items-center text-[12px] uppercase font-medium">
            customer service
          </div>
          <div className="h-10 py-3 mb-1 flex items-center text-[12px] uppercase font-medium">
            legal & cookies
          </div>
          <div className="h-10 py-3 mb-1 flex items-center text-[12px] uppercase font-medium">
            follow us
          </div>
          <div className="h-10 py-3 mb-1 flex items-center text-[12px] uppercase font-medium">
            our company
          </div>
        </div>
        <div className="h-48 w-[370px] px-4 flex flex-col items-start">
          <div className="h-20 py-3 mb-1 flex flex-col items-start text-[12px] ">
            <div className="uppercase font-semibold"> language </div>
            <div className="my-3 text-start"> English </div>
          </div>
          <div className="h-20 py-3 mb-1 flex flex-col items-start text-[12px] ">
            <div className="uppercase font-semibold"> shipping to </div>
            <div className="my-3 text-start"> Ukraine (₴) </div>
          </div>
        </div>
      </div>
      <div className="pt-4 px-10 pb-8 flex flex-col text-start text-[10px]">
        <p>
          If you are using a screen-reader and are having problems using this
          website, please call +44 (0) 203 402 1444 or contact us for
          assistance.
        </p>
        <p>
          Icon Limited, Horseferry House, Horseferry Road, London, SW1P 2AW
        </p>
        <p>Registered in England & Wales</p>
        <p>Registered Company Number: 00162636</p>
      </div>
    </>
  );
};

export default Footer;
