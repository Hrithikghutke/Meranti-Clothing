import React from "react";
import { BaggageClaim, Heart, Search } from "lucide-react";
import { Link } from "react-router-dom";

function SearchBarHeader() {
  return (
    <div className="w-full bg-offwhite p-3 grid grid-cols-3 sm:grid-cols-4">
      <div className="col-span-2 sm:col-span-3 flex justify-end items-center">
        <form action="" className="relative">
          <input
            className="w-[30vw] sm:w-[55vw] rounded-full px-[12px] py-[12px] sm:py-[10px] border-none  sm:text-xs  "
            type="text"
            placeholder="So what are you in for today?"
          />

          <button
            className="absolute top-[2px] right-[-25px] sm:top-[1px] sm:right-[-24px] mx-4 text-white bg-semiblack hover:bg-black duration-300 ease-in-out py-[10px] px-[10px] sm:py-[5px] sm:px-[8px] rounded-full sm:text-xs"
            type="submit"
          >
            <Search className="sm:w-4" />
          </button>
        </form>
      </div>
      <div className="col-span-1 flex justify-center items-center">
        <Link className="relative">
          <div className="absolute top-[-6px] sm:top-[-10px] right-0 bg-black text-white rounded-full px-1.5 sm:px-2 text-sm sm:text-[10px]">
            2
          </div>
          <BaggageClaim className="mx-[12px] sm:mx-[6px] sm:p-0.5" />
        </Link>

        <Link>
          <Heart className=" mx-[12px] sm:mx-[6px] sm:p-0.5" />
        </Link>
      </div>
    </div>
  );
}

export default SearchBarHeader;
