import { FaUserTie } from "react-icons/fa6";
import {LOGO_URL} from "../utils/constansts";

const Header = () => {
  return (
    <header className="h-header">
      <div className="bg-primary text-light shadow-lg ">
        <div className="container mx-auto flex justify-between items-center">
          {/* App Icon */}
          <div className="flex items-center space-x-2">
            <img
              src={LOGO_URL} // Replace with your app icon path
              alt="App Icon"
              className="w-8 h-8"
            />
            <h1 className="text-xl font-semibold">Action Items</h1>
          </div>

          {/* Links */}
          <nav className="hidden md:flex space-x-6">
            <p className="hover:text-accent">Home</p>
            <p className="hover:text-accent">Dashboard</p>
            <p className="hover:text-accent">Reports</p>
            <p className="hover:text-accent">Settings</p>
          </nav>

          {/* User Profile */}
          <div className="flex items-center space-x-3">
            <FaUserTie/>
            <span className="hidden md:block">Username</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
