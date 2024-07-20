import React, { useState } from 'react';
import './Employee.css';
import NavBar from '../Navbar.js';
import SideBar1 from './Employeesidebar.js';
import ApplyLeave from './LeaveForm.js';
import SalaryReport from '../SalaryReport.js';
import LeaveRequests from '../LeaveRequests.js';
import LeaveStatusTable from './LeaveStatusTable.js';

const EmployeePage = () => {
  const [selectedComponent, setSelectedComponent] = useState(null);
  const [leaves, setLeaves] = useState([]);

  const handleButtonClick = (componentName) => {
    setSelectedComponent(componentName);
  };

  const handleAddLeave = (newLeave) => {
    setLeaves([...leaves, newLeave]);
  };

  return (
    <main>
      <NavBar />
      <div className="home-page">
        <SideBar1 onButtonClick={handleButtonClick} />
        <div className="content">
          {selectedComponent === 'Leave' && <div />}
          {selectedComponent === 'Calender' && <div/>}
          {selectedComponent === 'Project' && <LeaveRequests />}
          {selectedComponent === 'salaryReports' && <SalaryReport />}
          {selectedComponent === 'applyLeave' && <ApplyLeave onAddLeave={handleAddLeave} />}
          {selectedComponent === 'leaveStatus' && <LeaveStatusTable leaves={leaves} />}
        </div>
      </div>
    </main>
  );
};

export default EmployeePage;
