type Props = {
  label: string;
  name: string;
  className?: string;
};

const RadioButton = ({ label, name, className }: Props) => {
  return (
    <div
      className={`${
        className ? className : ""
      } px-5 py-3 flex gap-4 border-[1px]`} 
    >
      <input className="w-5 accent-black" type="radio" name={name} />
      <label>{label}</label>
    </div>
  );
};

export default RadioButton;
