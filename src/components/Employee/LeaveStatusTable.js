import React from "react";
import "./LeaveStatusTable.css";

const LeaveStatusTable = ({ leaves }) => {
    if (!leaves || leaves.length === 0) {
      return (
        <div className="leave-status-table-container">
          <div className="leave-status-table">
            No leave applications found.
          </div>
        </div>
      );
    }

  return (
    <div className="leave-status-table-container">
    <div className="leave-status-table">
      <h2>Leaves Application Status</h2>
      <table>
        <thead>
          <tr>
            <th>Leave applied for</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Reason</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {leaves.map((leave, index) => (
            <tr key={index}>
              <td>{leave.leaveType}</td>
              <td>{leave.fromDate}</td>
              <td>{leave.toDate}</td>
              <td>{leave.comment}</td>
              <td>Pending</td> {/* Assuming status is pending upon application */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
};

export default LeaveStatusTable;
