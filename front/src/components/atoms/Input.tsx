interface Props {
  placeholder: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input = ({ placeholder, value, onChange }: Props) => {
  return (
    <input
      className="rounded-lg py-2 px-4 flex-grow my-6 mx-12 bg-cardBackgroundColor placeholder:text-blue-950 bg-cyan-50"
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};
