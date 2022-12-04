import React from "react";

const Table = () => {
  return (
    <div className="justify-center flex ">
      <div className="overflow-x-auto  relative ">
        <table className="grid text-sm text-left text-gray-500 dark:text-gray-400 ">
          <thead className="text-xs flex text-white uppercase bg-slate-800 dark:bg-gray-700 dark:text-gray-400 rounded-xl">
            <tr>
              <th scope="col" className="py-3 px-8">
                Title
              </th>
              <th scope="col" className="py-3 pl-12 pr-6">
                Duration
              </th>
              <th scope="col" className="py-3 pl-8 pr-8">
                description
              </th>
              <th scope="col" className="py-3 pl-[5rem] pr-[2rem]">
                Demo
              </th>
              <th scope="col" className="py-3 pl-[2.7rem]">
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
                Express JS
              </th>
              <td className="py-4 px-6">15 days</td>
              <td className="py-4 px-6"> Rest Api backend</td>
              <td className="py-4 px-6 text-blue-500">
                <a href="https://github.com/shylesh128/assets-expressJS-backend">
                  click here
                </a>
              </td>
              <td className="py-4 px-6  text-blue-500">
                <a href="https://github.com/shylesh128/assets-expressJS-backend">
                  click here
                </a>
              </td>
            </tr>
            <tr className="bg-white  border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Arty shop
              </th>
              <td className="py-4 px-6">1 month</td>
              <td className="py-4 px-6">E-commerce</td>
              <td className="py-4 px-6  text-blue-500">
                <a href="https://arty-shop.vercel.app/">click here </a>
              </td>
              <td className="py-4 px-6  text-blue-500">
                <a href="https://arty-shop.vercel.app/">click here </a>
              </td>
            </tr>
            <tr className="bg-white  dark:bg-gray-800">
              <th
                scope="row"
                className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Wacc project
              </th>
              <td className="py-4 px-6">3 months</td>
              <td className="py-4 px-6">full stack PHP web App</td>
              <td className="py-4 px-6  text-blue-500">
                <a href="https://github.com/shylesh128/wacc-project">
                  click here
                </a>
              </td>
              <td className="py-4 px-6  text-blue-500">
                <a href="https://github.com/shylesh128/wacc-project">
                  click here
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
