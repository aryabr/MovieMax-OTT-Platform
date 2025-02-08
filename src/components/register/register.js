import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import NavbarRegister from "./navregister";
import '../login/login.css';
import axios from "axios";
import { useNavigate } from "react-router-dom";



const Register= () => {

  const[username,setUsername]=useState('');
  const[password,setPassword]=useState('');
  const [confirmPassword, setConfirmpassword] = useState('');
  

  const[error,setError]=useState('');

 
  var navigate = useNavigate()

  // function addUser(event) {
  //   event.preventDefault();  // Prevent default form submission


  //   if(!username||!password||!confirmPassword){
  //     setError("All fields are requires");
  //     return;
  //   }
   
  //   if(password !== confirmPassword){
  //     setError("passwords do not match");
  //     return;
  //   }
  

  //   axios.post('http://127.0.0.1:8000/movieapi/signup/',{
  //     username: username,  // Use 'username' to align with Django model
  //     password1: password,
  //     password2: confirmPassword,
      
  //   },{ headers: {
  //     "Content-Type": "application/json",
  //     "Accept": "application/json"
  //   }
     
  //   }).then(response=>{
  //       navigate('/login')
  //   }).catch(error=>{
  //     setError("Failed to register")
  //   })


 



  // }

  function addUser(event){
    event.preventDefault();
    if(!username||!password||!confirmPassword){
          setError("All fields are requires");
          return;
        }
       
        if(password !== confirmPassword){
          setError("passwords do not match");
          return;
        }
      var userdetails = {
          username: username,
          password1: password,
          password2: confirmPassword,
      }
      axios.post('http://127.0.0.1:8000/movieapi/signup/',userdetails).then(response=>{
          setError('');
          localStorage.setItem(`SignupMessage`,`Welcome, ${username},you sign up successfully`)
          navigate('/login');
         
      }).catch(error=>{
          if(error.response.data.errors){
              setError(Object.values(error.response.data.errors).join(' '));
          }else{
              setError('Failed to connect to api');
          }
      })
  }


  return (
  
   <div className="vh-90 login1">
    <NavbarRegister/>
    <div className="container mt-4 ">
  
    <div className="row d-flex align-items-center justify-content-center">
      <div className="col-sm-5 login ">
        <h2>Register</h2>
        {error&&<div className="alert alert-danger">{error}</div>}
       
        <form method="post"  onSubmit={addUser}>
        <div className="form-group">
           <label>Username:</label>
           <input type="text" placeholder="Enter your Username"
            className="form-control" value={username} onChange={(event) => setUsername(event.target.value)}
          
       
              required />
                    </div>
     
          
        <div className="form-group">
           <label>Password:</label>
           <input type="password"  placeholder="Enter your Password"
            className="form-control"  value={password} onChange={(event) => setPassword(event.target.value)}
            
          
              required />
              <div className="form-group">
           <label>ConfirmPassword:</label>
           <input type="password" placeholder="Confirm your Password"
            className="form-control" value={confirmPassword} onChange={(event) =>setConfirmpassword(event.target.value)}
          required />
            </div>
              </div>
                   
         <button  className="btn btn-block btn-danger"type="submit">Register</button><br/><br/>
       
      
       
      </form>
    
    </div>
    </div>
    
    
    </div>
    </div>
  );
};

export default Register;
