import React from "react";
import "./style.css"

function Form(props) {
    return(
        <form className="search">
            <div className="form-group">
                <input 
                // assigns value of props.search
                value={props.search} 
                // function to handle change in input field
                onChange={props.handleInputChange}
                name="name"
                list="names"
                type="text"
                className="form-control"
                // displays message until user starts typing
                placeholder="Search for employees by home state"
                id="searchName"
                />
                {/* Submit button, not functioning correctly, adjusted to reset list */}
            <button type="submit" onClick={props.handleFormSubmit} className="btn btn-success">
                Reset Employee List
            </button>
            </div>
        </form>
    )
}

// exports Form function object
export default Form;