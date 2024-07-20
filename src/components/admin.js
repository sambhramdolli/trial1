import React, { useState } from 'react';
import './admin.css';
import NavBar from './Navbar';
import SideBar from './sidebar';
import AddEmployee from './addEmployee'; 
import SalaryReport from './SalaryReport.js'; 
import LeaveRequests from './LeaveRequests.js'; 

const Admin = () => {
  const [selectedComponent, setSelectedComponent] = useState(null);

  const handleButtonClick = (componentName) => {
    setSelectedComponent(componentName);
  };

  return (
    <main>
      <NavBar />
      <div className="home-page">
        <SideBar onButtonClick={handleButtonClick} />
        <div className="content">
          {selectedComponent === 'addEmployee' && <AddEmployee />}
          {selectedComponent === 'viewEmployeeDetails' && <div/>}
          {selectedComponent === 'viewLeaveRequest' && <LeaveRequests/>}
          {selectedComponent === 'salaryReports' && <SalaryReport/>}
        </div>
      </div>
    </main>
  );
};

export default Admin;
