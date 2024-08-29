import React, { SelectHTMLAttributes } from "react";

export type SortSelectValue = "price" | "rating";

interface SortSelectProps extends SelectHTMLAttributes<HTMLSelectElement> {}

const SortSelect = (props: SortSelectProps) => {
  return (
    <div className="my-4 flex items-center gap-2">
      <label className="cursor-pointer text-xl" htmlFor="sort">
        Sort By:
      </label>

      <select id="sort" className="text-xl border border-slate-400 rounded-lg px-2 py-1" {...props}>
        <option value="price">Price</option>
        <option value="rating">Rating</option>
      </select>
    </div>
  );
};

export default SortSelect;
