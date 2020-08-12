import React, { useState, useEffect } from 'react';
// imports table from material ui
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
// imports api call from utils folder
import API from "../../utils/API"

// imports api call from utils folder

function EmployeeTable() {
    // creates an array called employees and fills it with employees from API
    const [employees, setEmployees] = useState([]);
    useEffect(() => {
        API.search()
          .then(res => {
            setEmployees(res.data.results)
        });      
    }, []);

  // creates a table with columns for first name, last name, city, cell phone, and email
  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Image</TableCell>
            <TableCell align="left">First Name</TableCell>
            <TableCell align="left">Last Name</TableCell>
            <TableCell align="left">City</TableCell>
            <TableCell align="left">Cell Phone</TableCell>
            <TableCell align="left">Email</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {/* Maps through array of employees and fills in the table with their information */}
          {employees.map((employee) => (
            <TableRow key={employee.id.value}>
              <TableCell component="th" scope="employee">
                {employee.id.value}
              </TableCell>
              <TableCell align="left"><img src={employee.picture.large} alt="Profile pic"/></TableCell>
              <TableCell align="left">{employee.name.first}</TableCell>
              <TableCell align="left">{employee.name.last}</TableCell>
              <TableCell align="left">{employee.location.city}</TableCell>
              <TableCell align="left">{employee.cell}</TableCell>
              <TableCell align="left">{employee.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

// exports employee table function component
export default EmployeeTable