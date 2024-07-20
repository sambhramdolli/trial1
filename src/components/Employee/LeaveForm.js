import React, { useState } from 'react';
import './LeaveForm.css';

const ApplyLeave = ({ onAddLeave }) => {
  const [leaveType, setLeaveType] = useState('');
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
  const [comment, setComment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newLeave = { leaveType, fromDate, toDate, comment };
    onAddLeave(newLeave);
    setLeaveType('');
    setFromDate('');
    setToDate('');
    setComment('');
  };

  return (
    <div className="leave-form-container">
      <form className="leave-form" onSubmit={handleSubmit}>
        <h2>Apply for Leave</h2>
        <label htmlFor="leaveType">Leave Type</label>
        <input
          type="text"
          id="leaveType"
          value={leaveType}
          onChange={(e) => setLeaveType(e.target.value)}
          required
        />
        <label htmlFor="fromDate">From Date</label>
        <input
          type="date"
          id="fromDate"
          value={fromDate}
          onChange={(e) => setFromDate(e.target.value)}
          required
        />
        <label htmlFor="toDate">To Date</label>
        <input
          type="date"
          id="toDate"
          value={toDate}
          onChange={(e) => setToDate(e.target.value)}
          required
        />
        <label htmlFor="comment">Reason</label>
        <input
          type="text"
          id="comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ApplyLeave;


