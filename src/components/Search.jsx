import React, { useState } from 'react';
import Home from '../pages/Home';
import Header from '../pages/Header';

const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const articles = [
    'How to fix screen sharing issue on teams in Ubuntu',
    'IT Policies and Procedures',
    'OpenVPN Configuration',
    'Finding Basic info about your computer',
    'Steps to configure OpenVPN'
  ];

  const filteredArticles = articles.filter((article) =>
    article.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
        <div>
            <Header/>
        </div>
       <div className="help-component p-6">
            <div className="search-bar">
                <input
                type="text"
                placeholder="Search for solutions, services and tickets"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full p-2 text-lg rounded-md border border-gray-300"
                />
            </div>

            <div className="popular-articles mt-5">
                <h3 className="text-xl font-semibold">Popular Articles</h3>
                <ul className="list-none pl-0">
                {filteredArticles.map((article, index) => (
                    <li key={index} className="mb-2">
                    <a href="/" className="text-blue-600 no-underline hover:underline">
                        {article}
                    </a>
                    </li>
                ))}
                </ul>
            </div>
        </div>
    </>
  );
};

export default Search;
