import { FC } from "react";
import { GoSearch } from "react-icons/go";

interface Props {
  placeholder: string;
}

export const SearchComponent: FC<Props> = ({placeholder}: Props) => {
  return (
    <div className="relative">
        <div className="flex items-center">
          <input
            className="rounded-lg py-2 px-4 flex-grow my-6 mx-12 bg-cardBackgroundColor text-white placeholder:text-blue-950 bg-cyan-50
            "
            type="text"
           
            placeholder={placeholder}
          />
          <GoSearch
            className="w-5 text-blue-950"
            style={{ position: "absolute", right: "60px", top: "38%" }}
          />
        </div>
        <div></div>
      </div>
  )
}
