const Help = () => {
  return (
    <div className="w-full py-12 px-8 flex flex-row border-b-[#ccc] border-[1px]">
      <div className="w-4/12 flex flex-col">
        <h4 className="uppercase font-medium text-[14px]">can we help?</h4>
      </div>
      <div className="w-5/12 flex justify-start text-[14px]">
        <div className="flex flex-col">
          <p className="mb-2 leading-5 tracking-tight">
            Icon offers worldwide assistance 24 hours a day, seven days a week.
            Please note, we may monitor or record your communication for
            training and quality control purposes.
          </p>
          <ul className="flex flex-col gap-4">
            <li className="flex justify-between flex-row">
              <p className="w-1/2">Telephone</p>
              <p className="w-1/2">+1 877 217 4085</p>
            </li>
            <li className="flex justify-between flex-row">
              <p className="w-1/2">Email</p>
              <p className="w-1/2">iconenemy@gmail.com</p>
            </li>
          </ul>
        </div>
      </div>
      <div className="w-3/12 flex justify-center"></div>
    </div>
  );
};

export default Help;
