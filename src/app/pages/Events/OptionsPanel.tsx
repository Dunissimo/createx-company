import React, { FC } from "react";
import Container from "../../components/Container";
import ErrorBoundary from "../../components/Indicators/ErrorBoundary";
import SearchBar from "../../components/SearchBar";
import View from "./View";

const OptionsPanel: FC = () => {
  return (
    <ErrorBoundary>
      <div className="py-20">
        <Container>
          <div className="flex items-center justify-between">
            <label className="flex items-center gap-4">
              <p>Event category</p>
              <select className="select" name="category" id="category">
                <option value="All">All themes</option>
                <option value="master-class">Master class</option>
                <option value="lecture">Lecture</option>
              </select>
            </label>
            <label className="flex items-center gap-4">
              <p>Sort by</p>
              <select className="select" name="sorting" id="sorting">
                <option value="newest">Newest</option>
                <option value="oldest">oldest</option>
              </select>
            </label>
            <label className="flex items-center gap-2">
              <p>Show</p>
              <input
                type="number"
                className="perPage max-w-[60px] py-2 pl-2 pr-2"
                defaultValue="9"
                name="eventsPerPage"
                id="perPage"
              />
              <p>events per page</p>
            </label>
            <SearchBar />
            <View />
          </div>
        </Container>
      </div>
    </ErrorBoundary>
  );
};

export default OptionsPanel;
