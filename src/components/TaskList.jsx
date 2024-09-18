import React from "react";
import { useFormik } from "formik";
import Header from "../pages/Header";
import { useState, useEffect } from "react";

const TaskList = () => {
    const [tasks, setTasks] = useState([]); // State to store the tasks
    const [loading, setLoading] = useState(true); // State to handle loading
    const [error, setError] = useState(null); // State to handle errors
  
    useEffect(() => {
      // Fetch data from API when component mounts
      const fetchTasks = async () => {
        try {
          const response = await fetch("https://localhost:7084/api/Report/GetAllTask");
  
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
  
          const data = await response.json(); // Parse the JSON response
          setTasks(data); // Set the tasks in the state
          
          setLoading(false); // Set loading to false after data is loaded
        } catch (err) {
          setError(err.message); // Handle errors
          setLoading(false); // Set loading to false even in case of error
        }
      };
  
      fetchTasks();
    }, []); // Empty dependency array ensures this runs only once on mount
  
    // If loading, display loading message
    if (loading) {
      return <div>Loading...</div>;
    }
  
    // If there is an error, display the error message
    if (error) {
      return <div>Error: {error}</div>;
    }
  
    return (
      <>
        <Header />
        <div className="container mx-auto p-4">
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
                {tasks.map((task, index) => (
                  <tr key={index}>
                    <td className="border px-4 py-2 text-center">{task.taskId}</td>
                    <td className="border px-4 py-2">{task.subject}</td>
                    <td className="border px-4 py-2">{task.description}</td>
                    <td className="border px-4 py-2 text-center">{task.priority}</td>
                    <td className="border px-4 py-2 text-center">
                      {task.status === 0 ? "Pending" : "Completed"}
                    </td>
                    <td className="border px-4 py-2 text-center">
                      {new Date(task.dueDate).toLocaleDateString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </form>
        </div>
      </>
    );
  };

export default TaskList;
