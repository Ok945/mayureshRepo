import React from 'react';
import { IoNotifications } from "react-icons/io5";
import { ImCoinDollar } from "react-icons/im";

const Header = () => {
  return (
    <div className="navbar bg-base-300 p-10 my-4 border-b-2 border-b-slate-600">
      <div className="flex-1 px-2 lg:flex-none">
        <a href="#link" className="text-lg font-bold">daisyUI</a>
      </div>
      <div className="flex justify-end flex-1 px-2">
        <div className="flex items-stretch">
          <a href="#link" className="btn btn-ghost rounded-btn"><IoNotifications style={{ height: '40px', width: '40px' }} /></a>
          <a href="#link" className="btn btn-ghost rounded-btn"><ImCoinDollar style={{ height: '40px', width: '40px' }} /></a>
          <div className="dropdown dropdown-hover mx-10">
            <div tabIndex={0} role="button">
              <div className="avatar">
                <div className="w-12 rounded-full">
                  <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
              </div>
            </div>
            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-32">
              <li><a href="#link">Item 1</a></li>
              <li><a href="#link">Item 2</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
