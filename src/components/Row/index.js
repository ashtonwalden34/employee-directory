import React, { useState, useEffect } from "react";
import Wrapper from "../Wrapper";
import API from "../../utils/API";
import Form from "../Form";


function EmployeeTable() {

  let [employees, setEmployees] = useState([]);

  let [filteredEmps, setFilteredEmps] = useState({
    emps: [],
    showAsc: true
  })

  useEffect(() => {
      API.search()
        .then(res => {
          setEmployees(res.data.results)
      });      
  }, [])

  // function to search for an employee's home state
  let searchFunction = (e) => {
    // searches by the user input as it is typed
    const filterResult = employees.filter(employee => employee.location.state.substring(0, e.target.value.length).toLowerCase() === e.target.value.toLowerCase());
    // console.log('filter stuff', filterResult)
    // setEmployees(filterResult)
    setFilteredEmps({...filteredEmps, emps: filterResult})
  
  }

  // function to sort fist names in ascending and descending order
  let handleSort = () => {
    // console.log('we got clicked!')
    // sorts names in ascending order
    function compareAsc( a, b ) {
      if ( a.name.first < b.name.first ){
        return -1;
      }
      if ( a.name.first > b.name.first ){
        return 1;
      }
      return 0;
    }
    // sorts names in descending order
    function compareDsc( a, b ) {
      if ( a.name.first > b.name.first ){
        return -1;
      }
      if ( a.name.first < b.name.first ){
        return 1;
      }
      return 0;
    }

    // if statement to display the correct sorted list of employees
    // if ascending then show ascending
    if (filteredEmps.showAsc) {
      var newEmpOrder = employees.sort(compareAsc)
     
      var newFilteredOrder = filteredEmps.emps.sort(compareAsc)
      // if descending show descending 
    } else {
      var newEmpOrder = employees.sort(compareDsc)
     
      var newFilteredOrder = filteredEmps.emps.sort(compareDsc)
    }

   
    // set employees to new order
    setEmployees(newEmpOrder)
    setFilteredEmps({...filteredEmps, emps: newFilteredOrder, showAsc: !filteredEmps.showAsc})
    // console.log('new orderrs', newEmpOrder, newFilteredOrder)
  

  }

  // console.log('this is our state', employees)
  // console.log('Filtered emps!!', filteredEmps)

  // variable to hold demployees being displayed and setting it equal to employees
  var empsToDisplay = employees
// if there are things in the filtered employees then display them
  if (filteredEmps.emps.length > 0) {
    empsToDisplay =filteredEmps.emps
  }
    return (
      <Wrapper>
        <Form handleInputChange = {searchFunction}/>
        {/* Container to hold a row, which is for one employee */}
        <div className="content">
            <table className="table table-striped table-hover">
                {/* Thread to hold list of items for employee */}
                <thead className="thead-dark">
                    <tr>
                      <th>Photo</th>
                      {/* When the first name column title is clicked it will sort by ascending or descending order */}
                      <th onClick={handleSort}>First Name</th>
                      <th>Last Name</th>
                      <th>City</th>
                      <th>State</th>
                      <th>Cell Phone</th>
                      <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {/* Populates thread with info from API */}
                  {empsToDisplay.map(employee => (
                    <tr key={employee.id.value}>
                      <td><img src={employee.picture.large} alt="Profile pic"/></td>
                      <td>{employee.name.first}</td>
                      <td>{employee.name.last}</td>
                      <td>{employee.location.city}</td>
                      <td>{employee.location.state}</td>
                      <td>{employee.cell}</td>
                      <td>{employee.email}</td>
                    </tr>))}
                </tbody>
            </table>
        </div>
      </Wrapper>
                  )}

export default EmployeeTable;

