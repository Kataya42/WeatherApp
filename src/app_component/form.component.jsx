import React from "react";

const Form = props =>{
    return(
        <div ClassName="container">
            <div>
                {props.error ? error() : null}
            </div>
            <form onSubmit={props.loadweather}>
                <div className= "row">
                    <div ClassName= "col-md-3 offset-md-2">
                        <input 
                        type="text"
                        className="form-control"
                        name="city" 
                        autoComplete="off"
                        />
                    <div ClassName= "col-md-3"></div>
                        <input 
                        type="text" 
                        className="form-control" 
                        name="country" 
                        autoComplete="off"
                        />

                    <div ClassName= "col-md-3 mt-md-0 text-md-left"></div>
                        <button className="btn btn-warning">Get Weather</button>
                    </div>
                </div>    
            </form>
        </div>
    );
};
function error(){
    return(
        <div className="alert alert-danger mx-5" role="alert">
            Please Enter correct City and Country
        </div>
    )
}

export default Form;