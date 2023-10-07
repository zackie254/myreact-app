'use client'
import React,{ useState }  from 'react'
import axios from 'axios'; 
const Register = (props) => {
  const [data, setdata] = useState({ Email: '', Password: '', EmployeeName: '', City: '', Department: '' })  
  const apiUrl = "http://localhost:1680/api/employee/InsertEmployee";  

  const Registration = (e) => {  
    e.preventDefault();  
    debugger;  
    const data1 = { Email: data.Email, Password: data.Password, EmployeeName: data.EmployeeName, City: data.City, Department: data.Department };  
    axios.post(apiUrl, data1)  
      .then((result) => {  
        debugger;  
        console.log(result.data);  
        if (result.data.Status == 'Invalid')  
          alert('Invalid User');  
        else  
          props.history.push('/Dashboard')  
      })  
  }  
  const onChange = (e) => {  
    e.persist();  
    debugger;  
    setdata({ ...data, [e.target.name]: e.target.value });  
  }
  
  
  return (
    <div className="container">  
    <div className="row">  
      <div className="col-sm-12 btn btn-primary" style={{ "margin": "6px" }}>  
        Add New Contact  
     </div>  
    </div>  
    <div className="card o-hidden border-0 shadow-lg my-5" style={{ "marginTop": "5rem!important;" }}>  
      <div className="card-body p-0">  
        <div className="row">  
          <div className="col-lg-12">  
            <div className="p-5">  
              <div className="text-center">  
                <h1 className="h4 text-gray-900 mb-4">Create a New User</h1>  
              </div>  
              <form onSubmit={Registration} className="user">  
                <div className="form-group row">  
                  <div className="col-sm-6 mb-3 mb-sm-0">  
                    <input type="text" name="Email" onChange={onChange} value={data.Email} className="form-control" id="exampleFirstName" placeholder="Email" />  
                  </div>  
                  <div className="col-sm-6">  
                    <input type="Password" name="Password" onChange={onChange} value={data.Password} className="form-control" id="exampleLastName" placeholder="Password" />  
                  </div>  
                </div>  
                <div className="form-group">  
                  <input type="text" name="EmployeeName" onChange={onChange} value={data.EmployeeName} className="form-control" id="exampleInputEmail" placeholder="EmployeeName" />  
                </div>  
                <div className="form-group row">  
                  <div className="col-sm-6 mb-3 mb-sm-0">  
                    <input type="text" name="City" onChange={onChange} value={data.City} className="form-control" id="exampleInputPassword" placeholder="City" />  
                  </div>  
                  <div className="col-sm-6">  
                    <input type="text" name="Department" onChange={onChange} value={data.Department} className="form-control" id="exampleRepeatPassword" placeholder="Department" />  
                  </div>  
                </div>  
                <button type="submit" className="btn btn-primary  btn-block">  
                  Create User  
              </button>  
                <hr />  
              </form>  
              <hr />  
            </div>  
          </div>  
        </div>  
      </div>  
    </div>  
  </div>  
  )
}

export default Register;