import { InputHTMLAttributes } from "react";

import Image from "next/image";

import SearchIcon from "@/public/search.svg";

interface SearchInputProps extends InputHTMLAttributes<HTMLInputElement> {}

const SearchInput = (props: SearchInputProps) => {
  return (
    <div className="my-4 px-4 border border-slate-500 flex flex-row items-center gap-5 rounded-xl">
      <label htmlFor="search">
        <Image width={24} height={24} src={SearchIcon} alt="Search" />
      </label>

      <input
        type="text"
        id="search"
        placeholder="Enter your keywords"
        className="bg-[transparent] outline-none border-none w-full py-3 pl-2 pr-3"
        {...props}
      />
    </div>
  );
};

export default SearchInput;
