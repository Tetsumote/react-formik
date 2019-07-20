import React from 'react';
import './App.css';
import { Formik } from "formik";
import * as Yup from 'yup';

function App() {
  return (
    <div className="App">
      <Formik
      initialValues={{
        email:''
      }}
      onSubmit={(values, {setSubmitting}) => {
        console.log(values)
        setSubmitting(false);
       }}
      validationSchema={Yup.object().shape({
        email: Yup.string()
        .email()
        .required('Required'),
      })}
      >{
        props => {
          const {
            values,
            touched,
            errors,
            dirty,
            isSubmitting,
            handleChange,
            handleBlur,
            handleSubmit,
            handleReset
          } = props;
          return <form onSubmit={handleSubmit}>
            <label htmlFor="email" style={{ display: 'block' }}>
              Email 
            </label>
            <input
            id="email"
            placeholder="Enter your email"
            type="text"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            className={
              errors.email && touched.email ? 'text-input error' : 'text-input'
            }
            />
            {errors.email && touched.email && (
              <div className="input-feedback">{errors.email}</div>
            )}

            <button
            type="button"
            className="outline"
            onClick={handleReset}
            disabled={!dirty || isSubmitting}
            >
              Reset
            </button>
            <button
            type="submit"
            disabled={isSubmitting}
            >Submit</button>
            
          </form>
        }
      }
      </Formik>
    </div>
  );
}

export default App;
