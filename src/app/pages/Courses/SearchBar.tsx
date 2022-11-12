import React, { FC } from "react";

const SearchBar: FC = () => {
  return (
    <div>
      <form
        action="get"
        className="relative after:content-[url(/public/images/coursesPage/search.svg)] hover:after:opacity-100 after:block after:w-6 after:h-full after:absolute after:top-[.5rem] after:right-[1rem] after:opacity-50"
      >
        <input
          className=" border-2 px-4 py-2 rounded min-w-[300px] hover:shadow hover:border-gray-500"
          placeholder="Search course..."
          type="text"
        />
      </form>
    </div>
  );
};

export default SearchBar;
