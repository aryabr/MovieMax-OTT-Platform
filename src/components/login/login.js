import React, { useEffect } from "react";
import { useState } from "react";
import Navbarlogin from "./navbarlogin";
import './login.css';
import axios from "axios";
import { useNavigate } from "react-router-dom";



const Login = () => {

  const[username,setUsername]=useState('');
  const[password,setPassword]=useState('');
  const[error, setError] = useState('');
  const [message, setMessage] = useState(localStorage.getItem('SignupMessage') || '');
   var navigate = useNavigate()

  useEffect(()=>{localStorage.removeItem('SignupMessage')},[]);

  function attemptLogin(event) {
    event.preventDefault();
    
    axios.post('http://127.0.0.1:8000/movieapi/login/',{
        username:username,
        password:password
    }).then(response=>{
        setError('')
        const token = response.data.token;
        const userId = response.data.userId;
        localStorage.setItem('token',token);
        localStorage.setItem('userId',userId);
        navigate('/home')

        console.log(response.data.token)
    }).catch(error=>{
        if(error.response.data.errors){
            setError(Object.values(error.response.data.errors).join(' '))
        }else if(error.response.data.message){
            setError(error.response.data.message)
        }else{
            setError('Failed to login user. Please contact admin')
        }
    })
}



 



 

  return (
  
   <div className="vh-90 login1">
    <Navbarlogin/>
    <div className="container mt-4 ">
  
    <div className="row d-flex align-items-center justify-content-center">
      <div className="col-sm-5 login ">
        <h2>Login</h2>
      
        {message&&<div className="alert alert-success">{message}</div>}
        {error&&<div className="alert alert-danger">{error}</div>}

        <form method="post" onSubmit={attemptLogin}>
     
          <div className="form-group">
           <label>Username:</label>
           <input type="text" placeholder="Enter your Username"
            className="form-control" value={username}  onChange={(event) => setUsername(event.target.value)}
          
       
              required />
                    </div>
        <div className="form-group">
           <label>Password:</label>
           <input type="password"  placeholder="Enter your Password"
            className="form-control"  value={password}  onChange={(event) => setPassword(event.target.value)}
            
          
              required />
              </div>
                   

       <button  className="btn btn-block btn-danger"type="submit">Login</button><br></br><br></br><br></br><br></br>
       
      </form>
    
    </div>
    </div>
    
    
    </div>
    </div>
  );
};

export default Login;
