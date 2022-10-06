import React, { useState, useEffect } from "react";
import validation from "./validation";

const SignupForm = ({submitForm}) => {

  const [values, setValues]=useState({
    fullname:"",
    email:"",
    password:"",
    token:""
  });

  const handleChange = (event)=>{
    setValues({
      ...values,
      [event.target.name]:event.target.value,
    })
  }

  const [errors, setErrors] = useState({});

  const [dataIsCorrect, setDataIsCorrect] = useState(false);

  const handleFormSubmit=(event)=>{
    event.preventDefault();
    setErrors(validation(values));
    setDataIsCorrect(true);
  }

  useEffect(() => {
    if (Object.keys(errors).length === 0 && dataIsCorrect){
      submitForm(true);
    }
  }, // eslint-disable-next-line
  [errors]);

  return (
  <div className="bg-gradient-to-br from-black to-green-700 w-full min-h-screen flex justify-center items-center">
    <div className="bg-white p-7 box-border rounded min-w-0 min-h-0">
      <div>
        <h2 className="text-center mt-10 mr-0 mb-10 ml-0 text-black text-3xl">Create account</h2>
      </div>
      <form className="form-wrapper">
        <div className="m-5 text-black text-lg">
          <label className="label">Full name</label>
          <input className="text-white bg-green-900 h-8 text-lg outline-none w-full mb-2 rounded-3xl" type="text" name="fullname" value={values.fullname} onChange={handleChange}/>
          {errors.fullname && <p className="text-red-400">{errors.fullname}</p>}
        </div>
        <div className="m-5 text-black text-lg">
          <label className="label">Email</label>
          <input className="text-white bg-green-900 h-8 text-lg outline-none w-full mb-2 rounded-3xl" type="email" name="email" value={values.email} onChange={handleChange}/>
          {errors.email && <p className="text-red-400">{errors.email}</p>}
        </div>
        <div className="m-5 text-black text-lg mb-5">
          <label className="label">Password</label>
          <input className="text-white bg-green-900 h-8 text-lg outline-none w-full mb-2 rounded-3xl" type="password" name="password" value={values.password} onChange={handleChange}/>
          {errors.password && <p className="text-red-400">{errors.password}</p>}
        </div>
        <div className="m-5 text-black text-lg">
          <label className="label">Token</label>
          <input className="text-white bg-green-900 h-8 text-lg outline-none w-full mb-2 rounded-3xl" type="token" name="token" value={values.token} onChange={handleChange}/>
          {errors.token && <p className="text-red-400">{errors.token}</p>}
        </div>
        <div>
          <button className="shadow-lg bg-gradient-to-br from-sky-500 to-indigo-500 flex uppercase text-lg rounded-3xl text-white py-2 px-14 m-auto outline-none border-none cursor-pointer ease-in duration-1000" onClick={handleFormSubmit}>Sign Up</button>
        </div>
      </form>
    </div>
  </div>
  );
};

export default SignupForm;