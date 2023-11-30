interface Props {
  placeholder: string;
}

export const Input = ({ placeholder }: Props) => {
  return (
    <input
      className="rounded-lg py-2 px-4 flex-grow my-6 mx-12 bg-cardBackgroundColor text-white placeholder:text-blue-950 bg-cyan-50
            "
      type="text"
      placeholder={placeholder}
    />
  );
};
