import React, { useState } from 'react';
import Header from './Header';

export default function AddTask({ onSave }) {
  const [task, setTask] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [date, setDate] = useState('');

  const addTaskFormHandler = (e) => {
    e.preventDefault();

    // Validate required fields
    if (task.trim() === '' || description.trim() === '' || image.trim() === '' || date.trim() === '') {
      alert('Please fill in all fields.');
      return;
    }

    // Call onSave prop
    onSave(task, description, image, date);

    // Reset form fields
    setTask('');
    setDescription('');
    setImage('');
    setDate('');

    // Optional: Reset form directly
    e.target.reset();
  };

  return (
    <>
      <Header />
      <div className="container py-20 mx-auto mt-10 bg-black w-75">
        <form className="max-w-screen-md mx-auto" onSubmit={addTaskFormHandler}>
          <div className="flex mt-5">
            <span className="inline-flex items-center px-3 text-xl text-gray-900 bg-gray-200 border border-gray-300 border-e-0 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
              <i className="bi bi-list-task"></i>
            </span>
            <input
              type="text"
              value={task}
              onChange={(e) => setTask(e.target.value)}
              className="rounded-none rounded-e-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-xl p-2.5"
              placeholder="Add Task"
              required
            />
          </div>
          <div className="flex mt-5">
            <span className="inline-flex items-center px-3 text-xl text-gray-900 bg-gray-200 border border-gray-300 border-e-0 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
              <i className="bi bi-list-task"></i>
            </span>
            <input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="rounded-none rounded-e-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-xl p-2.5"
              placeholder="Add Task Description"
              required
            />
          </div>
          <div className="flex mt-5">
            <span className="inline-flex items-center px-3 text-xl text-gray-900 bg-gray-200 border border-gray-300 border-e-0 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
              <i className="bi bi-list-task"></i>
            </span>
            <input
              type="text"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              className="rounded-none rounded-e-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-xl p-2.5"
              placeholder="Add image"
              required
            />
          </div>
          <div className="flex mt-5">
            <span className="inline-flex items-center px-3 text-xl text-gray-900 bg-gray-200 border border-gray-300 border-e-0 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
              <i className="bi bi-calendar-event-fill"></i>
            </span>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="rounded-none rounded-e-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-xl p-2.5"
              placeholder="Add Task"
              required
            />
          </div>

          <div className='mt-10'>
            <button type="submit" className="text-white bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 font-medium rounded-lg text-xl px-5 py-2.5 text-center me-2 mb-2 fw-bold">ADD TASK</button>

            <button type="reset" className="text-white bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 font-medium rounded-lg text-xl px-5 py-2.5 text-center me-2 mb-2 fw-bold">RESET</button>
          </div>
        </form>
      </div>
    </>
  );
}
