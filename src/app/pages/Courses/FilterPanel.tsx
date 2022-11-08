import React, { FC } from "react";
import SearchBar from "./SearchBar";

const FilterPanel: FC = () => {
  return (
    <section>
      <div className="container">
        <div className="filters"></div>
        <SearchBar />
      </div>
    </section>
  );
};

export default FilterPanel;
