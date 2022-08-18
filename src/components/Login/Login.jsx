import axios from 'axios';
import React, { useState } from 'react';
import joi from 'joi'
import { useNavigate } from 'react-router-dom';

export default function Login(props) {
  let navigate = useNavigate()
  const [arrayOfErrors, setarrayOfErrors] = useState([]);
  const [loading, setloading] = useState(false);
  const [errorMsg, seterrorMsg] = useState("");
  const [user, setuser] = useState({
    
    email: "",
    password: ""
  });
  //function to get the values of the inputs
  function getUser(e) {
    let myUser = { ...user };
    myUser[e.target.name] = e.target.value;
    setuser(myUser);
    console.log(user);
  }

  function validateLoginForm(user) {
    setloading(true);
    let schema = joi.object({
      
      email: joi.string().email({ minDomainSegments: 2, tlds: { allow: ["net", "com", "org"] } }),
      password: joi.string().pattern(/^[A-Z][a-z]{3,8}$/)
    });

    //hna el schema elly ktbtha b5liha t validate el user 
    //abortEarly make all the errors appear in the error.details array 
    //34an eldefault bta3 el function anha t5rog awl m tla2y error w t3rdo 3ltol
    
    return schema.validate(user ,{abortEarly:false});
  }

  //submit the registration form
  async function submitLoginForm(e) {
    //to prevent loading by default after submit the form
    e.preventDefault();
    

    let resultOfValidate = validateLoginForm(user);
    if (resultOfValidate.error) {
      setloading(false)
      setarrayOfErrors(resultOfValidate.error.details)
    }
    else {
      //send the data of user to the api and making loading on the button until api response
      let { data } = await axios.post("https://routeegypt.herokuapp.com/signin", user);
      setloading(true);

      if (data.message === "success") {
        localStorage.setItem("userToken", data.token)
        props.getUserData();
        seterrorMsg("");
        setloading(false)
        navigate("/home")

      } else {
        seterrorMsg(data.message)
        setloading(false)

      }
    }


  }
  return (
    <>
      <h1 className='fw-bolder my-4'>Login Now!</h1>
      <form onSubmit={submitLoginForm}>
        {arrayOfErrors.length>0 ? arrayOfErrors.map((error,index)=><div key={index} className='alert alert-danger'>{error.message}</div>) :""}
        {errorMsg ? <div className='alert alert-danger'>{errorMsg.split(":")[1]}</div> : ""}

        <label htmlFor='email'>email :</label>
        <input onChange={getUser} type="email" className='form-control my-3' name='email' id='email' />

        <label htmlFor='password'>password :</label>
        <input onChange={getUser} type="password" className='form-control my-3' name='password' id='password' />
        <button className='btn btn-outline-info '>{loading ? <i className='fas fa-spinner fa-spin'></i> : "Login"}</button>
      </form>
    </>
  )
}
