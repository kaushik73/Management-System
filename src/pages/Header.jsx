import { FaUserTie } from "react-icons/fa6";
import { LOGO_URL } from "../utils/constansts";
import { Link } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const [user, setUser] = useState(null);

  const handleLogout = () => {
    // Logic to handle logout
    setUser('Gyanendra');
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
            <p className="hover:text-accent">Home</p>
          </Link>
          <p className="hover:text-accent">Dashboard</p>
          <p className="hover:text-accent">Reports</p>
          <p className="hover:text-accent">Settings</p>
        </div>

        {/* User Profile */}
        <div className="flex space-x-4 justify-center items-center mr-3">
          <FaUserTie />
          <div className="">
            {user ? (
              <>
                <Link to="/"><span className="">{user}</span></Link>
               <button onClick={handleLogout} className=""/> 
              </>
            ) : (
              <>
                <Link to="/signup">
                  <span className="">Sign Up</span>
                </Link>
              </>
            )}
          </div>
        </div>
    </header>
  );
};

export default Header;
