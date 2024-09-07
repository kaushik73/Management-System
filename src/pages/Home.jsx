// import React from "react";
import { useSelector } from "react-redux";
import { FaBeer } from "react-icons/fa";

const Home = () => {
  const theme = useSelector((store) => store.config.theme);
  return (
    <div className="h-content bg-gray-500">
      <p>
        Home {theme} <FaBeer />
      </p>
    </div>
  );
};

export default Home;
