import { GoSearch } from "react-icons/go";
import { Input } from "../atoms/Input";
interface Props {
  placeholder: string;
  value: string;
  onSearch: (event: React.ChangeEvent<HTMLInputElement>) => void;
}


export const SearchComponent = ({placeholder, value, onSearch}: Props) => {
 
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onSearch(event);
  };
 
  return (
    <div className="relative">
      <div className="flex items-center">
        <Input placeholder={placeholder} value={value} onChange={handleInputChange} />
        <GoSearch
          className="w-5 text-blue-950"
          style={{ position: "absolute", right: "60px", top: "38%" }}        
        />
      </div>
      <div></div>
    </div>
  );
 };
