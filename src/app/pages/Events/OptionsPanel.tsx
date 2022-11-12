import React, { FC } from "react";

const OptionsPanel: FC = () => {
  return (
    <div className="container mx-auto flex items-center justify-between">
      <label className="flex items-center gap-4">
        <p>Event category</p>
        <select name="" id="">
          <option value="All">All themes</option>
          <option value="master-class">Master class</option>
          <option value="lecture">Lecture</option>
        </select>
      </label>
      <label className="flex items-center gap-4">
        <p>Sort by</p>
        <select name="" id="">
          <option value="newest">Newest</option>
          <option value="oldest">oldest</option>
        </select>
      </label>
      <label className="flex items-center gap-4">
        <p>Show</p>
        <input
          type="number"
          className="max-w-[70px] pl-4 pr-4"
          defaultValue="9"
          name=""
          id=""
        />
        <p>events per page</p>
      </label>
      {/* <SearchBar /> */}
      {/* <View/> */}
    </div>
  );
};

export default OptionsPanel;
