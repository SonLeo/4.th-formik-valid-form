import React from 'react';
import { Formik } from 'formik';
import './App.css';

export default function App() {
  const REGEX = {
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
  };

  const handleSubmit = values => {
    alert(JSON.stringify(values));
  }

  return (
    <div className='main'>
      <Formik
        initialValues={{
          email: '',
          password: ''
        }}

        onSubmit={handleSubmit}

        validate={(values) => {
          const errors = {};

          if (!values.email) {
            errors.email = 'Required';
          } else if (!REGEX.email.test(values.email)) {
            errors.email = 'Invalid email address';
          }

          if (!values.password) {
            errors.password = 'Required';
          }

          return errors;
        }}
      >
        {({ values, errors, handleChange, handleSubmit, isSubmitting, handleBlur }) => (
          <form id='form-1' className='form' onSubmit={handleSubmit}>
            <h3 className='heading'>Đăng nhập</h3>
            <p className='desc'>Cùng nhau học lập trình tại CODEGYM ❤️</p>

            <div className='spacer'></div>

            <div className={`form-group ${errors.email ? 'invalid' : ''}`}>
              <label className='form-label' htmlFor='email'>
                Email
              </label>
              <input
                name='email'
                id='email'
                placeholder='VD: email@domain.com'
                className='form-control'
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <span className='form-message'>{errors.email && errors.email}</span>
            </div>

            <div className={`form-group ${errors.password ? 'invalid' : ''}`}>
              <label className='form-label' htmlFor='password'>
                Mật khẩu
              </label>
              <input
                name='password'
                type='password'
                id='password'
                placeholder='Nhập mật khẩu'
                className='form-control'
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <span className='form-message'>{errors.password && errors.password}</span>
            </div>

            <button type='submit' className='form-submit' disabled={isSubmitting}>
              Submit
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
}