import React from "react";

const Background = () => {
  return (
    <div className="fixed z-[2] w-full h-screen ">
      <div className="absolute top-[5%]  w-full py-10 flex justify-center text-zinc-500 font-semibold text-xl ">
        Documents
      </div>
      <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  text-[13vh] font-semibold leading-none tracking-tighter text-zinc-900">
        MohiUddin.
      </h1>
    </div>
  );
};

export default Background;
