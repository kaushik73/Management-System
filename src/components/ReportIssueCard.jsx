import React, { useState } from 'react';
import Button from "../wrapperTags/Button"
import RequestForm from './RequestForm';
import { Link } from 'react-router-dom'; 

const ReportIssueCard = () => {
  const[showForm, setShowForm] = useState(false);

  const handleRequestForm = () => {
    setShowForm(true); 
  }
  return (
    <div className="flex justify-center items-center ">
      <div className="bg-white shadow-md rounded-lg p-2 flex items-center space-x-2">
        <div className="flex-shrink-0">
          <svg
            className="h-12 w-12 text-green-500"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M17 2a1 1 0 011 1v12a1 1 0 01-1 1h-4l-4 4-4-4H3a1 1 0 01-1-1V3a1 1 0 011-1h14z" />
          </svg>
        </div>
        <div>
          <Link to="/requestform"><Button type='large' children='Report an issue Having trouble?' className='text-gray-500' /></Link>
        </div>
      </div>
    </div>
  );
};

export default ReportIssueCard;
