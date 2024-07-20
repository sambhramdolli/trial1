import React from 'react';
import './sidebar.css'; 

const SideBar = ({ onButtonClick }) => {

  return (
    <div className="sidebar">
      <div className="vertical-bar">
        <img src="https://img.icons8.com/?size=100&id=7761&format=png&color=FFFFFF" alt="Collaboration Icon" className="vertical-bar-icon" />
        <img src="https://img.icons8.com/?size=100&id=8951&format=png&color=FFFFFF" alt="Conference Icon" className="vertical-bar-icon" />
        <img src="https://img.icons8.com/?size=100&id=qaDBSQJh1PHW&format=png&color=FFFFFF" alt="Leave House Icon" className="vertical-bar-icon" />
        <img src="https://img.icons8.com/?size=100&id=34401&format=png&color=FFFFFF" alt="Cash In Hand Icon" className="vertical-bar-icon" />
        <img src="https://img.icons8.com/?size=100&id=50897&format=png&color=FFFFFF" alt="Checked User Male Icon" className="vertical-bar-icon" />
        <div className="dropdown-content">
          <button className="button4" onClick={() => onButtonClick('addEmployee')}>
            ADD Employee
          </button>
          <button className="button5" onClick={() => onButtonClick('viewEmployeeDetails')}>View Employee Details</button>
          <button className="button6" onClick={() => onButtonClick('viewLeaveRequest')}>View Leave Request</button>
          <button className="button7" onClick={() => onButtonClick('salaryReports')}>Salary Reports</button>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
