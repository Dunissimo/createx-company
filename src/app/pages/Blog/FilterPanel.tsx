import React, { FC } from "react";
import Container from "../../components/Container";
import Tabs from "../../components/Tabs";
import SearchBar from "../../components/SearchBar";

const FilterPanel: FC = () => {
  const sort = ["All", "Articles", "Videos", "Podcasts"];

  return (
    <div className="py-20">
      <Container>
        <div className="flex justify-between items-center">
          <div className="sort hidden lg:flex items-center gap-12">
            <Tabs arr={sort} />
          </div>
          <div className="categories">
            <label htmlFor="ctg" className="flex items-center">
              <h2 className="mr-4">Blog category</h2>
              <select className="select" name="categories" id="ctg">
                <option value="all">All themes</option>
                <option value="first">first theme</option>
                <option value="second">second theme</option>
              </select>
            </label>
          </div>
          <SearchBar />
        </div>
      </Container>
    </div>
  );
};

export default FilterPanel;
