import { FC } from "react";
import Container from "../../components/Container";
import Tabs from "../../components/Tabs";

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
          <div className="search-div">
            <input
              // onChange={handleChange}
              // TODO: сделать обработку
              className="search-input"
              placeholder="Search"
              name="query"
              type="text"
              // value={search}
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default FilterPanel;
