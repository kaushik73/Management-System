// import React from "react";
import { useSelector } from "react-redux";
import Input from  "../wrapperTags/Input";
import Heading from "../wrapperTags/Heading";
import Button from "../wrapperTags/Button";
import Header from "./Header";
import Footer from "./Footer";

const Home = () => {
  const theme = useSelector((store) => store.config.theme);
  return (
    <>
          <div>
              <Header />
          </div>
          <div className="flex flex-col h-content">
              <div className="flex-grow bg-gradient-to-b from-blue-600 to-purple-600">
                  {/* Header Section */}
                  <header className="text-center py-20">
                      <Heading type="h1" data="Hi, how can we help you?" className="text-4xl font-bold text-white" />
                      <div className="mt-8">
                          <Input placeholder="Search for solutions, services and tickets" />
                      </div>
                  </header>

                  {/* Card Section */}
                  <section className="flex justify-center mt-10">
                      <div className="w-3/4 bg-indigo-800 text-white p-6 rounded-lg shadow-md">
                          <div className="flex justify-between items-center">
                              <div>
                                  <Heading type="h2" data="Welcome Action Items - India" />
                                  <p className="text-sm text-gray-300">Made with Love</p>
                              </div>
                              <div>
                                  <Button size="large" />
                              </div>
                          </div>
                      </div>
                  </section>
              </div>
          </div>

          <div>
              <Footer />
          </div>
      </>


  );
};

export default Home;
