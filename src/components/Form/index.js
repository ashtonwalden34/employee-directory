import React from "react";
import "./style.css"

function Form(props) {
    return(
        <form className="search">
            <div className="form-group">
                <input 
                // assignes value of props.search
                value={props.search} 
                // function to handle change in input field
                onChange={props.handleInputChange}
                name="name"
                list="names"
                type="text"
                className="form-control"
                // displays message until user starts typing
                placeholder="Search for an employee by name"
                id="searchName"
                />
            <button type="submit" onClick={props.handleFormSubmit} className="btn btn-success">
                Search
            </button>

            </div>
        </form>
    )
}

export default Form;