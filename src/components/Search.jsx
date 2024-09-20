import React, { useEffect, useState } from 'react';
import Header from '../pages/Header';

const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchTask, setSearchTask] = useState([]);

  
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await fetch(`https://localhost:7084/api/Report/searchTask?searchItem=${searchQuery}`);
  
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setSearchTask(data);
        console.log(data); 
      } catch (err) {
        console.error('Fetch error:', err); 
      }
    };
    if (searchQuery) {
      fetchTasks();
    }
  }, [searchQuery]);

  

  return (
    <>
      <div>
        <Header />
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
      </div>

      {searchTask && searchQuery  &&  < div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Task List</h1>
        <form>
          <table className="min-w-full bg-white border border-gray-300">
            <thead>
              <tr>
                <th className="border px-4 py-2">Task ID</th>
                <th className="border px-4 py-2">Subject</th>
                <th className="border px-4 py-2">Description</th>
                <th className="border px-4 py-2">Priority</th>
                <th className="border px-4 py-2">Status</th>
                <th className="border px-4 py-2">Due Date</th>
              </tr>
            </thead>
            <tbody>
              {searchTask.map((task, index) => (
                <tr key={index}>
                  <td className="border px-4 py-2 text-center">{task.taskId}</td>
                  <td className="border px-4 py-2">{task.subject}</td>
                  <td className="border px-4 py-2">{task.description}</td>
                  <td className="border px-4 py-2 text-center">{task.priority}</td>
                  <td className="border px-4 py-2 text-center">
                    {task.status === 0 ? 'Pending' : 'Completed'}
                  </td>
                  <td className="border px-4 py-2 text-center">
                    {new Date(task.dueDate).toLocaleDateString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </form>
      </div>}
    </>
  );
};

export default Search;
