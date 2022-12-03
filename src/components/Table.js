import React from "react";

const Table = () => {
  return (
    <div className="justify-center flex ">
      <div className="overflow-x-auto  relative ">
        <table className="grid text-sm text-left text-gray-500 dark:text-gray-400 rounded-full">
          <thead className="text-xs flex text-white uppercase bg-slate-800 dark:bg-gray-700 dark:text-gray-400 rounded-xl">
            <tr>
              <th scope="col" className="py-3 px-6">
                Title
              </th>
              <th scope="col" className="py-3 pl-12">
                Duration
              </th>
              <th scope="col" className="py-3 pl-8 pr-8">
                Type
              </th>
              <th scope="col" className="py-3 pl-[5.5rem]">
                Demo
              </th>
              <th scope="col" className="py-3 pl-12">
                Source
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="py-4 px-6 m-2 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                portfolio
              </th>
              <td className="py-4 px-6">15 days</td>
              <td className="py-4 px-6"> Web page</td>
              <td className="py-4 px-6">none</td>
              <td className="py-4 px-6">www.nolink.ntg</td>
            </tr>
            <tr className="bg-white  border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                portfolio
              </th>
              <td className="py-4 px-6">15 days</td>
              <td className="py-4 px-6"> Web page</td>
              <td className="py-4 px-6">none</td>
              <td className="py-4 px-6">www.nolink.ntg</td>
            </tr>
            <tr className="bg-white  dark:bg-gray-800">
              <th
                scope="row"
                className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                portfolio
              </th>
              <td className="py-4 px-6">15 days</td>
              <td className="py-4 px-6">static Web page</td>
              <td className="py-4 px-6">none</td>
              <td className="py-4 px-6">www.nolink.ntg</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
