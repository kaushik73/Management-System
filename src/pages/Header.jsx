import { FaUserTie } from "react-icons/fa6";
import { LOGO_URL } from "../utils/constansts";
import { Link } from "react-router-dom";
import { useState } from "react";
import ClickableLink from "../wrapperTags/ClickableLink";

const Header = () => {
  const [user, setUser] = useState(null);

  const handleLogout = () => {
    // Logic to handle logout
    setUser("Gyanendra");
  };
  return (
    <header className="h-header bg-primary text-light shadow-lg  flex justify-between items-center ">
      {/* App Icon */}
      <Link to="/">
        <div className="flex justify-center items-center space-x-2 ml-3">
          <img
            src={LOGO_URL} // Replace with your app icon path
            alt="App Icon"
            className="w-8 h-8"
          />
          <h1 className="text-xl font-semibold">Action Items</h1>
        </div>
      </Link>

      {/* Links */}
      <div className="flex justify-center items-center space-x-5">
        <Link to="/">
          <ClickableLink>Home</ClickableLink>
        </Link>
        <Link className="">
          <ClickableLink>Dashboard</ClickableLink>
        </Link>
        <Link className="">
          {" "}
          <ClickableLink>Simplot</ClickableLink>
        </Link>
        <Link className="">
          {" "}
          <ClickableLink>Settings</ClickableLink>
        </Link>
      </div>

      {/* User Profile */}
      <div className="flex space-x-1 justify-center items-center mr-3">
        <FaUserTie />
        <div className="">
          {user ? (
            <>
              <Link to="/">
                <ClickableLink>{user}</ClickableLink>
              </Link>
              <button onClick={handleLogout} className="" />
            </>
          ) : (
            <>
              <Link to="/signin">
                <span className="">
                  {" "}
                  <ClickableLink>Sign In</ClickableLink>
                </span>
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
