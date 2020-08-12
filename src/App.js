import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Search from "./pages/Directory"
import Wrapper from "./components/Wrapper";
import EmployeeTable from "./components/Row";


function App() {
  return (
    <Router>
      <div>
        <Wrapper>
          <Route exact path="/" component={Search} />
          <EmployeeTable />
        </Wrapper>
      </div>
    </Router>
  );
}

export default App;