import React, { Component } from "react";
import Container from "../components/Container";
import EmployeeTable from "../components/Row";

class Search extends Component {
    state = {
        lastName: "",
        results: [],
        search: []
    }

    render() {
        return (
          <div>
            <Container style={{ minHeight: "80%" }}>
              <EmployeeTable/>
            </Container>
          </div>
        );
      }
}

export default Search