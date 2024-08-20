import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";
import toast from "react-hot-toast";

const Navbar = () => {
  const { user, Logout } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const search = e.target.search.value;
    console.log(search);
  };

  const handleLogout = () =>{
    Logout()
      .then((result) => {
        toast.success("Logout Successful");
      })
      .catch((error) => {
        console.error(error);
      });
  }
  return (
    <div className="mt-2">
      <div className="navbar bg-gray-200 mb-5 rounded-lg">
        <div className="flex-1">
          <NavLink to={"/"}>
            <p className="btn btn-ghost text-xl font-semibold">BdMart</p>
          </NavLink>
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
            {user ? (
              <div>
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                >
                  <div className="w-10 rounded-full">
                    <img
                      alt="img"
                      src={user?.photoURL}
                    />
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
                >
                  <li>
                    <p className="font-bold">{user?.displayName}</p>
                  </li>
                 
                  <li onClick={handleLogout}>
                    <p>Logout</p>
                  </li>
                </ul>
              </div>
            ) : (
              <div>
                <NavLink to={"/login"} className="btn">
                  Log In
                </NavLink>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
