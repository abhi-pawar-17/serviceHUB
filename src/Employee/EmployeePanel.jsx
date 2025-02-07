import React, { useState } from 'react';
import { Button, TextField, Snackbar } from '@mui/material';
import { FaTasks, FaUser, FaHome, FaPlus, FaCheckCircle } from 'react-icons/fa';

const EmployeePanel = () => {
  const [activeSection, setActiveSection] = useState('dashboard');
  const [tasks, setTasks] = useState([
    { id: 1, name: 'Fix leaky faucet', status: 'pending' },
    { id: 2, name: 'Install light fixture', status: 'completed' },
  ]);
  const [newTask, setNewTask] = useState('');
  const [openSnackbar, setOpenSnackbar] = useState(false);

  // Switch between different sections
  const handleSectionChange = (section) => {
    setActiveSection(section);
  };

  // Add a new task
  const handleAddTask = () => {
    const newTaskData = { id: tasks.length + 1, name: newTask, status: 'pending' };
    setTasks([...tasks, newTaskData]);
    setNewTask('');
    setOpenSnackbar(true);
  };

  // Mark a task as completed
  const handleCompleteTask = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, status: 'completed' } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <div className="flex flex-col lg:flex-row">
      {/* Sidebar */}
      <div className="w-full lg:w-64 bg-[#232F3E] text-white p-5 h-screen">
        <div className="text-3xl font-bold mb-10">
          <span className="text-[#FF9900]">Employee</span>Panel
        </div>
        <ul>
          <li className="mb-4">
            <Button
              className="flex items-center text-lg hover:text-[#FF9900]"
              onClick={() => handleSectionChange('dashboard')}
              startIcon={<FaHome />}
            >
              Dashboard
            </Button>
          </li>
          <li className="mb-4">
            <Button
              className="flex items-center text-lg hover:text-[#FF9900]"
              onClick={() => handleSectionChange('tasks')}
              startIcon={<FaTasks />}
            >
              My Tasks
            </Button>
          </li>
          <li className="mb-4">
            <Button
              className="flex items-center text-lg hover:text-[#FF9900]"
              onClick={() => handleSectionChange('reports')}
              startIcon={<FaUser />}
            >
              Reports
            </Button>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 bg-gray-50">
        {/* Dashboard Section */}
        {activeSection === 'dashboard' && (
          <div>
            <h1 className="text-3xl font-bold">Employee Dashboard</h1>
            <p className="mt-4">Welcome to your employee panel. View and manage your tasks here.</p>
          </div>
        )}

        {/* My Tasks Section */}
        {activeSection === 'tasks' && (
          <div>
            <h2 className="text-2xl font-bold mb-4">My Tasks</h2>
            <div className="mb-4">
              <TextField
                label="Task Name"
                variant="outlined"
                fullWidth
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
              />
              <Button
                variant="contained"
                color="primary"
                onClick={handleAddTask}
                startIcon={<FaPlus />}
                className="mt-2"
              >
                Add Task
              </Button>
            </div>

            {/* Task List */}
            <div>
              {tasks.length === 0 ? (
                <p>No tasks assigned yet</p>
              ) : (
                <ul>
                  {tasks.map((task) => (
                    <li key={task.id} className="flex justify-between items-center mb-2">
                      <span className={task.status === 'completed' ? 'line-through' : ''}>
                        {task.name}
                      </span>
                      {task.status === 'pending' ? (
                        <Button
                          variant="contained"
                          color="success"
                          startIcon={<FaCheckCircle />}
                          onClick={() => handleCompleteTask(task.id)}
                        >
                          Complete
                        </Button>
                      ) : (
                        <span className="text-green-500">Completed</span>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        )}

        {/* Reports Section */}
        {activeSection === 'reports' && (
          <div>
            <h2 className="text-2xl font-bold mb-4">Reports</h2>
            <p>Here you can submit your work reports and feedback.</p>
          </div>
        )}
      </div>

      {/* Snackbar for success message */}
      <Snackbar
        open={openSnackbar}
        autoHideDuration={2000}
        onClose={() => setOpenSnackbar(false)}
        message="Task added successfully"
      />
    </div>
  );
};

export default EmployeePanel;
