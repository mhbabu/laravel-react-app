import React, { useState } from "react";
import Joi from "joi-browser";
import toast from "react-hot-toast";
// import { handleSubmit, handleOnChangeData } from "../utils/helper";
import auth from "../services/auth/authService";
import { Link } from "react-router-dom";

export default function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [formErrors, setFormErrors] = useState({});

  const handleOnChange = ({ currentTarget: input }) => {
    const data = { ...formData };
    data[input.name] = input.value;
    setFormData(data);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      await auth.login(formData.email, formData.password);
      window.location = "/task-boards";
    } catch (ex) {
      if (ex.response && ex.response.status === 422) {
        const errors = { ...formErrors };
        errors.email = ex.response.data.message;
        setFormErrors(errors);
      }
    }
  };

  return (
    <div className='container mt-5'>
      <div className='row justify-content-center'>
        <div className='col-md-8'>
          <div className='card'>
            <div className='card-header'>Login</div>
            <div className='card-body'>
              <form onSubmit={handleFormSubmit}>
                <div className='row mb-3'>
                  <label htmlFor='email' className='col-md-4 col-form-label text-md-right'> E-Mail Address </label>
                  <div className='col-md-6'>
                    <input id='email' type='email' onChange={handleOnChange} className={`form-control ${ formErrors["email"] && "is-invalid"}`} name='email' value={formData["email"]} placeholder='Email Address' />
                      {formErrors["email"] && (
                        <span className='invalid-feedback' role='alert'>
                          <strong>{formErrors["email"]}</strong>
                        </span>
                      )}
                  </div>
                </div>
                <div className='row mb-3'>
                  <label htmlFor='password' className='col-md-4 col-form-label text-md-right'> Password </label>
                  <div className='col-md-6'>
                    <input id='password' type='password' onChange={handleOnChange} className='form-control' name='password' value={formData["password"]} />
                  </div>
                </div>
                <div className='row mb-0'>
                  <div className='col-md-8 offset-md-4'>
                    <button type='submit' className='btn btn-primary'> Login </button>
                    <Link to='/register' className='btn btn-link'> Register an account </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
