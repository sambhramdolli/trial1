import React, { useState } from 'react';
import './Employeesidebar.css';

const SideBar = ({ onButtonClick }) => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const handleApplyLeaveClick = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  const handleApplyLeaveButtonClick = () => {
    onButtonClick('applyLeave');
  };

  return (
    <div className="sidebar">
      <div className="vertical-bar">
        <img src="https://img.icons8.com/?size=100&id=7761&format=png&color=FFFFFF" alt="Collaboration Icon" className="vertical-bar-icon" />
        <img src="https://img.icons8.com/?size=100&id=8951&format=png&color=FFFFFF" alt="Conference Icon" className="vertical-bar-icon" />
        <img src="https://img.icons8.com/?size=100&id=qaDBSQJh1PHW&format=png&color=FFFFFF" alt="Leave House Icon" className="vertical-bar-icon" />
        <img src="https://img.icons8.com/?size=100&id=34401&format=png&color=FFFFFF" alt="Cash In Hand Icon" className="vertical-bar-icon" />
        <img src="https://img.icons8.com/?size=100&id=50897&format=png&color=FFFFFF" alt="Checked User Male Icon" className="vertical-bar-icon" />
        <div className="dropdown-content">
          <button className="button4" onClick={handleApplyLeaveClick}>
            Leave
          </button>
          {isDropdownVisible && (
            <div className="dropdown-buttons">
              <button className="button4-1" onClick={handleApplyLeaveButtonClick}>Apply Leave</button>
              <button className="button4-2" onClick={() => onButtonClick('leaveStatus')}>Leave Status</button>
              <button className="button4-3" onClick={() => onButtonClick('Remaining Leave')}>Remaining Leave</button>
            </div>
          )}
          <button className="button5" onClick={() => onButtonClick('View Leave Status')}>Calendar</button>
          <button className="button6" onClick={() => onButtonClick('viewLeaveRequest')}>Project</button>
          <button className="button7" onClick={() => onButtonClick('salaryReports')}>Salary Reports</button>
        </div>
      </div>
    </div>
  );
};

export default SideBar;




