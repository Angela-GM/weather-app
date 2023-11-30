import { GoSearch } from "react-icons/go";
import { Input } from "../atoms/Input";

interface Props {
  placeholder: string;
}

export const SearchComponent = ({placeholder}: Props) => {
  return (
    <div className="relative">
      <div className="flex items-center">
        <Input placeholder={placeholder} />
        <GoSearch
          className="w-5 text-blue-950"
          style={{ position: "absolute", right: "60px", top: "38%" }}
        />
      </div>
      <div></div>
    </div>
  );
};
