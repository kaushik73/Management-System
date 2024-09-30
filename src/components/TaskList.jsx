import React from "react";
import { useFormik } from "formik";
import Header from "../pages/Header";
import { useState, useEffect } from "react";

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filterTask, setFilterTask] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await fetch(
          "https://localhost:44329/api/Report/GetAllTask"
        );

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        setTasks(data);
        setFilterTask(data);

        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchTasks();
  }, []);
  const handleSearch = (event) => {
    const value = event.target.value;
    setSearchQuery(value);

    if (value === "") {
      setFilterTask(tasks);
    } else {
      const filtered = tasks.filter(
        (task) =>
          task.subject.toLowerCase().includes(value.toLowerCase()) ||
          task.description.toLowerCase().includes(value.toLowerCase())
      );
      setFilterTask(filtered);
    }
  };

  if (loading) {
    return <div className="h-content">Loading...</div>;
  }

  if (error) {
    return <div className="h-content">Error: {error}</div>;
  }

  return (
    <div className="h-content">
      
        <div className="min-h-content mx-[20%] my-[2%]">
          <input
            type="text"
            placeholder="Search for solutions, services and tickets"
            value={searchQuery}
            onChange={handleSearch}
            className="w-full p-2 text-lg rounded-md border border-gray-300"
          />
        </div>
      
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Task List</h1>
        <form>
          <table className="min-w-full bg-white border border-gray-300">
            <thead>
              <tr>
                <th className="border px-4 py-2">Requester</th>
                <th className="border px-4 py-2">Subject</th>
                <th className="border px-4 py-2">Description</th>
                <th className="border px-4 py-2">Priority</th>
                <th className="border px-4 py-2">Status</th>
                <th className="border px-4 py-2">Due Date</th>
              </tr>
            </thead>
            <tbody>
              {filterTask.map((task, index) => (
                <tr key={index}>
                  <td className="border px-4 py-2 text-center">
                    {task.requester}
                  </td>
                  <td className="border px-4 py-2">{task.subject}</td>
                  <td className="border px-4 py-2">{task.description}</td>
                  <td className="border px-4 py-2 text-center">
                    {task.priority}
                  </td>
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
    </div>
  );
};

export default TaskList;
