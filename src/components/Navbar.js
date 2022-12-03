import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav className="bg-slate-800 dark:bg-gray-800 ">
        <div className="px-8 mx-auto max-w-7xl">
          <div className="flex items-center justify-center h-16">
            <div>
              <a className="flex-shrink-0" href="/">
                <h1 className="text-4xl text-white font-bold items-center">
                  Shylesh's portfolio
                </h1>
              </a>
            </div>

            {/* <div className="block">
              <div className="flex items-center ml-4 md:ml-6"></div>
            </div> */}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
