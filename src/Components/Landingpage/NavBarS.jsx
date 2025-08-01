import { CgProfile } from "react-icons/cg";
import { NavLink } from "react-router-dom";


const NavBarS = () => {
    const links = <>
    <NavLink><li className="bg-green-400 p-2 mr-2 rounded-lg text-white">Home</li></NavLink>
    <NavLink><li className="bg-green-400 p-2 mr-2 rounded-lg text-white">Home</li></NavLink>
    <NavLink><li className="bg-green-400 p-2 mr-2 rounded-lg text-white">Home</li></NavLink>
    <NavLink><li className="bg-green-400 p-2 mr-2 rounded-lg text-white">Home</li></NavLink>
    <NavLink><li className="bg-green-400 p-2 mr-2 rounded-lg text-white">Home</li></NavLink>
    </>
    return (
        <>
       <div className="bg-gray-200">
         <div className="navbar ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow ">
       {links}
      </ul>
    </div>
    <a className="btn btn-ghost text-xl text-green-900 font-bold"> X Digital Bank</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     {links}
    </ul>
  </div>
  <div className="navbar-end">
    <NavLink className="btn bg-green-500 text-white rounded-lg">Register/Login</NavLink>
   <p className="text-4xl"> <CgProfile></CgProfile></p>
  </div>
</div>
        </div>
   </> );
};


export default NavBarS;