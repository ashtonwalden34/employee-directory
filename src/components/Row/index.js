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

  let searchFunction = (e) => {
    const filterResult = employees.filter(employee => employee.location.state.substring(0, e.target.value.length).toLowerCase() === e.target.value.toLowerCase());
    console.log('filter stuff', filterResult)
    //setEmployees(filterResult)
    setFilteredEmps({...filteredEmps, emps: filterResult})
  
  }

  let handleSort = () => {
    console.log('we got clicked!')
    function compareAsc( a, b ) {
      if ( a.name.first < b.name.first ){
        return -1;
      }
      if ( a.name.first > b.name.first ){
        return 1;
      }
      return 0;
    }

    function compareDsc( a, b ) {
      if ( a.name.first > b.name.first ){
        return -1;
      }
      if ( a.name.first < b.name.first ){
        return 1;
      }
      return 0;
    }


    if (filteredEmps.showAsc) {
      var newEmpOrder = employees.sort(compareAsc)
     
      var newFilteredOrder = filteredEmps.emps.sort(compareAsc)
    } else {
      var newEmpOrder = employees.sort(compareDsc)
     
      var newFilteredOrder = filteredEmps.emps.sort(compareDsc)
    }

   

    setEmployees(newEmpOrder)
    setFilteredEmps({...filteredEmps, emps: newFilteredOrder, showAsc: !filteredEmps.showAsc})
    console.log('new orderrs', newEmpOrder, newFilteredOrder)
  

  }

  console.log('this is our state', employees)
  console.log('Filtered emps!!', filteredEmps)
  var empsToDisplay = employees

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

