import React, { useState } from 'react';
import { useHistory } from 'react-router';
// import styled from 'styled-components';

export default function Login() {
  const [values, setValues] = useState({});
  const [errors, setError] = useState();
  const history = useHistory();

  const handleChange = (event) => {
    event.persist();
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  async function fetchData() {
    await fetch('https://express-delivery-api.herokuapp.com/api/v1/user/login', {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user_name: values.user_name,
        password: values.password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (Object.prototype.hasOwnProperty.call(data, 'error')) {
          setError(data.error);
          setValues({
            user_name: '',
            password: '',
          });
        }
        if (Object.prototype.hasOwnProperty.call(data, 'token')) {
          localStorage.setItem('token', data.token);
          history.push('/dashboard');
        }
      });
  }

  const handleSubmit = (event) => {
    if (event) event.preventDefault();
    fetchData();
  };


  return (
    <div>
      <h1>Login</h1>
      <p>{errors}</p>
      <form onSubmit={handleSubmit}>
        <input name="user_name" type="text" placeholder="User Name" value={values.user_name} onChange={handleChange} />
        <input name="password" type="password" placeholder="Password" value={values.password} onChange={handleChange} />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
