import React from "react";
import CoverHero from "./components/CoverHero";
import Blog from "./components/Blog";
import Feed from "./components/Feed";
import CreatePost from "./components/CreatePost";

const Community = () => {
  return (
    <div className="w-full justify-center my-12">
      <CoverHero />
      {/* <CreatePost /> */}
      <Blog />
      {/* <Feed /> */}
    </div>
  );
};

export default Community;
