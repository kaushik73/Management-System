const Header = () => {
  return (
    <header className="h-header">
      <div className="bg-primary text-light shadow-lg ">
        <div className="container mx-auto flex justify-between items-center">
          {/* App Icon */}
          <div className="flex items-center space-x-2">
            <img
              src="path_to_your_app_icon.png" // Replace with your app icon path
              alt="App Icon"
              className="w-8 h-8"
            />
            <h1 className="text-xl font-semibold">Management System</h1>
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
            <img
              src="path_to_profile_picture.png" // Replace with the user profile image path
              alt="User Profile"
              className="w-10 h-10 rounded-full"
            />
            <span className="hidden md:block">Username</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
