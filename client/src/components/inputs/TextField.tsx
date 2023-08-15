type Props = {
  id?: string;
  name?: string;
  type: "text" | "password" | "number";
  value?: string | number | null;
  onChange?: (e: React.ChangeEvent<any>) => void;
  placeholder?: string;
  className?: string;
  width?: string;
};

const TextField = ({
  id,
  name,
  type,
  value,
  onChange,
  placeholder,
  width,
  className
}: Props) => {
  return (
    <div className={`relative border-b-[1px] border-black ${width ? width : "w-full"}`}>
      <input
        id={id}
        name={name}
        type={type}
        value={value === null ? "" : value}
        onChange={onChange}
        placeholder={placeholder}
        className={`${className} max-h-6 mt-8 w-full appearance-none bg-transparent text-[14px] border-none text-gray-700 py-2 leading-tight focus:outline-none`}
      />
    </div>
  );
};

export default TextField;
