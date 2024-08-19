import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {

    const handleSubmit = (e) =>{
        e.preventDefault();
        const search = e.target.search.value;
        console.log(search)
    }
  return (
    <div className="mt-2">
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <NavLink to={'/'}><p className="btn btn-ghost text-xl font-semibold">BdMart</p></NavLink>
        </div>
        <div className="flex-none gap-2">
          <div>
            <form onSubmit={handleSubmit}>
              <div className="flex justify-center items-center gap-2">
                <div>
                  <label>
                    <input
                      type="text"
                      name="search"
                      placeholder="Search here"
                      className="input rounded-l-xl w-full"
                    />
                  </label>
                </div>
                <div>
                  <input className="btn" type="submit" value="Search" />
                </div>
              </div>
            </form>
          </div>
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a className="justify-between">
                  Profile
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
