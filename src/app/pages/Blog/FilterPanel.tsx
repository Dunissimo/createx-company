import React, { FC } from "react";

const FilterPanel: FC = () => {
  return (
    <div className="container mx-auto py-20 flex justify-between items-center">
      <div className="sort flex items-center gap-12">
        <div className="all active">
          <button className="">All</button>
        </div>
        <div className="articles">
          <button className="relative before:content-[url(/public/images/homepage/blog/files-post.svg)] before:absolute before:top-[0.1rem] before:left-[-1.5rem] before:block">
            Articles
          </button>
        </div>
        <div className="videos">
          <button className="relative before:content-[url(/public/images/homepage/blog/play-post.svg)] before:absolute before:top-[0.1rem] before:left-[-1.5rem] before:block">
            Videos
          </button>
        </div>
        <div className="podcasts">
          <button className="relative before:content-[url(/public/images/homepage/blog/mic-post.svg)] before:absolute before:top-[0.1rem] before:left-[-1.5rem] before:block">
            Podcasts
          </button>
        </div>
      </div>
      <div className="categories">
        <label htmlFor="ctg" className="flex items-center">
          <h2 className="mr-4">Blog category</h2>
          <select name="categories" id="ctg">
            <option value="all">All themes</option>
            <option value="first">first theme</option>
            <option value="second">second theme</option>
          </select>
        </label>
      </div>
      <div className="search">search bar</div>
    </div>
  );
};

export default FilterPanel;
