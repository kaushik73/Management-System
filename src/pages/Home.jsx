// import React from "react";
import { useSelector } from "react-redux";
import Input from  "../wrapperTags/Input";
import Heading from "../wrapperTags/Heading";
import Button from "../wrapperTags/Button";
import Header from "./Header";
import Footer from "./Footer";
import ReportIssueCard from "../components/ReportIssueCard";
import { Link } from "react-router-dom";

const Home = () => {
  const theme = useSelector((store) => store.config.theme);
  return (
    <>
         
          <div className="flex flex-col h-content">
              <div className="flex-grow bg-gradient-to-b from-blue-600 to-purple-600">
                  {/* Header Section */}
                  <div className="text-center py-10">
                      <Heading type="h1" data="Hi, how can we help you?" />
                      <div className="mt-8">
                          <Link to="search"><Input placeholder="Search for solutions, services and tickets" /></Link>
                      </div>
                  </div>

                  {/* Card Section */}
                  <section className="flex justify-center mt-10 p-8">
                      <div className="w-3/4 bg-indigo-800 text-white p-6 rounded-lg shadow-md">
                          <div className="flex justify-between items-center">
                              <div>
                                  <Heading type="h2" data="Welcome Action Items - India" />
                                  <p className="text-sm text-gray-300">Made with Love</p>
                              </div>
                              <div>
                                  <Link to="/tasklist"><Button size="large" /></Link>
                              </div>
                          </div>
                      </div>
                  </section>
                  <ReportIssueCard/>
              </div>
             
          </div>
      </>


  );
};

export default Home;
