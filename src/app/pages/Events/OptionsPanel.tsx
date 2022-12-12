import { ChangeEventHandler, FC, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Container from "../../components/Container";
import View from "./View";

const OptionsPanel: FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [theme, setTheme] = useState(searchParams.get("category") || "all");
  const [perPage, setPerPage] = useState(searchParams.get("perPage") || "9");
  const [sorting, setSorting] = useState(
    searchParams.get("sorting") || "newest"
  );
  const [search, setSearch] = useState(searchParams.get("query") || "");

  const handleChange: ChangeEventHandler<
    HTMLInputElement | HTMLSelectElement
  > = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    switch (name) {
      case "category":
        setTheme(value);
        setSearchParams({
          category: value,
          perPage: perPage,
          sorting: sorting,
          query: search,
        });
        break;
      case "perPage":
        if (+value < 1) {
          setPerPage("1");
          break;
        }
        if (+value > 100) {
          setPerPage("1");
          break;
        }
        setPerPage(value);
        setSearchParams({
          category: theme,
          perPage: value,
          sorting: sorting,
          query: search,
        });
        break;
      case "sorting":
        setSorting(value);
        setSearchParams({
          category: theme,
          perPage: perPage,
          sorting: value,
          query: search,
        });
        break;
      case "query":
        setSearch(value);
        setSearchParams({
          category: theme,
          perPage: perPage,
          sorting: sorting,
          query: value,
        });
    }
  };
  // TODO: улучшить код

  return (
    <div className="py-20">
      <Container>
        <form className="flex items-center justify-between">
          <label htmlFor="category" className="flex items-center gap-4">
            Event category
            <select
              onChange={handleChange}
              className="select"
              name="category"
              id="category"
              value={theme}
            >
              <option value="all">All themes</option>
              <option value="master-class">Master class</option>
              <option value="lecture">Lecture</option>
              <option value="workshop">Workshop</option>
            </select>
          </label>
          <label htmlFor="sorting" className="flex items-center gap-4">
            Sort by
            <select
              className="select"
              name="sorting"
              id="sorting"
              onChange={handleChange}
            >
              <option value="newest">Newest</option>
              <option value="oldest">Oldest</option>
            </select>
          </label>
          <label htmlFor="perPage" className="flex items-center gap-2">
            Show
            <input
              type="number"
              onChange={handleChange}
              className="perPage max-w-[60px] py-2 pl-2 pr-2"
              name="perPage"
              id="perPage"
              value={perPage}
            />
            events per page
          </label>
          <div className="search-div">
            <input
              onChange={handleChange}
              className="search-input"
              placeholder="Search"
              name="query"
              type="text"
              value={search}
            />
          </div>
          <View />
        </form>
      </Container>
    </div>
  );
};

export default OptionsPanel;
