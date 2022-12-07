import React from "react";
export const CardBlog = ({ title, content }) => {
  return (
    <div className="group container w-full h-full mx-auto px-10 py-4 flex flex-col rounded-xl drop-shadow-md border-2 border-slate-100 font-body bg-white-100 hover:bg-[#F7C9FF] ">
      <h1 className="pb-4 text-primary-80 font-semibold text-xl text-left md:text-2xl font-body break-all">
        {title}
      </h1>
      <p className="text-left font-body text-base md:text-lg break-all">
        {content}
      </p>
    </div>
  );
};
